## Ativar HTTPS e tornar o site visível no Google

Boas notícias: no Lovable o **SSL é provisionado automaticamente**, sem ação manual. Você não precisa subir certificado, configurar Let's Encrypt nem mexer em porta 443. Mas o "não aparece no Google" é outro problema (indexação), então vou tratar os dois.

### Parte 1 — Confirmar que o HTTPS está ativo

1. Abrir **Project Settings → Project section → Domains**.
2. Olhar o status do `odairfilhopersonal.com.br`:
   - **Active** (verde) → HTTPS já está ligado. Acesse `https://odairfilhopersonal.com.br` e veja o cadeado no navegador.
   - **Verifying / Setting up** → DNS já bateu, o Lovable está emitindo o certificado SSL. Aguardar (alguns minutos até ~1h normalmente).
   - **Offline / Failed** → o certificado não saiu. Causas comuns:
     - Falta o registro `A` em `@` ou `www` apontando para `185.158.133.1`.
     - Existe registro `CAA` no Registro.br bloqueando Let's Encrypt → remover ou liberar `letsencrypt.org`.
     - DNS ainda propagando (até 72h, conferir em dnschecker.org).
3. Adicionar também `www.odairfilhopersonal.com.br` se ainda não estiver, e marcar um deles como **Primary** — o outro redireciona automaticamente.

### Parte 2 — Forçar redirecionamento para HTTPS

O Lovable já redireciona `http://` → `https://` por padrão quando o domínio fica **Active**. Nenhum código precisa ser alterado no projeto. Para validar, abra em aba anônima: `http://odairfilhopersonal.com.br` → deve cair em `https://...` com cadeado.

### Parte 3 — Fazer o site aparecer no Google

SSL ativo ≠ indexado. O Google só lista o site depois de descobrir e rastrear. Passos:

1. **Confirmar que não está bloqueado**: o `public/robots.txt` do projeto não pode ter `Disallow: /`. Vou checar e ajustar se necessário.
2. **Garantir sitemap**: o projeto já tem `src/routes/sitemap[.]xml.ts`. Vou conferir se o `BASE_URL` aponta para `https://odairfilhopersonal.com.br` (hoje aponta para o `.lovable.app`) e atualizar.
3. **Cadastrar no Google Search Console** (você faz):
   - Acessar https://search.google.com/search-console
   - Adicionar propriedade do tipo **Domínio** com `odairfilhopersonal.com.br`
   - Validar via registro TXT no Registro.br (o Search Console vai fornecer o valor)
   - Em **Sitemaps**, enviar: `https://odairfilhopersonal.com.br/sitemap.xml`
   - Em **Inspeção de URL**, colar a home e clicar em **Solicitar indexação**
4. **Esperar**: a primeira indexação leva de alguns dias a 2–3 semanas. Nome próprio (ex: "Odair Filho personal") tende a indexar mais rápido.

### O que eu vou alterar no código (quando aprovar o plano)

- Atualizar `BASE_URL` em `src/routes/sitemap[.]xml.ts` para `https://odairfilhopersonal.com.br`.
- Atualizar `canonical` / `og:url` nas rotas e no `__root.tsx` para o mesmo domínio.
- Verificar `public/robots.txt` (corrigir se houver `Disallow: /`).
- Republicar o site para as mudanças entrarem em produção.

### O que você precisa fazer manualmente

- Conferir o status **Active** no painel de Domains.
- Cadastrar e validar o domínio no Google Search Console.
- Enviar o sitemap e solicitar indexação da home.
