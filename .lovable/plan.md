## O que mudar

Atualmente a seção Hero (atrás do título "Personal Trainer Especializado em Dores Articulares") usa `heroImg`, que mostra sua foto — a mesma que aparece na seção "Sobre", causando duplicação.

## Alterações

**Arquivo:** `src/routes/index.tsx`

1. **Hero (linha ~219-226):** trocar a imagem de fundo `heroImg` por `logoImg`.
   - Como a logo é quadrada e pequena (não cobre o fundo bem como `object-cover`), vou ajustar para ficar centralizada com `object-contain`, com tamanho controlado e mantendo o gradiente escuro por cima para legibilidade do texto. Resultado: logo grande centralizada ao fundo, com overlay escuro.
   - Atualizar o `alt` para "Logo Odair Filho Personal Trainer".
   - Atualizar o `<link rel="preload">` (linha 55) para apontar para `logoImg` em vez de `heroImg`.

2. **Sobre (linha ~322-336):** sem alterações — sua foto (`odairImg`) continua exclusivamente aqui.

3. **Remover import não usado:** apagar `import heroImg from "@/assets/hero.jpg"` (linha 24), já que não será mais referenciado.

## Observação

Não vou apagar o arquivo `src/assets/hero.jpg` para não quebrar nada caso queira reutilizá-lo depois. Se quiser que eu remova também, é só me dizer.
