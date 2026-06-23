## Objetivo
Substituir o favicon SVG atual (iniciais "OF") pela logo real do site (`src/assets/logo.png`), para que a aba do navegador mostre a marca completa.

## Passos
1. Copiar `src/assets/logo.png` para `public/favicon.png` (para ser servido na raiz do site).
2. Atualizar `src/routes/__root.tsx`:
   - Remover o link `favicon.svg`.
   - Adicionar `{ rel: "icon", type: "image/png", href: "/favicon.png" }`.
   - Adicionar também `apple-touch-icon` para iOS.
3. Remover `public/favicon.svg` (não será mais usado).
4. Publicar para que o favicon novo apareça no domínio.

## Observações
- Logos retangulares podem ficar pequenas no quadrado da aba. Se ficar ilegível, uma alternativa é gerar uma versão quadrada com a logo centralizada sobre fundo preto — me avise se preferir.
- O navegador faz cache agressivo de favicon; pode ser necessário hard refresh (Ctrl+Shift+R) para ver a troca.
