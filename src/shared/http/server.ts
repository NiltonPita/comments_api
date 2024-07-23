import 'reflect-metadata';
import express, { Request, Response, NextFunction } from "express";
import swaggerUi from 'swagger-ui-express';
import cors from "cors";
import routes from "./routes";
import swaggerDocs from "./swagger.json";
import AppError from "../errors/AppError";

const app = express();

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use(cors());
app.use(express.json());
app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    console.log("AQUI = " + error);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.use("/v1", routes);

app.listen(5000, () => {
  require('dotenv/config');
  console.log('Server started on port 5000! 🏆');
});
