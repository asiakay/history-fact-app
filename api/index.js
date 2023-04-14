const express = require("express");
const cors = require("cors");

const app = express();

// Enable CORS for all routes
app.use(cors());

// Predefined dataset of articles
const articles = [
  {
    "title": "\"Race: Are We So Different?\" exhibit at the Natural History Museum.",
    "url": "https://www.si.edu/exhibitions/race-are-we-so-different%3Aevent-exhib-509"
  },
  {
    "title": "The world got along without race for the overwhelming majority of its history.",
    "url": "https://nmaahc.si.edu/learn/talking-about-race/topics/historical-foundations-race"
  },{
    "title":"Race is a social construct without biological meaning.",
    "url": "https://www.scientificamerican.com/article/race-is-a-social-construct-scientists-argue/"
  },{
    "title": "Top Nixon adviser reveals the racist reason he started the 'war on drugs' decades ago",
    "url": "https://www.businessinsider.com/nixon-adviser-ehrlichman-anti-left-anti-black-war-on-drugs-2019-7"
  },{
    "title": "The Historical Origins and Development of Racism",
    "url": "https://www.pbs.org/race/000_About/002_04-background-02-01.htm"
  }
  // ...
];

// API route to fetch articles
app.get("/api/articles", (req, res) => {
  res.json(articles);
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
