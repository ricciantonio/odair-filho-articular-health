## Conectar domínio próprio: odairfilhopersonal.com.br

### O que fazer
O site já está publicado em **https://odairfilhopersonal.lovable.app**. Agora vamos conectar o domínio **odairfilhopersonal.com.br** (registrado no Registro.br).

### Passo a passo

#### 1. No Lovable — adicionar o domínio
- Vá em **Project Settings → Project section → Domains**
- Clique em **Connect Domain**
- Digite: `odairfilhopersonal.com.br`
- Anote os registros DNS que o Lovable fornecer (tipicamente):
  - **A Record** para `@` (root) → `185.158.133.1`
  - **A Record** para `www` → `185.158.133.1`
  - **TXT Record** para `_lovable` → valor de verificação

#### 2. No Registro.br — configurar DNS
- Acesse o painel do Registro.br
- Vá na zona de DNS do domínio
- Adicione os registros exatamente como o Lovable indicou:
  - `@` tipo A → `185.158.133.1`
  - `www` tipo A → `185.158.133.1`
  - `_lovable` tipo TXT → valor fornecido
- Salve e aguarde a propagação (pode levar de alguns minutos até 72 horas)

#### 3. No Lovable — concluir
- Após adicionar os registros, clique em **Verify** ou aguarde a verificação automática
- O status passará para **Verifying** → **Setting up** → **Active**
- Quando ficar **Active**, o site responderá em `https://odairfilhopersonal.com.br`

### Observações
- Adicione **ambos** os domínios (`odairfilhopersonal.com.br` e `www.odairfilhopersonal.com.br`) no Lovable
- Escolha um deles como **Primary** para redirecionamento
- O SSL (HTTPS) será provisionado automaticamente pelo Lovable
- Se houver problemas de propagação, use o DNSChecker.org para confirmar os registros

### Não é necessário alterar código
Esta configuração é feita 100% via interface do Lovable e DNS do Registro.br — nenhuma mudança no projeto é necessária.