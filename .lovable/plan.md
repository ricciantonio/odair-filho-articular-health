## Ajustes

**1. Toggle de tema no mobile**
No `Header` (src/routes/index.tsx ~L172-178), o botão de alternar tema tem `hidden ... md:grid`, então só aparece em telas ≥ md. Além disso, no menu mobile (drawer, L202-215) o toggle não existe.

- Remover `hidden ... md:grid` do botão de tema para exibi-lo sempre no header (ao lado do menu hambúrguer).
- Como alternativa/adicional: incluir também uma linha "Alternar tema (claro/escuro)" dentro do drawer mobile.

**2. Seção Benefícios ausente no menu**
O array `NAV` (L73-81) não contém a nova seção `beneficios` (que existe em L774 como `id="beneficios"`).

- Adicionar `{ id: "beneficios", label: "Benefícios" }` no `NAV`, posicionado entre `resultados` e `planos` (mesma ordem visual da página).

Nenhuma outra área é tocada.