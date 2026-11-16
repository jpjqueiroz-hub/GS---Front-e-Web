# MeuPonto

O MeuPonto propõe facilitar o acesso de pessoas cegas ou com baixa visão às informações do transporte público, por meio de uma plataforma web acessível e da proposta de um terminal físico instalado no ponto de ônibus.

## Funcionalidades

### Landing page

- Apresentação do problema e da solução.
- Explicação do funcionamento proposto.
- Acesso ao protótipo digital.
- Menu adaptado para telas menores.

### Protótipo digital

- Consulta das linhas cadastradas em uma API externa.
- Exibição de código, destino e previsão simulada.
- Leitura por voz das informações de todas as linhas cadastradas.
- Repetição e interrupção do áudio.
- Identificação de previsão indisponível, linha noturna e aproximação simulada.
- Estados de carregamento, erro e lista vazia.

### Painel administrativo

- Login demonstrativo.
- Cadastro de linhas.
- Listagem dos registros.
- Edição dos dados.
- Mensagens de sucesso e erro.
- Atualização da listagem após as operações.

As alterações são persistidas no MockAPI. O protótipo consulta novamente os dados ao ser aberto ou recarregado.

## Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS
- MockAPI.io
- Fetch API
- Web Speech API — `speechSynthesis`
- Git e GitHub

## Requisitos para executar

- Node.js 20.19+ ou 22.12+.
- npm.
- Conexão com a internet para consultar o MockAPI.

A reprodução de voz depende do suporte do navegador e das vozes disponíveis no dispositivo.

## Instalação e execução

Verificar se está dentro da pasta correta, caso não:

```bash
cd NOME_DA_PASTA
```

Na pasta que contém o `package.json`, instale as dependências:

```bash
npm i
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Abra o endereço informado pelo Vite no terminal.

## Páginas

| Endereço | Conteúdo |
|---|---|
| `/` | Landing page |
| `/prototipo-web` | Consulta das linhas e reprodução por voz |
| `/administracao` | Login e gerenciamento das linhas |

A navegação é controlada pelo caminho da URL no `App.tsx`.

## Acesso administrativo demonstrativo

```text
Usuário: admMeuPonto
Senha: MeuPonto123
```

A validação é realizada no React, e o estado de acesso é armazenado em `sessionStorage`. O botão **Sair** remove esse estado.

Esse mecanismo demonstra o fluxo de login; não implementa autenticação no servidor.

## API externa e CRUD

A aplicação utiliza o recurso `linhas` do MockAPI:

```text
https://6af9dd086d8b86fb22d74e65.mockapi.io/linhas
```

| Operação | Método | Endereço |
|---|---|---|
| Consultar linhas | `GET` | `/linhas` |
| Cadastrar linha | `POST` | `/linhas` |
| Atualizar linha | `PUT` | `/linhas/:id` |
| Excluir linha | `DELETE` | `/linhas/:id` |

As chamadas ficam centralizadas em `src/services/linhasService.ts`.

### Estrutura de um registro

```json
{
  "id": "1",
  "codigo": "433P-10",
  "origem": "Sé",
  "destino": "Liberdade",
  "minutos": 4,
  "previsaoDisponivel": true,
  "aproximando": true,
  "noturna": false
}
```

| Campo | Tipo | Finalidade |
|---|---|---|
| `id` | String | Identificador único do registro |
| `codigo` | String | Código completo da linha |
| `origem` | String | Origem cadastrada |
| `destino` | String | Destino no sentido representado |
| `minutos` | Number | Tempo de espera simulado |
| `previsaoDisponivel` | Boolean | Indica se o tempo pode ser anunciado |
| `aproximando` | Boolean | Indica aproximação simulada |
| `noturna` | Boolean | Identifica uma linha noturna |

Quando `previsaoDisponivel` é `false`, o protótipo informa que a previsão está indisponível, em vez de anunciar o valor de `minutos`.

## Organização do código

```text
src/
├── components/
│   ├── CardProblema.tsx
│   ├── CardSolucao.tsx
│   ├── ComoFunciona.tsx
│   ├── FormularioLinha.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Login.tsx
│   ├── PassoComoFunciona.tsx
│   ├── Problema.tsx
│   ├── Prototipo.tsx
│   └── Solucao.tsx
├── hooks/
│   ├── useAudio.ts
│   └── useLinhas.ts
├── pages/
│   ├── Administracao.tsx
│   └── PrototipoWeb.tsx
├── services/
│   └── linhasService.ts
├── App.tsx
├── index.css
└── main.tsx
```

### Custom hooks

**`useLinhas`**

Carrega os registros e gerencia cadastro, edição, exclusão, carregamento e mensagens de resultado. A lista é atualizada após a confirmação das operações pela API.

**`useAudio`**

Controla a leitura por voz, a repetição, a interrupção e os erros de reprodução. Cancela o áudio quando o componente é desmontado.

## Acessibilidade

A interface inclui:

- Campos com labels associados.
- Botões e links HTML.
- Identificação acessível de áreas de navegação.
- Contorno de foco para navegação por teclado.
- Informações em texto e voz.
- Mensagens de estado e erro.
- Layout adaptado para diferentes tamanhos de tela.

## Integrantes

| Nome completo | RM |
|---|---|
| [Fernando Raimundo Chelotti Ferreira Júnior] | [RM - 571610] |
| [Gabriel de Melo Lopes] | [RM - 569404] |
| [Guilherme Alvim Miranda Ferreira] | [RM - 573040] |
| [João Pedro Jales Queiroz] | [RM - 568678] |
| [Nicolas Vasconcelos Bettini Sadala] | [RM - 571011] |