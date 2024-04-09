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

const blogs_edit_get = (req, res) => {
  const { id } = req.params;
  Blog.findById(id).then((result) => {
    res.render("blogs/edit", { title: "Edit Blog", blog: result });
  });
};

const blogs_edit_put = (req, res) => {
  console.log("editing blog..");
  const id = req.params.id;
  const { title, snippet, body } = req.body;
  Blog.findById(id)
    .then((result) => {
      const blog = result;
      blog.title = title;
      blog.snippet = snippet;
      blog.body = body;
      blog.save().then((result) => {
        res.redirect("/");
      });
    })
    .catch((err) => {
      res.status(404).render("404", { title: "Blog not found" });
    });
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
  blogs_edit_get,
  blogs_edit_put,
  blogs_delete,
};
