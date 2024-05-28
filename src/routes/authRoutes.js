
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const router = express.Router();
const prisma = new PrismaClient();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    // Verificar se o usuário existe no banco de dados
    const user = await prisma.user.findUnique({
      where: {
        username: username
      }
    });
  
    if (!user) {
      return res.status(404).send("Usuário não encontrado");
    }
  
    // Verificar se a senha está correta
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).send("Senha incorreta");
    }
  
    // Autenticação bem-sucedida
    res.status(200).send("Login bem-sucedido");
  });

router.post('/signup', async (req, res) => {
    router.post('/signup', async (req, res) => {
        const { username, email, password } = req.body;
      
        // Verificar se o nome de usuário e o email são únicos
        const existingUser = await prisma.user.findFirst({
          where: {
            OR: [
              { username: username },
              { email: email }
            ]
          }
        });
      
        if (existingUser) {
          return res.status(400).send("Nome de usuário ou email já cadastrado");
        }
      
        // Criptografar a senha antes de salvar no banco de dados
        const hashedPassword = await bcrypt.hash(password, 10);
      
        // Criar o novo usuário no banco de dados
        const newUser = await prisma.user.create({
          data: {
            username: username,
            email: email,
            password: hashedPassword
          }
        });
      
        res.status(201).send("Usuário cadastrado com sucesso");
      });
});

router.post('/forgot-password', async (req, res) => {
    router.post('/forgot-password', async (req, res) => {
        const { email } = req.body;
      
        // Verificar se o usuário com o e-mail fornecido existe no banco de dados
        const user = await prisma.user.findUnique({
          where: {
            email: email
          }
        });
      
        if (!user) {
          return res.status(404).send("Usuário não encontrado");
        }
      
        // Lógica para enviar e-mail de recuperação de senha
        // (Não implementado neste exemplo)
      
        res.status(200).send("Email de recuperação de senha enviado com sucesso");
      });
});

module.exports = router;
