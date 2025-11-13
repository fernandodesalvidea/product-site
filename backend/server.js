import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import path from "path";

const app = express();

dotenv.config();

process.env.PORT = process.env.PORT || 5001;
const PORT = process.env.PORT;

const __dirname = path.resolve();

app.use(express.json()); //middleware to parse JSON request bodies
app.use("/api/products", productRoutes);

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
        app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}


app.listen(PORT, () => {
    connectDB();
    console.log(`Server started at http://localhost:` + PORT);
});

//PSDt8rqy81RpAPQ8
