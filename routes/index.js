// ✅
const path = require("path");
const apiRoutes = require("./api");
const router = require("express").Router();

// api routes 
router.use("/api", apiRoutes);

// if no routes
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
