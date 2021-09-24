const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy("/server", {
      target: "http://localhost:3000", // API endpoint 1
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
    proxy("/api", {
      target:
        "https://raw.githubusercontent.com/lhotwll217/lhotwll217.github.io/main/data/events_300_rss.json", // API endpoint 2
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
      headers: {
        Connection: "keep-alive",
      },
    })
  );
};
