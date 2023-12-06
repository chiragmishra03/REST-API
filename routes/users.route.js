const router = require("express").Router();
const user = require("../MOCK_DATA.json");
router.get("/users", (req, res) => {
  res.send(user);
});

module.exports = router;
