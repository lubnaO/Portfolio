const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./Data/projects.json");
const middleWares = jsonServer.defaults({
static: "./build",
});
const port = process.env.PORT || 4000;
server.use(middleWares);
server.use(
jsonServer.rewriter({
"/api/*": "/$1",
})
);
server.use(router);
server.listen(port, () => {
console.log(`server is running on port : ${port}`);
});