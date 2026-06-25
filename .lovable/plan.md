## Atualizar @tanstack/react-start

Atualizar o pacote `@tanstack/react-start` para a versão mais recente para resolver as vulnerabilidades de `undici`, `js-yaml` e `@tanstack/start-server-core`.

### Passos

1. Rodar `bun add @tanstack/react-start@latest` (e atualizar pacotes relacionados do TanStack se necessário para manter compatibilidade de versão).
2. Verificar que o build/dev continua funcionando.
3. Confirmar no painel de Security que as findings sumiram.

### Observação

Se a atualização introduzir incompatibilidade (breaking change entre minors do TanStack Start), faço o ajuste no código de boot (`src/router.tsx`, `src/start.ts`, `src/server.ts`) seguindo o padrão atual.