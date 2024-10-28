const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const next = require("next");
dotenv.config({ path: "./config.env" });
const dev = process.env.NODE_ENV != "production";
const nextServer = next({ dev });
const handle = nextServer.getRequestHandler();

const coinMarketCapRoute = require("./Api/Routes/ApiRoutes");
// const postRoute = require("./Api/routes/posts");
const path = require("path");
const { errorHandler } = require("./Api/Middlewares/Error");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/cryptocurrency", coinMarketCapRoute);

app.use(errorHandler);

nextServer.prepare().then(() => {
  app.get("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(port, () => {
    console.log(`App running on port ${port}....`);
  });
});
