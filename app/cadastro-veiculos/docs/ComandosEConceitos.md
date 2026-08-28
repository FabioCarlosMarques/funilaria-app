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

function salvarVeiculo() {
  setVeiculos([...veiculos, veiculo]);

  alert(
    `Veículo cadastrado com sucesso!\n\nCliente: ${veiculo.cliente}\nPlaca: ${veiculo.placa}\nMarca: ${veiculo.marca}\nModelo: ${veiculo.modelo}\nCor: ${veiculo.cor}\nAno: ${veiculo.ano}\nKM: ${veiculo.km}`
  );
}

🧠 O que essa nova linha faz?

Esta é a parte importante:
    setVeiculos([...veiculos, veiculo]);

Vamos desmontá-la:

1️⃣ setVeiculos

É a função que criamos quando colocamos:
  const [veiculos, setVeiculos] = useState([]);
Ela serve para alterar a lista de veículos.

2️⃣ ...veiculos
Significa:

Mantenha todos os veículos que já estão na lista.

Por exemplo:
   veiculos
├── João
└── Maria

3️⃣ veiculo

É o veículo que acabamos de preencher no formulário.

Então:
   [...veiculos, veiculo]
significa:

Pegue todos os veículos que já existem e acrescente este novo veículo no final.

20 — Diferença entre Veiculo e Veiculo[]

   const [veiculo, setVeiculo] = useState<Veiculo>({
  cliente: "",
  placa: "",
  marca: "",
  modelo: "",
  cor: "",
  ano: "",
  km: "",
});
        Veiculo representa um único veículo.

const [veiculos, setVeiculos] = useState<Veiculo[]>([]);

    Veiculo[] representa uma lista de veículos.

[] significa que estamos trabalhando com um array/lista.

       🟦 21 — .map() para mostrar uma lista

{veiculos.map((item, index) => (
  <div key={index}>
    {item.cliente}
  </div>
))}
     O que faz?

O .map() percorre cada elemento de uma lista e permite criar uma representação visual para cada item.

Se tivermos:
      veiculos
├── João
├── Maria
└── Carlos

o .map() cria uma representação para cada veículo.

          🟩 22 — .length

veiculos.length
   Informa quantos itens existem na lista.

Exemplo:
veiculos.length = 0
     → nenhum veículo.

veiculos.length = 3
    → três veículos cadastrados.

          🟨 23 — Operador ternário

Também usamos:
    condicao ? resultado1 : resultado2

No nosso código:
    veiculos.length === 0 ? (
  <p>Nenhum veículo cadastrado.</p>
) : (
  ...
)
     Significa:

Se não houver veículos, mostre "Nenhum veículo cadastrado". Caso contrário, mostre a lista.

      24 — Estrutura das tags JSX

As tags JSX precisam ser fechadas na ordem correta. Elementos internos devem ser fechados antes dos elementos externos.

Exemplo:
     <main>
  <div>
    <h2>Título</h2>
  </div>
</main>

Esse erro que acabou de acontecer é ótimo para o nosso aprendizado, porque você está começando a reconhecer a estrutura do JSX e entender por que o VS Code coloca aquele vermelho.
    
    🟦 25 — Elemento <button>
    <button type="button">
  👁️ Ver
</button>
   
   O <button> cria um botão clicável na interface.
    type="button"

    indica que ele é um botão comum, e não um botão de envio de formulário.

Classes como:
    bg-blue-600
text-white
px-3
py-2
rounded-md
    são classes do Tailwind CSS utilizadas para alterar a aparência do botão.


