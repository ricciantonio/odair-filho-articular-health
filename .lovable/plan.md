## Objetivo
Corrigir a logo no header, substituir a imagem de fundo do Hero por uma foto do Odair com a logo da marca na camiseta, e atualizar as informações de contato.

## Passos

### 1. Corrigir logo no cabeçalho
- Substituir o import de `logoImg` que aponta para o arquivo vazio (`src/assets/logo.jpg`) para o novo arquivo PNG transparente (`src/assets/logo.png`).
- Verificar se o logo renderiza corretamente no header.

### 2. Gerar Hero com logo na camiseta
- Usar a foto original do Odair (`Odair_Filho.jpeg`) como base.
- Gerar uma versão editada onde o logo "RPFIT" da camiseta é substituído pela nova logo (ouroboros vermelho).
- Salvar como `src/assets/hero.jpg`.

### 3. Atualizar informações de contato
- **Instagram**: alterar de `@odairfilho` / `instagram.com/odairfilho` para `@odairfilhopersonal` / `instagram.com/odairfilhopersonal`.
- **WhatsApp**: alterar de `5543999999999` para `5543991197602`.

## Detalhes técnicos
- Arquivo a editar: `src/routes/index.tsx` (linhas de configuração e import do logo).
- Imagem Hero será gerada via `imagegen--edit_image` a partir da foto original do upload.
- Nenhuma mudança de estrutura ou pacotes necessária.