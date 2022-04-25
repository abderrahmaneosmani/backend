import express from "express";
const app = express();
import users from "../backend/routes/users.js";
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/users", users);

app.listen(port, () => {
  console.log("server running on port", port);
});
