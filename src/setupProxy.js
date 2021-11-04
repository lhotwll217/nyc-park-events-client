const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    //@ts-ignore
    proxy("/server", {
      target: "https://vast-river-53085.herokuapp.com/", // API endpoint 1
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
