const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blogController");

router.get("/create", blogController.blogs_create_get);

router.get("/:id", blogController.blogs_details);

router.get("/", blogController.blogs_list);

router.post("/", blogController.blogs_create_post);

router.delete("/:id", blogController.blogs_delete);

module.exports = router;
