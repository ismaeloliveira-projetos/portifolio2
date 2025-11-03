# Instruções para Deploy no GitHub e Vercel

## 📦 Passo 1: Criar Repositório no GitHub

1. Acesse https://github.com/new
2. Nome do repositório: `ismael-portfolio`
3. Descrição: "Portfólio pessoal desenvolvido com Next.js, TypeScript e Tailwind CSS"
4. Selecione **Public** (ou Private, se preferir)
5. **NÃO** inicialize com README, .gitignore ou licença (já temos estes arquivos)
6. Clique em **Create repository**

## 🚀 Passo 2: Conectar ao GitHub

Após criar o repositório, execute os seguintes comandos no terminal:

```bash
git remote add origin https://github.com/ismaeloliveira-projetos/ismael-portfolio.git
git branch -M main
git push -u origin main
```

Se você usa SSH, use:
```bash
git remote add origin git@github.com:ismaeloliveira-projetos/ismael-portfolio.git
git branch -M main
git push -u origin main
```

## ✅ Passo 3: Deploy na Vercel

### Opção 1: Via Website (Recomendado)

1. Acesse https://vercel.com
2. Faça login com sua conta GitHub
3. Clique em **"Add New Project"** ou **"Import Project"**
4. Selecione o repositório `ismael-portfolio`
5. A Vercel detectará automaticamente que é um projeto Next.js
6. Clique em **"Deploy"**
7. Pronto! Seu site estará no ar em alguns minutos

### Opção 2: Via CLI

```bash
npm i -g vercel
vercel
```

Siga as instruções no terminal para fazer login e deploy.

## 🎉 Pronto!

Após o deploy, você receberá uma URL como: `https://ismael-portfolio.vercel.app`

Você pode configurar um domínio personalizado nas configurações do projeto na Vercel.

