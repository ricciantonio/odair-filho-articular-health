## Remover o glow branco da logo do Hero no tema dark

**Problema:** A arte `logo-hero.png` ainda tem um halo/fundo claro residual ao redor das letras. No tema dark esse halo aparece como um "glow branco" envolvendo "Odair Filho Personal Trainer".

**Solução:** Reprocessar `src/assets/logo-hero.png` com threshold de alpha mais agressivo (PIL) para eliminar todo pixel quase-branco/cinza-claro, preservando apenas os traços vermelhos do ouroboros e as letras escuras. Em seguida, no tema dark, exibir a logo sem nenhum efeito que possa simular glow.

### Mudanças

1. **Script Python (one-shot)** lê o `logo-hero.png` original, converte para RGBA e zera o alpha de todo pixel com luminância > ~230 e saturação baixa (fundo + halo). Mantém vermelhos e pretos. Salva sobrescrevendo o asset.

2. **`src/routes/index.tsx` (Hero, linhas 222-229):**
   - Remover qualquer `mix-blend`, `drop-shadow` ou `filter` aplicado à imagem (verificar — atualmente só há `opacity`).
   - No dark, usar `dark:opacity-100` (em vez de `dark:opacity-30`) já que sem halo a logo não precisa ser atenuada; manter `opacity-20` no light.
   - Garantir que o overlay `var(--gradient-hero)` (linha 231) não crie brilho sobre a logo — manter como está (gradiente escuro→vermelho, não branco).

Nenhuma outra seção é alterada.

### Detalhes técnicos

```python
from PIL import Image
img = Image.open("src/assets/logo-hero.png").convert("RGBA")
px = img.load()
w, h = img.size
for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        # remove near-white / light-gray halo
        if r > 230 and g > 230 and b > 230:
            px[x, y] = (0, 0, 0, 0)
        # soften remaining light pixels
        elif min(r, g, b) > 200 and max(r,g,b) - min(r,g,b) < 25:
            px[x, y] = (r, g, b, 0)
img.save("src/assets/logo-hero.png")
```

Resultado esperado no dark: somente o ouroboros vermelho e as letras escuras visíveis, sem qualquer halo branco ao redor.
