import express from "express";
import cors from "cors";
import usuarioRoutes from "./routes/usuarioRoutes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", usuarioRoutes);

// Rota básica de status para a raiz "/"
app.get("/", (req, res) => {
  res.send("✅ API DEVWEBII rodando com sucesso na Vercel 🚀");
});

// Exporta como handler para a Vercel
export default app;
