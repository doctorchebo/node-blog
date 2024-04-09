const Blog = require("../models/blog");

// blogs_list, blogs_create_get, blogs_create_post, blogs_details, blogs_delete

const blogs_list = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((results) => {
      res.render("blogs/index", { title: "All blogs", blogs: results });
    });
};

const blogs_create_get = (req, res) => {
  res.render("blogs/create", { title: "Create Blog" });
};

const blogs_create_post = (req, res) => {
  const blog = new Blog(req.body);
  blog.save().then((result) => {
    res.redirect("/blogs");
  });
};

const blogs_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("blogs/details", { title: "Blog Details", blog: result });
    })
    .catch((err) => res.status(404).render("404", { title: "Blog not found" }));
};

const blogs_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id).then((result) => {
    res.json({ redirect: "/blogs" });
  });
};

module.exports = {
  blogs_list,
  blogs_create_get,
  blogs_create_post,
  blogs_details,
  blogs_delete,
};
