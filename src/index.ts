import express from "express";
import cors from "cors";
import usuarioRoutes from "./routes/usuarioRoutes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", usuarioRoutes);

// Exporta como handler para Vercel
export default app;
