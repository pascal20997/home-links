import debug from "debug";
import express, { Express, Request, Response } from "express";
import http from "http";
import { homeApp } from "./app";

const localDebug = debug("home-links:server");
const app = homeApp();

const port = Number(String(process.env.PORT)) | 3000;
app.set("port", port);

const server = http.createServer(app);

server.listen(port);

server.on("error", (error: NodeJS.ErrnoException) => {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
});

server.on("listening", () => {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr?.port;
  localDebug("Listening on " + bind);
});
