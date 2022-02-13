const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    //@ts-ignore
    proxy("/server", {
      target: "http://localhost:3000/",
      //target: "https://vast-river-53085.herokuapp.com/", // API endpoint 1
      changeOrigin: true,
      pathRewrite: {
        "^/server": "",
      },
      headers: {
        Connection: "keep-alive",
      },
    })
  );
  app.use(
    //@ts-ignore
    proxy("/test", {
      target: "http://localhost:3000/", // API endpoint 2
      changeOrigin: true,
      pathRewrite: {
        "^/test": "",
      },
      headers: {
        Connection: "keep-alive",
      },
    })
  );
};
