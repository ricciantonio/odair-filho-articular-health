## Por que está dando 404 na Vercel

Este projeto **não é um app Vite/React estático** — é **TanStack Start com SSR**, configurado para rodar em **Cloudflare Workers** (veja `vite.config.ts` e `src/server.ts`). Quando a Vercel detecta como "Vite" e faz build padrão, ela publica apenas os assets estáticos sem o servidor SSR — por isso qualquer rota retorna 404.

Você tem duas opções:

---

### Opção A (recomendada): Publicar pela própria Lovable

Um clique no botão **Publish** (canto superior direito do editor) e o site fica no ar em `*.lovable.app`, já com SSR, rotas e sitemap funcionando. Depois você conecta um domínio próprio em Project Settings → Domains. Zero configuração, zero risco de quebrar o build.

### Opção B: Adaptar o projeto para a Vercel

Trocar o preset de deploy de Cloudflare para Vercel:

1. Adicionar `nitro: { preset: "vercel" }` em `vite.config.ts` (via `defineConfig` do `@lovable.dev/vite-tanstack-config`).
2. Atualizar o `README.md` com as novas instruções (sem `vercel.json` manual — o Nitro gera o output correto em `.vercel/output`).
3. Na Vercel: **Framework Preset = Other**, Build Command = `bun run build`, Output deixar em branco (Nitro define automaticamente).
4. Re-deploy.

> Observação: o `src/server.ts` (wrapper de erro SSR) continua funcionando nos dois presets.

---

**Qual opção você quer?** Se não responder, sigo com a **Opção A** (publicar pela Lovable é mais rápido e confiável) e te explico como apontar seu domínio depois.
