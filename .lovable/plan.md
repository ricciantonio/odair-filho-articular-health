## Problema

Na overlay sobre a foto (seção Sobre, linhas 335–339 de `src/routes/index.tsx`), os textos usam `text-white` / `text-white/70` / `text-white/90`. O gradiente atrás deles é `from-background/90`, que no light theme vira branco — texto branco sobre fundo branco fica invisível.

## Mudança

Em `src/routes/index.tsx` (linhas 336–338), trocar as cores fixas por tokens semânticos que se adaptam ao tema:

- "Personal Trainer" (eyebrow): `text-white/70` → `text-foreground/70`
- "Odair Filho" (nome): `text-white` → `text-foreground`
- "Cref 021795": `text-white/90` → `text-primary` (vermelho da marca, para destaque)

Resultado: no dark, fica claro sobre o gradiente escuro; no light, fica escuro/vermelho sobre o gradiente branco. Sem mudanças em nenhuma outra seção.