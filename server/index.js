const express = require("express");
const path = require("path"); 

const app = express();


const distDir = path.join(__dirname, '..', 'client', 'dist');

app.use(express.static(distDir)); 


const logRoutes = (req, res, next) => {
  const timestamp = new Date().toLocaleString(); 
  console.log(`${timestamp}: ${req.method} ${req.url}`);
  next(); 
};


app.use(logRoutes);


app.get("*", (req, res) => { 
  res.sendFile(path.join(distDir, "index.html"));
});

const port = 8080; 

app.listen(port, () => {
  console.log(`Server is connected doofus! (Listening on port ${port})`);
});