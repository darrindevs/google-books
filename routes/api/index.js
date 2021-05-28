// ✅
const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");

// book routes
router.use("/books", bookRoutes);

// google routes
router.use("/google", googleRoutes);

module.exports = router;