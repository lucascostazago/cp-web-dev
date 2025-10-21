# Alunos 
Lucas Zago - rm562028
Arthur Canaverde - rm563029

# 🎬 Movie Finder

Uma aplicação React moderna para buscar e explorar filmes usando a OMDb API. A aplicação oferece uma interface responsiva e intuitiva para descobrir filmes, visualizar detalhes e ter uma experiência de usuário fluida.

## ✨ Funcionalidades

- **Busca de Filmes**: Pesquise filmes por título usando a OMDb API
- **Lista Responsiva**: Grid responsivo que se adapta a diferentes tamanhos de tela
- **Detalhes do Filme**: Modal com informações detalhadas ao clicar em um filme
- **Interface Moderna**: Design limpo e moderno com Tailwind CSS
- **Estados de Loading**: Indicadores visuais durante carregamento
- **Tratamento de Erros**: Mensagens de erro amigáveis
- **Responsividade**: Funciona perfeitamente em dispositivos móveis e desktop

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca principal para interface
- **Vite** - Build tool e servidor de desenvolvimento
- **Tailwind CSS** - Framework CSS para estilização
- **Axios** - Cliente HTTP para requisições à API
- **OMDb API** - API para dados de filmes

## 📦 Componentes

A aplicação é estruturada em 4 componentes principais:

1. **App** - Componente principal que gerencia estado e lógica
2. **Header** - Barra de navegação com campo de busca
3. **MovieCard** - Card individual para cada filme
4. **MovieList** - Lista responsiva de filmes
5. **MovieModal** - Modal para exibir detalhes do filme

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone ou baixe o projeto
2. Navegue até o diretório do projeto:
   ```bash
   cd movie-app
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Abra seu navegador em `http://localhost:5173`

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Visualiza o build de produção

## 🔗 Fonte da API

Esta aplicação utiliza a **OMDb API** (The Open Movie Database):

- **Website**: http://www.omdbapi.com/
- **Documentação**: http://www.omdbapi.com/apikey.aspx
- **Tipo**: API gratuita para dados de filmes
- **Limitações**: 1000 requisições por dia (sem API key)

### Funcionalidades da API Utilizadas

- **Busca por Título**: `s` parameter para buscar filmes
- **Detalhes do Filme**: `i` parameter para informações completas
- **Filtro por Tipo**: Busca apenas filmes (`type=movie`)

## 📱 Responsividade

A aplicação é totalmente responsiva e se adapta a diferentes dispositivos:

- **Mobile** (< 640px): 1 coluna
- **Tablet** (640px - 768px): 2 colunas  
- **Desktop** (768px - 1024px): 3 colunas
- **Large Desktop** (1024px - 1280px): 4 colunas
- **XL Desktop** (> 1280px): 5 colunas

## 🎨 Design e UX

- **Header Fixo**: Barra de busca sempre visível
- **Cards Interativos**: Efeitos hover e transições suaves
- **Loading States**: Spinners durante carregamento
- **Error Handling**: Mensagens de erro claras e úteis
- **Modal Responsivo**: Detalhes do filme em modal adaptável

## 🔧 Estrutura do Projeto

```
movie-app/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieList.jsx
│   │   └── MovieModal.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 📝 Funcionalidades Implementadas

✅ Lista de filmes da API  
✅ Busca por título  
✅ Detalhes ao clicar no card  
✅ useEffect para carregar dados  
✅ useState para estado dos filmes e filtro  
✅ Responsividade completa  
✅ Tailwind CSS para estilização  
✅ Tratamento de erros  
✅ Estados de loading  
✅ Interface moderna e intuitiva  

## 🚀 Melhorias Futuras

- Implementar cache local para filmes já buscados
- Adicionar filtros por ano, gênero ou avaliação
- Implementar favoritos locais
- Adicionar paginação para resultados
- Implementar busca por sugestões
- Adicionar modo escuro
- Implementar testes unitários

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.
