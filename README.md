# 🌍 Países do Mundo

Aplicação web que lista todos os países do mundo, com informações completas, filtros e paginação. Desenvolvido com **Next.js**, **TypeScript**, **TailwindCSS**, consumo da **REST Countries API**, e gestão de estado com **Zustand**.

---

## 🚀 Funcionalidades

✅ Listagem de países com informações em **Português** (quando disponível).  
✅ Filtros por **região** (checkbox), **idioma** (select) e **busca por nome** (input).  
✅ Paginação com controle visual de páginas.  
✅ Página de **detalhes do país** com informações como:

- Nome oficial.
- Capital.
- População.
- Moeda.
- Idiomas.
- Região e Sub-região.
- Bandeira.

✅ Tooltip para nomes longos.  
✅ Responsivo para diferentes tamanhos de tela.  
✅ Componente de **loading** durante o carregamento dos dados.

---

## 🛠️ Tecnologias Utilizadas

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Radix UI** (Select, Checkbox e Tooltip)
- **REST Countries API v3.1**
- **Zustand** (para filtros)

---

## ⚙️ Instalação e execução

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Acesse a pasta do projeto
cd seu-repositorio

# Instale as dependências
npm install
# ou
yarn install

# Execute o projeto
npm run dev
# ou
yarn dev
```

---

## 🔗 REST Countries API

O projeto consome dados da **REST Countries API v3.1**, buscando os seguintes campos:

- `name`
- `translations`
- `cca2`
- `region`
- `subregion`
- `capital`
- `flags`
- `languages`
- `population`
- `currencies`

As informações são exibidas no idioma **Português**, utilizando o campo `translations.por` sempre que disponível.

---

## 📂 Estrutura de pastas

```plaintext
src/
 ├── app/               # Páginas e rotas
 ├── components/        # Componentes reutilizáveis
 ├── lib/               # Funções de API (fetchCountries, fetchCountryByCode)
 ├── store/             # Zustand - filtros globais
 ├── assets/            # Imagens (bandeiras de regiões)
 ├── styles/            # Tailwind config
```
