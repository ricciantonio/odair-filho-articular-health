Adicionar o número do CREF **021795** logo abaixo de "Odair Filho" no card da seção "Sobre", com o mesmo estilo visual do nome (fonte display, branco, em destaque).

## Alteração

Em `src/routes/index.tsx` (linha 357), após o `<div>` com "Odair Filho", adicionar um novo `<div>` exibindo `CREF 021795` com o mesmo tratamento tipográfico do nome (apenas levemente menor para hierarquia).

Resultado visual no card da foto:
```text
PERSONAL TRAINER · CREF
Odair Filho
CREF 021795
```

Nenhum outro arquivo é alterado.