const express = require("express");
const app = express();
const zod = require("zod");
const { Notes } = require("./db");
const { now } = require("mongoose");
const cors = require("cors");
app.use(cors());
const port = 3000;
app.use(express.json());
const createnotesSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
});
app.use(cors(
  {
    origin:["http://veritas.Notebook-A.vercel.app"],
    methods:["GET","POST"],
    Credentials:true
  }
));

app.post("/notes", async function (req, res) {
  const createpayload = req.body;
  //validating the inputs by zod.
  try {
    createnotesSchema.parse(createpayload);
  } catch (error) {
    res.status(404).json({
      msg: "Invalid inputs",
    });
    return;
  }
  //if validation succeeded create the notes

  try {
    await Notes.create({
      title: createpayload.title,
      description: createpayload.description,
    });
    res.send("notes created succesfully");
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

app.get("/notes", async function (req, res) {
  const notes = await Notes.find({});
  res.json({
    notes,
  });
});

app.listen(3000, function () {
  console.log("listening at port " + port);
});
