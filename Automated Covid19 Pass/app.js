const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
var request = require("request");
var collection = require('./collections/collection');



//PDF Gen has been deleted and is not working , changes are being made 
require('dotenv').config();




const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.use('*/css', express.static('public/css'));
app.use('*/js', express.static('public/js'));
app.use('*/images', express.static('public/images'));

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AITH_TOKEN;
const client = require('twilio')(accountSid, authToken);



app.get("/", function (req, res) {
    res.render("index");
});


app.get("/e-pass", function (req, res) {
    res.render("e-pass", { collection: collection });
});





app.post("/status", function (req, res) {
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
    var idcard = req.body.idcard;
    var source = req.body.source;
    var destination = req.body.destination;
    var dest_state = req.body.dest_state;
    var phoneNumber = req.body.phone_id;
    var source_state=req.body.source_state;

    var trip = req.body.trip;

    console.log(req.body);
    axios.get('https://api.covid19india.org/v4/data.json').then((res) => {
        var data = JSON.parse(JSON.stringify(res.data));
        console.log(data[dest_state]["districts"][destination].total.confirmed);



    }).catch(function (error) {
        console.log("No res data from api");
        console.log(error);
    })
    var totalpop = (data[dest_state]["districts"][destination].meta.population);
    var confirmed = (data[dest_state]["districts"][destination].total.confirmed);
    console.log(confirmed / totalpop);

    if (confirmed / totalpop < 0.001) {
        var status = "Approved";
        console.log("here");
        client.messages
            .create({
                body: '\n' + '\n Govt of Telangana e-Pass Approved' + '\n  Your Request for E-pass  has been Approved. Your Details are' + '\n First Name: ' + [req.body.fname] + '\n Last Name: ' + [req.body.lname] + '\n Email: ' + [req.body.email] + '\n Aadhar: ' + [req.body.idcard] + '\n Source State: ' + [req.body.source_state] + '\n Source: ' + [req.body.source] + '\n Destination State: ' + [req.body.dest_state] + '\n Destination: ' + [req.body.destination] + '\n Date: ' + [req.body.trip],
                from: '+12052368255',
                to: [req.body.phone_id]
            })
            .then(message => console.log(message.sid))
            .catch((err) => console.log(err));
    }
    else {
        var status = "Rejected";
        console.log("not here");
        console.log(phone_id);
        client.messages
            .create({
                body: '\n' + '\n Govt of Telangana e-Pass Rejected' + '\n Sorry your Request for E-pass  has been rejected. Please try applying to the Pass 3 days later. Your Details are' + '\n First Name: ' + [req.body.fname] + '\n Last Name: ' + [req.body.lname] + '\n Email: ' + [req.body.email] + '\n Aadhar: ' + [req.body.idcard] + '\n Source State: ' + [req.body.source_state] + '\n Source: ' + [req.body.source] + '\n Destination State: ' + [req.body.dest_state] + '\n Destination: ' + [req.body.destination] + '\n Date: ' + [req.body.trip],
                from: '+12052368255',
                to: [req.body.phone_id]
            })
            .then(message => console.log(message.sid))
            .catch((err) => console.log(err));
    }
    res.render("status", { data: req.body, status: status });
});

app.post('/test', function (req, res) {
    console.log(req.body);
})
const pdfRoute = require('./routes/pdfgen');
app.use('/', pdfRoute);



app.get('/register', (req, res) => {

    res.sendFile(__dirname + '/sample.html');
})


app.listen(3000, console.log("Server up at 3000"));




