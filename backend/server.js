import express from "express";
import cors from "cors";
import "dotenv/config";
import { sendEmail } from "./controllers/contactControllers.js";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/messages", sendEmail);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
