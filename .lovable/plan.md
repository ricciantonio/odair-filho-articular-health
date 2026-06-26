## Ajuste do fundo do Hero no tema dark

**Problema:** A nova arte usada no fundo da seção "Início" tem áreas brancas/claras. No tema claro fica bonita, mas no tema dark essas partes aparecem como "bordas brancas" ao redor do logo.

**Solução:** Renderizar duas imagens no Hero e alternar por tema:
- **Tema claro:** mantém a arte atual (`heroLogoImg` — ouroboros + texto sobre fundo claro).
- **Tema dark:** usa o logo já existente com fundo transparente (`@/assets/logo.png`), que não tem áreas brancas.

### Mudanças

Em `src/routes/index.tsx`, dentro de `Hero()`:
- Substituir o único `<img src={heroLogoImg}>` por dois `<img>`:
  - Um visível só no light: `className="... block dark:hidden ... opacity-25"` usando `heroLogoImg`.
  - Um visível só no dark: `className="... hidden dark:block ... opacity-30"` usando `logoImg` (transparente).
- Manter posicionamento, `object-contain`, `-z-20` e `fetchPriority="high"` em ambos.

Nenhuma outra seção é alterada.
