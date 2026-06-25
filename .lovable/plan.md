## Verificar builds e gerar dist de produção

### Passos

1. Rodar `bun run build:dev` e capturar o erro completo (o trecho enviado está truncado em "rendering chunks..." — preciso ver a mensagem de erro real do Nitro/Vite).
2. Rodar `bun run build` (build de produção) e capturar saída.
3. Se houver erro, diagnosticar e corrigir (provavelmente algo relacionado ao bump do `@tanstack/react-start` para 1.168.26 ou à remoção da rota `sitemap[.]xml.ts`).
4. Confirmar que `dist/` foi gerado com `dist/client` e o worker do Cloudflare.

### Saída esperada

- `bun run build:dev` passa.
- `bun run build` passa.
- Diretório `dist/` populado.