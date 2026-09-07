# Guia de Comandos e Conceitos

Este arquivo serve como consulta rápida durante o desenvolvimento do Funilaria App.

---

## 1. Abrir o projeto no VS Code

```bash
code .

npm run dev
Inicia o servidor de desenvolvimento do Next.js.

Normalmente o projeto fica disponível em:

http://localhost:3000

Ctrl + C
Interrompe o servidor que está rodando

useState
const [cliente, setCliente] = useState("");
Cria um estado no React.

Neste exemplo:

cliente = valor atual
setCliente = função usada para alterar o valor
"" = valor inicial

onChange
onChange={(e) => setCliente(e.target.value)}
Executa quando o usuário altera o conteúdo de um campo.

Neste exemplo, o valor digitado é armazenado no estado cliente.

onClick={salvarVeiculo}
Executa uma função quando o usuário clica em um elemento.

"use client"
Indica que o componente pode utilizar recursos interativos do React, como:

useState
onClick
onChange
eventos de formulário

<main
  className="flex-1 min-h-screen p-8 bg-cover bg-center bg-fixed"
  style={{
    backgroundImage: "url('/fundo_funilariaApp.png')",
  }}
>

O que estamos fazendo?
   bg-cover-> Faz a imagem ocupar todo o espaço disponível.

   bg-center-> Centraliza a imagem.

   bg-fixed-> Mantém o fundo fixo enquanto a página rola.

backgroundImage: "url('/oficina-fundo.png')"
    diz ao navegador:

"Use a imagem que está dentro da pasta public."

  

