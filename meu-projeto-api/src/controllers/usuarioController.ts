import { Request, Response } from "express";
import prisma from "../prisma/client";

export const criarUsuario = async (req: Request, res: Response) => {
  const { nome, email } = req.body;
  try {
    const novoUsuario = await prisma.usuario.create({
      data: { nome, email },
    });
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar usuário." });
  }
};

export const listarUsuarios = async (_req: Request, res: Response) => {
  try {
    const usuarios = await prisma.usuario.findMany();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar usuários." });
  }
};

export const obterUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const usuario = await prisma.usuario.findUnique({
      where: { id: Number(id) },
    });
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).json({ error: "Usuário não encontrado." });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter usuário." });
  }
};

export const atualizarUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome, email } = req.body;
  try {
    const usuarioAtualizado = await prisma.usuario.update({
      where: { id: Number(id) },
      data: { nome, email },
    });
    res.json(usuarioAtualizado);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar usuário." });
  }
};

export const deletarUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.usuario.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: "Erro ao deletar usuário." });
  }
};
