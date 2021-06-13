const express = require("express");

const app = express(),
      bodyParser = require("body-parser");
      cors = require("cors");

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

//app.use(cors(corsOptions));
app.use(express.static('./ipl-predictor/dist/'));



// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/model");
const PredictList = db.predictList;
const Op = db.Sequelize.Op;

db.sequelize.sync();

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: './ipl-predictor/'}
);
});

app.post('/api/user', (req, res) => {
  const data = req.body.user;
  const dataObj = JSON.parse(data);
   const predictedList = {
    name: dataObj.name,
    predicted_list: dataObj,
    winner: dataObj.Winner[0].team
  };


  PredictList.create(predictedList)
    .then(data => {
      res.status(200).send();
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the List."
      });
      console.log(err.message);
    });

 
});


// set port, listen for requests
const port = process.env.port||'8080';
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});