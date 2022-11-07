import express from "express";

const app = express();

app.get("/login", (req, res, next) => {
   console.log("I'm getting it!")
   res.json({username: "Testsson"});
});

app.post("/login", (req, res, next) =>{
   console.log("On the way!")
   res.sendStatus(401);
});

app.use(express.static("../client/dist"));

const server = app.listen(process.env.PORT || 3000,
    () => {
   console.log(`Server started at http://localhost:${server.address().port}`);
});