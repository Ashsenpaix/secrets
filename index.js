import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", async (req, res) => {
    try {
        const result = await axios.get("https://secrets-api.appbrewery.com/random");
        res.render("index.ejs", {
          secret: result.data.secret,
          user: result.data.username,
        });
      } catch (error) {
        console.log(error.response.data);
        res.status(500);
      }
    });


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  