# 🏗️ HISTÓRICO DO BANCO DE DADOS — FUNILARIA APP

## 🎯 1. Objetivo do projeto

Transformar o Funilaria App em um sistema SaaS para múltiplas oficinas.

Cada oficina terá seus próprios usuários e dados, sem acesso às informações de outras oficinas.

## 🗄️ 2. Configuração inicial

- Banco de dados: Supabase
- Aplicação: Next.js + React + TypeScript
- Biblioteca instalada: `@supabase/supabase-js`
- Arquivo de conexão: `lib/supabase.ts`
- Variáveis de ambiente: `.env.local`

## 🏢 3. Tabela oficinas

**Status: CRIADA**

| Coluna | Tipo | Configuração |
|---|---|---|
| id | int8 | Chave primária, automática |
| created_at | timestamptz | Data automática |
| nome | text | Obrigatório |
| cnpj | text | Opcional |
| telefone | text | Opcional |
| email | text | Opcional |

### Primeiro registro cadastrado(Data:02/11/2026)

- Nome: Oficina Modelo Funilaria
- ID: 1

## 👤 4. Tabela usuarios_oficinas

**Status: CRIADA**

| Coluna | Tipo | Configuração |
|---|---|---|
| id | uuid | Chave primária, padrão auth.uid() |
| created_at | timestamptz | Data automática |
| oficina_id | int8 | Obrigatório |
| nome | text | Obrigatório |
| perfil | text | Obrigatório |

### Primeiro administrador

- Conta criada no Supabase Authentication.
- Usuário associado à Oficina Modelo Funilaria.
- oficina_id: 1
- perfil: admin

## 🚗 5. Tabela veiculos

**Status: CRIADA E ATUALIZADA**

Colunas originais:

- id
- created_at
- cliente
- placa
- marca
- modelo
- cor
- ano
- km
- tipo_atendimento
- status
- consultor

### Nova coluna adicionada

| Coluna | Tipo | Configuração |
|---|---|---|
| oficina_id | int8 | Aceita NULL temporariamente |

### Relacionamento criado

`veiculos.oficina_id → oficinas.id`

- Chave estrangeira (Foreign Key): criada com sucesso.
- ON UPDATE: No action.
- ON DELETE: No action.

## 🔐 6. Segurança — RLS

As três tabelas estão com RLS habilitado:

- oficinas
- usuarios_oficinas
- veiculos

**Importante:** ainda não foram criadas as políticas RLS. Portanto, a segurança por oficina ainda precisa ser configurada e testada antes de liberar o sistema.

## 📋 7. Próximas etapas

1. Conferir e completar os relacionamentos entre usuários e oficinas.
2. Planejar e configurar as políticas RLS.
3. Garantir que cada usuário acesse somente os dados da própria oficina.
4. Tratar veículos antigos que ainda não tenham oficina_id.
5. Integrar o cadastro de veículos do Next.js ao Supabase.
6. Testar cadastro, consulta, edição e exclusão.
7. Implementar os demais módulos do sistema.

## 📍 8. Ponto atual do desenvolvimento

**Última etapa concluída:**

Criação da coluna `oficina_id` na tabela `veiculos` e configuração da chave estrangeira para `oficinas.id`.

**Próximo trabalho:** continuar a preparação da segurança multiempresa do Funilaria App.

---

🚀 **Projeto em desenvolvimento — Funilaria App**

Cada etapa concluída nos aproxima de um sistema profissional que poderá atender várias oficinas.