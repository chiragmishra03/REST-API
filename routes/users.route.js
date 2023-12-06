const router = require("express").Router();
const { dirname, join } = require("path");
const users = require("../MOCK_DATA.json");
const fs = require("fs");

router.get("/api/users", (req, res) => {
  res.send(users);
});

router.get("/api/user/:id", (req, res) => {
  const id = Number(req.params.id);
  const user_data = users.find((user) => user.id == id);
  res.send(user_data);
});

router.post("/api/create-user", (req, res) => {
  let newUser = {};
  newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);

  const filePath = join(dirname(__dirname), "MOCK_DATA.json");
  fs.writeFile(filePath, JSON.stringify(users), (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return res.status(500).send("Error writing to file");
    }
    return res.send("Created Successfully");
  });
});

module.exports = router;
