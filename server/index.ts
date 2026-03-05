import "dotenv/config"; // Load environment variables from .env file
import logger from "./utils/logger"; // Import the custom logger
import exampleRouter from "./routes/router"; // Import the example router
import express, { Response, Request } from "express"; // Import Express and types for Request and Response

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api/v1/example", exampleRouter);

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
