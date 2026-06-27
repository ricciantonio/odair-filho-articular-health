Na seção Hero, o nome "Odair Filho" e o "CREF 021795" estão com cor branca fixa, ficando invisíveis no tema claro.

## Alteração
- Em `src/routes/index.tsx`, no bloco Hero, ajustar as classes do nome e do CREF para usar cor adaptativa:
  - Nome: `text-white` → `text-foreground` (ou `text-slate-900 dark:text-white`)
  - CREF: trocar o branco/opaco por um tom de destaque que funcione nos dois temas — vermelho da marca (`text-primary`) para reforçar identidade, com peso semibold.

Nenhuma outra seção é alterada.