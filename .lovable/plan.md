# Animate on Scroll — Plano

Recomendação: **Tailwind v4 + CSS puro + um pequeno hook JS** com `IntersectionObserver`. Não precisa de biblioteca externa (AOS, Framer Motion). O projeto já tem a base pronta em `src/styles.css` (classe `.reveal` + `.reveal.in-view`), só falta o "gatilho" JS e variantes utilitárias.

## Por quê assim
- **Só CSS** não detecta entrada no viewport de forma confiável cross-browser (o `animation-timeline: view()` ainda não tem suporte universal em 2026 — Safari/Firefox parciais).
- **Tailwind v4** é CSS-first: definimos `@utility` no `styles.css` e usamos via `className`.
- **JS mínimo** (hook reutilizável de ~20 linhas) liga/desliga a classe `.in-view` quando o elemento entra na tela.

## O que será criado/alterado

### 1. `src/styles.css` — adicionar utilitários `@utility`
Expandir o `.reveal` atual para variantes (fade-up, fade-in, fade-left, fade-right, zoom-in) e suporte a `delay` via CSS custom property:

```css
@utility scroll-animate {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--scroll-delay, 0ms);
}
@utility scroll-animate-left  { /* translateX(-24px) */ }
@utility scroll-animate-right { /* translateX(24px) */ }
@utility scroll-animate-zoom  { /* scale(0.92) */ }

/* estado ativado */
.in-view.scroll-animate,
.in-view.scroll-animate-left,
.in-view.scroll-animate-right,
.in-view.scroll-animate-zoom {
  opacity: 1;
  transform: none;
}

@media (prefers-reduced-motion: reduce) {
  [class*="scroll-animate"] { opacity: 1 !important; transform: none !important; }
}
```

### 2. `src/hooks/use-scroll-animate.ts` — novo hook
```ts
import { useEffect } from "react";

export function useScrollAnimate(selector = "[data-animate]") {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(selector);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target); // dispara só uma vez
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
}
```

### 3. Uso em qualquer rota/componente
```tsx
useScrollAnimate();

<h2 data-animate className="scroll-animate">Título</h2>
<p   data-animate className="scroll-animate" style={{ ['--scroll-delay' as any]: '150ms' }}>
  Sub
</p>
<img data-animate className="scroll-animate-left" />
```

## Detalhes técnicos
- `IntersectionObserver` é nativo, zero dependência, ótima performance.
- `unobserve` após disparar evita re-trigger ao rolar de volta (mude para `remove("in-view")` no `else` se quiser repetir).
- `prefers-reduced-motion` respeitado por acessibilidade.
- Compatível com SSR do TanStack Start: hook roda em `useEffect` (client-only).
- O `.reveal` atual no `styles.css` continua funcionando — os novos `@utility` ficam em paralelo; depois podemos migrar.

## Fora de escopo
- Não vou aplicar nos componentes existentes do site agora — só criar a infra. Quando aprovar, posso aplicar nas seções (Hero, Sobre, Serviços, Planos) num passo seguinte.
