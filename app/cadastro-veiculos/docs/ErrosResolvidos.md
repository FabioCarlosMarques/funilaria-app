# Erros Resolvidos

## 1. Warning: Multiple Lockfiles

### Problema
O Next.js detectou mais de um arquivo `package-lock.json`.

### Solução
Foi removido o arquivo:

C:\Users\Fabio\package-lock.json

Resultado: o aviso desapareceu.

---

## 2. Import do Sidebar

### Problema
O import do componente Sidebar estava incorreto.

### Solução
Corrigido o caminho do import.

Resultado: componente carregado corretamente.

---

## 3. InputField declarado mas não utilizado

### Problema
O VS Code mostrava o aviso:

InputField is declared but its value is never read.

### Solução
O componente passou a ser utilizado na tela.

Resultado: aviso resolvido.

---

## 4. Erro do Next.js (React Client Manifest)

### Problema
O projeto apresentou erros como:

- Could not find module global-error.js
- Cannot find module @swc/helpers

### Solução

1. Parar o servidor (`Ctrl + C`);
2. Apagar a pasta `.next`;
3. Apagar a pasta `node_modules`;
4. Apagar o `package-lock.json` do projeto;
5. Executar `npm install`;
6. Executar `npm run dev`.

Resultado: projeto voltou a funcionar normalmente.