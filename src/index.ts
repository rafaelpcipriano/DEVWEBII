import express from "express";
import cors from "cors";
import usuarioRoutes from "./routes/usuarioRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", usuarioRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
