# 📘 Exercício - Tipagem de Funções em TypeScript

Projeto desenvolvido para praticar **tipagem explícita de funções** em **TypeScript**, garantindo mais segurança e clareza no código.

## 🎯 Objetivos do Exercício

- ✅ Criar funções em TypeScript com parâmetros tipados
- ✅ Definir explicitamente o tipo de retorno das funções
- ✅ Realizar operações matemáticas simples
- ✅ Exibir resultados no console
- ✅ Reforçar o entendimento sobre tipagem estática

## 🚀 Tecnologias Utilizadas

- **TypeScript** - Linguagem principal
- **Node.js** - Ambiente de execução
- **ts-node** - Execução direta de arquivos TypeScript

## 📂 Estrutura do Projeto

```
exercicio-typescript/
├── node_modules/
├── index.ts          # Código principal
├── package.json
├── package-lock.json
└── README.md
```

## 🛠️ Funcionalidades Implementadas

### 1. Função de Soma
```typescript
function somar(num1: number, num2: number): number
```
Recebe dois números e retorna a soma.

### 2. Arrow Function de Multiplicação
```typescript
const multiplicar = (num1: number, num2: number): number => {...}
```
Demonstra tipagem em arrow functions.

### 3. Função de Cálculo de Média
```typescript
function calcularMedia(nota1: number, nota2: number, nota3: number): number
```
Calcula a média de três notas.

## 💻 Como Executar o Projeto

### Pré-requisitos
- Node.js instalado ([Download aqui](https://nodejs.org/))
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/DevAlex-full/exercicio-typescript.git
cd exercicio-typescript
```

2. Instale as dependências:
```bash
npm install
```

### Executar o código

**Opção 1 - Executar diretamente (recomendado):**
```bash
npx ts-node index.ts
```

**Opção 2 - Compilar e executar:**
```bash
npx tsc index.ts
node index.js
```

## 📊 Resultado Esperado

```
A soma de 10 + 20 é: 30
A soma de 50 + 75 é: 125
A soma de 100 + 250 é: 350

Multiplicação: 5 × 8 = 40

Média das notas: 8.33
```

## 🧪 Testando a Tipagem

O TypeScript garante segurança de tipos. Tente executar:

```typescript
somar("10", 20); // ❌ Erro: Argument of type 'string' is not assignable to parameter of type 'number'
```

## 📚 Conceitos Aprendidos

- **Tipagem explícita de parâmetros**: `param: type`
- **Tipagem de retorno**: `: returnType`
- **Type Safety**: Prevenção de erros em tempo de desenvolvimento
- **Arrow functions tipadas**
- **Funções com múltiplos parâmetros**

## 🎓 Sobre o Desenvolvedor

Desenvolvido por **DevAlex** como parte dos estudos em TypeScript.

[![GitHub](https://img.shields.io/badge/GitHub-DevAlex--full-181717?style=for-the-badge&logo=github)](https://github.com/DevAlex-full)

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar.

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
