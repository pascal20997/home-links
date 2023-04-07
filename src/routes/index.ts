import { Request, Response, Router } from "express";

var express = require("express");
var router: Router = express.Router();

export type HomeLink = {
  label: string;
  description: string;
  link: string;
};

const links: HomeLink[] = [
  {
    label: "Google",
    description: "Little Search Engine",
    link: "https://google.com",
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home", links: links });
});

module.exports = router;
