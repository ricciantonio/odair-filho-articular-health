## O que mudar

Em `src/routes/index.tsx`, na seção **Plans** (linhas ~527-620), cada plano hoje usa o mesmo `waLink` genérico. Vou adicionar uma mensagem específica por plano e gerar o link do WhatsApp individual.

## Alterações

**Arquivo:** `src/routes/index.tsx` (função `Plans`)

1. Adicionar a propriedade `message` em cada objeto de plano:
   - **Básico:** `"Olá! Gostaria de começar minha transformação com o Plano Básico. Quero uma avaliação inicial e treino personalizado para dar meus primeiros passos! 💪"`
   - **Premium:** `"Olá! Quero contratar o Plano Premium! Estou comprometido com resultados reais: acompanhamento profissional completo com revisões frequentes e suporte prioritário. Quando podemos começar? 🚀"`
   - **VIP:** `"Olá! Estou interessado no Plano VIP. Quero uma solução exclusiva com consultoria estratégica, planejamento avançado e atendimento VIP. Vamos conversar sobre como potencializar meus resultados? 🎯"`

2. Trocar `href={waLink}` por um link gerado dinamicamente:
   ```
   `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(p.message)}`
   ```
   Reutilizando a constante `WHATSAPP_NUMBER` (5543991197602) já existente no arquivo.

3. Os demais botões (Hero, CTA flutuante, etc.) continuam usando o `waLink` genérico — sem alterações.

## Resultado

Cada botão da seção Planos abre o WhatsApp com a mensagem personalizada do respectivo plano.
