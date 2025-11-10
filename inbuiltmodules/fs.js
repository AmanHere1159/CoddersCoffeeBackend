const { readUserFileSync, writeUserFileSync, updateUserWithID } = require("../Controller/asyncfunction");


exports.testfs = (req, res) => {
 
  const { url, method } = req;
 
// 1????????????????????????????????
  if (url.endsWith("/read") && method === "GET") {
    try {
      const content = readUserFileSync();
      console.log("___________________")
      console.log(content);
         

      res.end(JSON.stringify(content));
    } catch (err) {
      console.error("Error reading file:", err);
 
      res.end("Internal Server Error");
    }
  }
  // 2????????????????????????????????????????
  else if (url.endsWith("/write") && method === "POST") {
  let body = "";
  let msg = "";

  req.on("data", chunk => {
    body += chunk.toString();
  });

  req.on("end", () => {
    console.log("Body received:", body);
    try {
      body = JSON.parse(body); // parse JSON once
    } catch (error) {
      console.log("Invalid Format");
      let status = 404;
      return res.end(JSON.stringify({ status: "Error Invalid Format" }));
    }

    // Save data
    const status = writeUserFileSync(body);

    if (status) {
      msg = "Content is successfully written in DB";
    } else {
      msg = "Failed to write content in DB";
    }

    res.end(JSON.stringify({ status: msg, data: body }));
  });
}

  //3??????????????????????????????????????????????????????
  else if(url.startsWith("/fs/Update") && method==="PUT"){
    // read krrna sab files ya content
    const content = readUserFileSync();
    // Getting the updates from user
     let body = "";
  req.on("data", chunk => {
    body += chunk.toString();
  });

  req.on("end", () => {
    try {
        body=JSON.parse(body);
    console.log("Body received:", body)
    } catch (error) {
      return res.end(JSON.stringify({ status: "Invalid JSON format" }));
    }
  })

    const id = url.split("/").pop();
    console.log(id)
const status = updateUserWithID(id,body);
   if (status) {
      msg = `Content successfully updated in DB $${id}`;
    } else {
      msg = "Failed to write content in DB";
    }



        res.end(JSON.stringify({ status: msg, data: body }));
  }



  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }


  
};
