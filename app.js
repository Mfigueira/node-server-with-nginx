const http = require("http");
const PORT = 3000;

http
  .createServer(function (req, res) {
    res.write("🚧 Node.js Server under construction 🚧");
    res.end();
  })
  .listen(PORT);

console.log(`Server started on port ${PORT}`);
