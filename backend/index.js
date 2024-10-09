import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ventureRoutes from "./routes/venture.routes.js";
import userRoutes from "./routes/users.routes.js";
import organisationRoutes from "./routes/organisations.routes.js";

dotenv.config();

const app = express();


const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/ventures", ventureRoutes);
app.use("/users", userRoutes);
app.use("/organisations", organisationRoutes);

app.listen(port, () => {
  console.log("Server is running on port 5000");
});

// C:\Users\Kibuuka\Desktop\Sem5\OSS> git clone https://github.com/eliezerjoel/codu.git