const express = require("express");
const StudentsController = require("../controllers/StudentsController");
const JWTPractice = require("../controllers/JWTPractice");
const TokenVerifyMiddleware = require("../middleware/TokenVerifyMiddleware");
const  TokenIssueController  = require("../controllers/TokenIssueController");

const router = express.Router();


// use token
router.get("/TokenIssue", TokenIssueController.TokenIssue);
router.post("/InsertStudent",TokenVerifyMiddleware , StudentsController.InsertStudent);
router.get("/ReadStudent",TokenVerifyMiddleware, StudentsController.ReadStudent);
router.post("/UpdateStudent/:id",TokenVerifyMiddleware, StudentsController.UpdateStudent);
router.get("/DeleteStudent/:id", StudentsController.DeleteStudent);

// encode / decode  JWT TOken
router.get("/createToken", JWTPractice.createToken);

router.get("/decodeToken", JWTPractice.decodeToken);

module.exports = router;
