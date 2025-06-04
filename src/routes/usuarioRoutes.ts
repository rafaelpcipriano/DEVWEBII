import { Router } from "express";
import {
  criarUsuario,
  listarUsuarios,
  obterUsuario,
  atualizarUsuario,
  deletarUsuario,
} from "../controllers/usuarioController";

const router = Router();

router.post("/usuarios", criarUsuario);
router.get("/usuarios", listarUsuarios);
router.get("/usuarios/:id", obterUsuario);
router.put("/usuarios/:id", atualizarUsuario);
router.delete("/usuarios/:id", deletarUsuario);

export default router;
