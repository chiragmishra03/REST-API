const express = require("express");
const port = 3000;
const app = express();
const userRoutes = require("./routes/users.route");
const user = require("./MOCK_DATA.json");
app.use(express.json());
app.use(userRoutes);

app.listen(port, () => {
  console.log("Server is running");
});
