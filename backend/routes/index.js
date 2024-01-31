const express = require("express");
const userRouter = require("./user");
const adminRouter = require("./admin");
const accountRouter = require("./account");

const router = express.Router();

router.use("/user", userRouter);
router.use("/admin", adminRouter);
router.use("/account", accountRouter);

module.exports = router;
