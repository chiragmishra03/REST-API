const express = require("express");
const port = 3000;
const app = express();
const getusers = require("./routes/users.route");
const user = require("./MOCK_DATA.json");
app.use(express.json());
app.use(getusers);

app.listen(port, () => {
  console.log("Server is running");
});
