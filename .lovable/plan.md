
# Nova seção: "Como o acompanhamento profissional transforma seu treino"

## O que será feito

### 1. Upload das 3 imagens via Lovable Assets
Subir as 3 imagens anexadas para o CDN (não ficam no repo):
- `src/assets/beneficio-personal.jpg.asset.json` (Imagem 1 — checklist)
- `src/assets/objetivo-claro.jpg.asset.json` (Imagem 2 — objetivo)
- `src/assets/acompanhamento-treino.jpg.asset.json` (Imagem 3 — potencializa)

### 2. Nova seção em `src/routes/index.tsx`
Inserida **após Depoimentos** e **antes de FAQ**, com id `beneficios`.

**Estrutura:**
- Header da seção: eyebrow "Diferenciais" + título "Como o acompanhamento profissional transforma seu treino"
- 3 blocos verticais empilhados (`space-y-20 md:space-y-28`) usando grid 2 colunas no desktop (`md:grid-cols-2`), empilhado no mobile
- Alternância via `md:[&>*:nth-child(2)]:order-first` OU renderizando cada bloco com prop `reverse`:
  - Bloco 1: imagem esquerda, texto direita
  - Bloco 2: texto esquerda, imagem direita (reverse)
  - Bloco 3: imagem esquerda, texto direita
- Imagens com `rounded-2xl`, `shadow-elevated`, `aspect-[4/5]`, `object-cover`
- Textos usando tokens semânticos: título `text-foreground` (font-display, bold), corpo `text-muted-foreground`, detalhe vermelho `text-primary` (barra lateral 4px na imagem do próprio arquivo já embutida)
- Animações scroll: imagem `scroll-animate-left` (ou right no reverse), texto `scroll-animate-right` (ou left), com `--scroll-delay` de 100ms no texto

**Sem links clicáveis nos blocos** — apenas conteúdo estático.

### 3. Conteúdo dos 3 blocos
Textos exatamente como fornecidos pelo usuário, com alt-text conforme instruído (SEO local para "Personal trainer em Londrina").

## Detalhes técnicos
- Tokens de tema: `bg-background`, `text-foreground`, `text-muted-foreground`, `text-primary`, `border-border` — funciona em light e dark
- Espaçamento generoso: seção com `py-24 md:py-32`, gap interno entre blocos `gap-20 md:gap-28`
- Responsivo: `grid md:grid-cols-2 gap-8 md:gap-16 items-center`
- Reutiliza o hook `useScrollAnimate` já ativo na página

## Fora de escopo
- Não alterar outras seções
- Não adicionar CTAs/links nos blocos
- Não mexer no favicon, header ou meta tags
