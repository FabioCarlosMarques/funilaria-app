# 📘 MANUAL DO BANCO DE DADOS — FUNILARIA APP

**Projeto:** Funilaria App  
**Tecnologia:** Next.js + TypeScript + Supabase  
**Objetivo:** Sistema SaaS para várias oficinas.

---

## 🟢 1. ESTRUTURA DO BANCO DE DADOS

O banco utiliza três tabelas principais:

| Tabela | Finalidade |
|---|---|
| `oficinas` | Armazena os dados das oficinas |
| `usuarios_oficinas` | Relaciona usuários às oficinas |
| `veiculos` | Armazena os veículos cadastrados |

### 🏢 Tabela oficinas

Primeira oficina cadastrada:

- Nome: Oficina Modelo Funilaria
- ID: 1

Essa tabela representa cada empresa que utilizará o sistema.

### 👤 Tabela usuarios_oficinas

Armazena os usuários vinculados às oficinas.

Campos importantes:

- `id`: UUID do usuário.
- `oficina_id`: identifica a oficina.
- `nome`: nome do usuário.
- `perfil`: função do usuário (admin, funcionário etc.).
- `created_at`: data de criação.

Primeiro usuário cadastrado: administrador da Oficina Modelo Funilaria.

### 🚗 Tabela veiculos

Armazena os veículos atendidos pela oficina.

Campos:

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
- oficina_id

A coluna `oficina_id` foi adicionada para identificar a empresa responsável por cada veículo.

---

## 🔵 2. RELACIONAMENTOS (FOREIGN KEYS)

Uma Foreign Key conecta informações de tabelas diferentes.

### Relacionamento 1

`veiculos.oficina_id → oficinas.id`

Resultado: cada veículo pode pertencer a uma oficina.

Configuração:
- ON UPDATE: NO ACTION
- ON DELETE: NO ACTION

### Relacionamento 2

`usuarios_oficinas.id → auth.users.id`

Código executado:

```sql
ALTER TABLE public.usuarios_oficinas
ADD CONSTRAINT usuarios_oficinas_id_fkey
FOREIGN KEY (id)
REFERENCES auth.users (id)
ON UPDATE CASCADE
ON DELETE CASCADE;
```

Resultado:
- Cada usuário da oficina precisa existir no Supabase Authentication.
- Se uma conta Auth for excluída, seu registro correspondente em usuarios_oficinas também será excluído.

---

## 🟣 3. FUNÇÃO DE IDENTIFICAÇÃO DA OFICINA

Nome da função:

`get_my_oficina_id()`

Código executado:

```sql
CREATE OR REPLACE FUNCTION public.get_my_oficina_id()
RETURNS bigint
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = ''
AS $$
  SELECT uo.oficina_id
  FROM public.usuarios_oficinas AS uo
  WHERE uo.id = (SELECT auth.uid())
  LIMIT 1;
$$;

REVOKE ALL ON FUNCTION public.get_my_oficina_id() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.get_my_oficina_id() FROM anon;
GRANT EXECUTE ON FUNCTION public.get_my_oficina_id() TO authenticated;
```

### Para que serve?

1. Identifica o usuário que está conectado.
2. Procura esse usuário na tabela `usuarios_oficinas`.
3. Descobre a qual oficina ele pertence.
4. Retorna o número identificador da oficina.

Exemplo:

Se o usuário pertence à oficina de ID 1, a função retorna `1`.

**Importante:** SECURITY DEFINER permite que a função consulte os dados com os privilégios de seu proprietário. Por isso, sua utilização e suas permissões precisam ser protegidas.

---

## 🟢 4. SEGURANÇA RLS — PRIMEIRA POLÍTICA

RLS significa Row Level Security (Segurança em Nível de Linha).

Sua função é controlar quais registros cada usuário pode visualizar ou modificar.

### Política 1 — usuarios_oficinas

Nome:

`usuarios_oficinas_select_own`

Código executado:

```sql
CREATE POLICY "usuarios_oficinas_select_own"
ON public.usuarios_oficinas
FOR SELECT
TO authenticated
USING (
  id = (SELECT auth.uid())
);
```

### O que esse código faz?

- Permite consultar o próprio cadastro.
- Identifica o usuário pelo UUID.
- Impede que essa política permita consultar os registros de outros usuários.

Permissão criada: SELECT (consulta).

---

## 🟢 5. SEGURANÇA RLS — SEGUNDA POLÍTICA

### Política 2 — oficinas

Nome:

`oficinas_select_my_office`

Código executado:

```sql
CREATE POLICY "oficinas_select_my_office"
ON public.oficinas
FOR SELECT
TO authenticated
USING (
  id = (SELECT public.get_my_oficina_id())
);
```

### O que esse código faz?

- Identifica a oficina do usuário conectado.
- Permite consultar somente a oficina correspondente.
- Utiliza a função `get_my_oficina_id()`.

Permissão criada: SELECT (consulta).

---

## 🟡 6. DIFERENÇA ENTRE AS PERMISSÕES

| Permissão | Significado |
|---|---|
| SELECT | Consultar dados |
| INSERT | Inserir dados |
| UPDATE | Alterar dados |
| DELETE | Excluir dados |

Até agora, criamos duas políticas SELECT.

As permissões de inserção, alteração e exclusão ainda precisam ser planejadas e configuradas.

---

## 🔴 7. O QUE AINDA PRECISA SER FEITO

Próximas etapas do banco:

1. Conferir se RLS está habilitado nas três tabelas.
2. Configurar e testar as políticas de `usuarios_oficinas`.
3. Configurar e testar as políticas de `oficinas`.
4. Configurar as políticas de `veiculos`.
5. Definir regras de INSERT, UPDATE e DELETE.
6. Impedir que usuários alterem seu próprio perfil para admin.
7. Testar o isolamento entre duas oficinas diferentes.
8. Conectar o Next.js ao Supabase.
9. Testar cadastro, edição, consulta e exclusão de veículos.

**Atenção:** as duas políticas criadas até agora não representam a segurança completa do sistema. Não liberar o sistema para produção antes de concluir e testar todas as regras.

---

## 📍 8. ÚLTIMO PONTO DO DESENVOLVIMENTO

**Data:** 13/11/2026

### Concluído:
- Estrutura inicial do banco.
- Oficina cadastrada.
- Administrador cadastrado.
- Relacionamento entre usuário e Authentication.
- Relacionamento entre veículos e oficinas.
- Função `get_my_oficina_id()`.
- Política SELECT de `usuarios_oficinas`.
- Política SELECT de `oficinas`.

### Próxima atividade:

Continuar a configuração das políticas RLS, começando pela revisão das permissões de `usuarios_oficinas`.

---

🚀 **FUNILARIA APP — Projeto em desenvolvimento**

Objetivo final: criar um sistema profissional, seguro e preparado para atender várias oficinas, com seus próprios usuários, veículos e ordens de serviço.