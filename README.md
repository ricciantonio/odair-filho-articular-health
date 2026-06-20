# Odair Filho Personal Trainer

Site institucional premium em React + TanStack Start + Tailwind v4.

## Desenvolvimento

```bash
bun install
bun run dev
```

## Deploy na Vercel

1. Faça push do projeto para um repositório GitHub.
2. Em https://vercel.com → **Add New Project** → importe o repositório.
3. Framework preset: **Vite** (auto-detectado). Build command: `bun run build`. Output: `dist`.
4. Clique em **Deploy**.

## Domínio próprio

Project Settings → Domains → adicione `seudominio.com.br` e configure o DNS conforme indicado pela Vercel.

## Variáveis de ambiente (Analytics)

Em Vercel → Settings → Environment Variables:

- `VITE_GA_ID` – ID do Google Analytics 4 (`G-XXXXXXX`)
- `VITE_GTM_ID` – ID do Google Tag Manager (`GTM-XXXXXX`)

## Personalização rápida

Toda a configuração editável está no topo de `src/routes/index.tsx`:

```ts
const WHATSAPP_NUMBER = "5543999999999"; // DDI+DDD+número, somente dígitos
const WHATSAPP_MESSAGE = "Olá, gostaria de agendar uma avaliação.";
const INSTAGRAM_URL = "https://instagram.com/odairfilho";
const INSTAGRAM_HANDLE = "@odairfilho";
```

### Alterar preços dos planos
Edite o array `plans` dentro do componente `Plans` em `src/routes/index.tsx`.

### Substituir imagens
Troque os arquivos em `src/assets/hero.jpg` e `src/assets/odair.jpg`.

### Alterar cores do tema
Edite os tokens em `src/styles.css` (blocos `:root` e `.light`). A cor principal é `--brand`.

### SEO
Meta tags e JSON-LD ficam em `src/routes/__root.tsx`. Sitemap em `src/routes/sitemap[.]xml.ts`.
