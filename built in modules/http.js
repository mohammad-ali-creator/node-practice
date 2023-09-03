const http = require("http");

/**
 * HTTP module setup
 */

// const server1 = http.createServer((req, res) => {
//   // console.log(req);
//   res.write("Yahoo HTTP practice");
//   res.end();
// });

// const PORT1 = 5620;

// server1.listen(PORT1, () => {
//   console.log(`server started at: ${PORT1}`);
// });

/**
 * HTTP module more features
 */

/**
 * we can use the url property to control the page we are showing
 */

const server = http.createServer((req, res) => {
  /**
   * look at this if block
   * we have to write code in this way
   * otherways we will get error:  ERR_STREM_WRITE_AFTER_END
   */

  if (req.url === "/") {
    res.write("Hello, we are in the home page now");
    res.end();
  } else if (req.url === "/about") {
    res.write("Yeah we made it, we are in about page");
    res.end();
  } else {
    res.write(`
    <h1>404</h1>
    <p>page not found</p>
    <a href="/">Back to home</a>
    `);
    res.end();
  }
});

const PORT = 5621;
server.listen(PORT, () => {
  console.log("server started at 5621");
});
