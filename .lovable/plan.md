## Objetivo
Voltar ao favicon anterior (SVG com as iniciais "OF" em preto e vermelho), já que a logo ficou pequena demais na aba.

## Passos
1. Recriar `public/favicon.svg` com o desenho "OF" preto e vermelho (mesma versão usada antes).
2. Atualizar `src/routes/__root.tsx`:
   - Remover os links `favicon.png` e `apple-touch-icon`.
   - Restaurar `{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }`.
3. Remover `public/favicon.png`.
4. Publicar para aplicar a mudança no domínio.

## Observação
- O navegador faz cache do favicon antigo; pode ser necessário Ctrl+Shift+R para ver a troca.
- Como alternativa futura, posso gerar uma versão quadrada da logo (centralizada em fundo preto) caso queira tentar de novo com mais legibilidade — é só pedir.
