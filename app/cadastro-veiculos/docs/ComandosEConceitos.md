# 📚 Comandos e Conceitos — Funilaria App

Este arquivo serve como uma consulta rápida dos principais códigos e conceitos utilizados durante a construção do projeto.

---

# 🟦 01 — FUNÇÃO

```tsx
function salvarVeiculo() {
  // código
}

*Data: 12/08/2026*
# 🟦 12 — ENTENDENDO A FUNÇÃO salvarVeiculo()

Código:

```tsx
function salvarVeiculo() {
  alert(
    `Veículo cadastrado com sucesso!\n\nCliente: ${veiculo.cliente}\nPlaca: ${veiculo.placa}`
  );
}

Sequência de funcionamento
1. function

Cria uma função.

2. salvarVeiculo

É o nome da função.

3. ()

Indica os parâmetros da função. Neste caso, não existem parâmetros.

4. { }

Define o bloco de código que será executado.

5. alert()

Exibe uma mensagem no navegador.

6. Crases

Permitem criar uma Template String.

7. Texto fixo

Veículo cadastrado com sucesso!

É a mensagem que será exibida.

8. \n

Cria uma quebra de linha.

9. ${ }

Permite inserir informações dinâmicas dentro do texto.

10. veiculo

É o objeto que armazena os dados do veículo.

11. veiculo.cliente

Acessa a propriedade cliente do objeto veiculo.

12. veiculo.placa

Acessa a propriedade placa do objeto veiculo.

Fluxo

Usuário clica em Salvar
        ↓
salvarVeiculo()
        ↓
alert()
        ↓
veiculo.cliente
        ↓
veiculo.placa
        ↓
Mensagem exibida


**Esse formato é melhor para o seu arquivo**, porque você poderá consultar cada número individualmente quando esquecer o significado de alguma parte do código. E conforme avançarmos, podemos continuar a numeração: **13, 14, 15...**, construindo seu próprio manual do Funilaria App. 🚗💻

nº 13 — Acessando várias propriedades de um objeto, mostrando justamente como:
veiculo.cliente
veiculo.placa
veiculo.marca
