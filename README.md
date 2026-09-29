# 🚗 Funilaria App

Sistema web desenvolvido para auxiliar no gerenciamento do fluxo de veículos em uma oficina de funilaria e pintura.

## 📋 Sobre o projeto

O **Funilaria App** foi desenvolvido como um projeto para gerenciamento e acompanhamento de veículos dentro de uma oficina.

O sistema permite realizar o cadastro de veículos, acompanhar suas etapas de atendimento e visualizar informações do processo através de um Dashboard.

## 🎯 Objetivo

O objetivo do projeto é facilitar o acompanhamento dos veículos dentro da oficina, permitindo visualizar de forma organizada em qual etapa cada veículo se encontra.

## 🚀 Funcionalidades

### 📊 Dashboard

O Dashboard apresenta informações resumidas sobre os veículos cadastrados:

- Veículos no Pátio
- Aguardando Aprovação
- Veículos em Produção
- Em Pintura
- Aguardando Peças
- Veículos Entregues

Os indicadores são atualizados de acordo com o status dos veículos cadastrados.

### 🚗 Cadastro de Veículos

O sistema permite cadastrar informações como:

- Cliente
- Placa
- Marca
- Modelo
- Cor
- Ano
- Quilometragem
- Tipo de atendimento
- Status
- Consultor responsável

Após o cadastro, o veículo fica disponível na tabela de veículos.

### 🔄 Fluxo do Veículo

O sistema possui um fluxo de acompanhamento do veículo através das seguintes etapas:

1. Aguardando Aprovação
2. Aprovado
3. Desmontagem
4. Levantamento das Peças
5. Aguardando Peças
6. Funilaria
7. Preparação
8. Pintura
9. Polimento
10. Montagem
11. Lavagem
12. Check-list Final
13. Entrega
14. Veículo Faturado

### ▶️ Avançar Etapa

Após selecionar um veículo, é possível utilizar o botão **Avançar Etapa** para atualizar o status do veículo para a próxima etapa do processo.

A alteração do status é armazenada para que o acompanhamento continue após a atualização da página.

### 💾 Armazenamento

Os dados dos veículos são armazenados no **LocalStorage** do navegador.

Isso permite manter os dados cadastrados durante a utilização do sistema no mesmo navegador.

## 🛠️ Tecnologias utilizadas

- Next.js
- React
- TypeScript
- Tailwind CSS
- JavaScript
- LocalStorage
- Git
- GitHub
- Vercel

## 📂 Estrutura do projeto

```text
funilaria-app/
│
├── app/
│   ├── components/
│   │   ├── CardDashboard.tsx
│   │   ├── CheckboxGroup.tsx
│   │   ├── InputField.tsx
│   │   ├── SelectField.tsx
│   │   ├── Sidebar.tsx
│   │   └── StatusFlow.tsx
│   │
│   ├── cadastro-veiculos/
│   │   └── page.tsx
│   │
│   ├── page.tsx
│   └── layout.tsx
│
├── public/
├── package.json
└── README.md

💻 Como executar o projeto

Clone o repositório:

git clone https://github.com/FabioCarlosMarques/funilaria-app.git

Entre na pasta do projeto:
cd funilaria-app

Instale as dependências:
npm install

Execute o servidor de desenvolvimento:
npm run dev

Depois, abra no navegador:
http://localhost:3000

🌐 Projeto online

O projeto também está disponível online através da Vercel:

https://funilaria-app-gold.vercel.app/

📌 Observações

Este projeto foi desenvolvido como parte de uma atividade prática, utilizando tecnologias modernas de desenvolvimento web.

O sistema foi desenvolvido com foco em organização, acompanhamento do fluxo de veículos e visualização das informações através de um Dashboard.

👨‍💻 Autor

Fábio Carlos Marques

Projeto desenvolvido utilizando Next.js, React, TypeScript e Tailwind CSS.