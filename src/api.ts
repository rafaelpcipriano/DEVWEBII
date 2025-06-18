import app from "./index";
import { createServer } from "http";

const PORT = process.env.PORT || 3000;

createServer(app).listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
