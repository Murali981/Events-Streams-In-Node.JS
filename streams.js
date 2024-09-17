const fs = require("fs");

const server = require("http").createServer();

server.on("request", (req, res) => {
  // Solution 1
  //   fs.readFile("test-file.txt", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });
  // Solution 2 is using streams
  //   const readable = fs.createReadStream("test-file.txt"); // This will create a  stream to the test-file.txt file which will read the
  //   // data drom this test-file chunk by chunk.
  //   // When each time there is a new piece of data that we can consume , a readable stream emits the data event and so we can listen to
  //   // that event by using the readable.on() method
  //   readable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   readable.on("end", () => {
  //     res.end(); // When the reading of entire chunk data is over then we will listen to this end event on readable with
  //     // res.end() to send the response to the client
  //   });
  //   readable.on("error", (err) => {
  //     console.error("Error reading file: ", err);
  //     res.statusCode = 500;
  //     res.end("Server error");
  //   });
  /// Solution 3 using pipe() operator ///
  // The abovem pipe() operator is available on all readable streams and it allows us to pipe the output of a readable stream right
  // into the input of a wruitable stream.
  const readable = fs.createReadStream("test-file.txt"); // This will create a  stream to the test-file.txt file which will read the
  //   // data drom this test-file chunk by chunk.
  readable.pipe(res); // This will pipe the data from the readable stream to the response object which is a writable stream.
  //   // When each time there is a new piece of data that we can consume , a readable stream emits the data event and so we can listen to
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server is running on port 8000");
});
