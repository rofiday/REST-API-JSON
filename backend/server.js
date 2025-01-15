require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const productRoute = require("./routes/product.route");
const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.get("/", (req, res) => {
  res.send("testing server");
});
app.use("/api/products", productRoute);

app.listen(PORT, () => {
  console.log(`server running  on http:localhost:${PORT}`);
});
