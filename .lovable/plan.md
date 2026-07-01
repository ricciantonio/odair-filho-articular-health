## Plano para corrigir o publish

1. **Confirmar o estado atual**
   - O projeto já está publicado e público.
   - URLs atuais:
     - `https://odairfilhopersonal.lovable.app`
     - `https://www.odairfilhopersonal.com.br`
   - Não há findings críticos de segurança bloqueando no status atual.

2. **Investigar o motivo real do botão não publicar**
   - Verificar erros recentes do servidor/dev preview.
   - Verificar erros TypeScript/build relacionados às últimas alterações.
   - Corrigir o warning React atual: `fetchpriority` deve ser `fetchPriority`.
   - Conferir se a seção nova e o botão de tema mobile não deixaram JSX/imports quebrados.

3. **Corrigir os problemas encontrados no código**
   - Ajustar apenas os erros que podem impedir build/deploy.
   - Manter as alterações recentes do site: menu mobile, seção Benefícios, tema light/dark e SEO.

4. **Validar antes de publicar**
   - Rodar verificação seletiva para garantir que não há erro de TypeScript/lint/build.
   - Conferir preview carregando sem overlay de erro.

5. **Publicar novamente**
   - Após validação, disparar o publish/update para o site publicado.
   - Informar que a atualização leva cerca de 1 minuto, e pode levar alguns minutos a mais no domínio próprio.