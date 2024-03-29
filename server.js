const express = require("express");
const app = express();
const authRoute =require("./router/auth");
const postRoute =require("./router/post");
const usersRoute = require("./router/user");
const cors = require("cors");

require("dotenv").config();

const PORT = 8000;

app.use(cors());

app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);
app.use("/api/users", usersRoute);

app.listen(PORT,() => console.log(`server is running on port ${PORT}`));
