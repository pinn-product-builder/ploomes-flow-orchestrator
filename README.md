# Ploomes Flow Orchestrator

Interface para visualização de proposta comercial e técnica do orquestrador de fluxos Ploomes (Pinn Product Builder).

## Stack

- **Vite** + **React** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui**
- React Router, React Query, React Hook Form, Zod

## Desenvolvimento

```bash
# Instalar dependências
npm i

# Subir em modo desenvolvimento (porta 8080)
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

## Scripts

| Comando        | Descrição                    |
|----------------|------------------------------|
| `npm run dev`  | Servidor de desenvolvimento  |
| `npm run build`| Build para produção          |
| `npm run preview` | Preview do build          |
| `npm run lint` | ESLint                       |
| `npm run test` | Testes (Vitest)              |

## Estrutura

- `src/pages/` — Páginas (Index com abas Comercial / Técnica)
- `src/components/` — Componentes reutilizáveis e UI (shadcn)
- `src/data/` — Dados estáticos das propostas
- `src/hooks/` — Hooks customizados

## Licença

Uso interno Pinn Product Builder.
