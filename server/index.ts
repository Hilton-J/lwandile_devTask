import "dotenv/config"; // Load environment variables from .env file
import cors from "cors"; // Import CORS middleware
import exampleRouter from "./routes/router"; // Import the example router
import express, { Response, Request } from "express"; // Import Express and types for Request and Response

const app = express();

const allowedOrigins = [
  "http://localhost:3080",
  "https://dev-task-frontend.vercel.app/",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "PATCH", "PUT", "DELETE", "POST"],
    credentials: true,
  }),
);
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api/v1/sort", exampleRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
