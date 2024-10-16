import express from "express";
import cors from "cors";
import morgan from "morgan";
import UserRoutes from "./routes/UserRoutes.js";
import { PORT } from "./config.js";
const app = express();


// ?Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(UserRoutes);

//?settings

app.set("port", PORT);

//?servidor

app.listen(app.get("port"), () => {
    console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
});




