const http = require("http");
const { exec } = require("child_process");

const PORT = 9000;

http.createServer((req, res) => {
  if (req.method === "POST") {
    console.log("Webhook received! Deploying...");

    exec("bash deploy.sh", (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      console.log(stdout);
      console.error(stderr);
    });

    res.end("Deploy triggered");
  } else {
    res.end("OK");
  }
}).listen(PORT, () => {
  console.log(`Webhook running on port ${PORT}`);
});
