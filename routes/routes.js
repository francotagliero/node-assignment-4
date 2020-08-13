const express = require("express");

const router = express.Router();

const users = [];

// home
router.get("/", (req, res, next) => {
  res.status(200).render("home", { pageTitle: "Add users" });
});

// add user POST
router.post("/add-user", (req, res, next) => {
  const obj = JSON.parse(JSON.stringify(req.body));
  users.push({ user: obj.user });
  res.redirect("/users");
});

// /users -> list of users
router.get("/users", (req, res, next) => {
  console.log(users);
  res
    .status(200)
    .render("users", { listOfUsers: users, pageTitle: "List of Users" });
});

// if match with no one -> error 404.
router.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page not found" });
});

module.exports = router;
