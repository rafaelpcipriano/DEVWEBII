import { Request, Response } from "express";
import prisma from "../prisma/client";

export const criarUsuario = async (req: Request, res: Response) => {
  try {
    const { nome, email } = req.body;
    const usuario = await prisma.usuario.create({ data: { nome, email } });
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar usuário" });
  }
};

export const listarUsuarios = async (_req: Request, res: Response) => {
  const usuarios = await prisma.usuario.findMany();
  res.json(usuarios);
};

export const obterUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const usuario = await prisma.usuario.findUnique({
    where: { id: Number(id) },
  });
  usuario
    ? res.json(usuario)
    : res.status(404).json({ error: "Não encontrado" });
};

export const atualizarUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome, email } = req.body;
  try {
    const usuario = await prisma.usuario.update({
      where: { id: Number(id) },
      data: { nome, email },
    });
    res.json(usuario);
  } catch {
    res.status(400).json({ error: "Erro ao atualizar usuário" });
  }
};

export const deletarUsuario = async (req: Request, res: Response) => {
  try {
    await prisma.usuario.delete({ where: { id: Number(req.params.id) } });
    res.status(204).send();
  } catch {
    res.status(400).json({ error: "Erro ao deletar usuário" });
  }
};
