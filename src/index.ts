import express from "express";
import workflowRouter from "./routes";

const server = express();
const PORT = 3000;

server.use(express.json());

server.use("/api/workflow", workflowRouter);

server.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`)
})