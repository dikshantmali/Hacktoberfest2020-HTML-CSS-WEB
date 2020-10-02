const express =require('express');
const axios=require('axios');
const bodyParser = require("body-parser");
const router=express.Router();

var pdfMake = require('pdfmake/build/pdfmake.js');
var pdfFonts = require('pdfmake/build/vfs_fonts.js');
pdfMake.vfs = pdfFonts.pdfMake.vfs;
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var con="Anantapur"

axios.get('https://api.covid19india.org/v4/data.json').then((res) => {
    data = JSON.parse(JSON.stringify(res.data));
    
    
}).catch(function (error) {
    console.log("No res data from api")
})

router.post('/pdfgen',urlencodedParser,(req,res,next)=>{
  
    

    console.log(req.body);
    var totalpop=data[req.body.dest_state]["districts"][req.body.destination].meta.population;
    var confirmed=data[req.body.dest_state]["districts"][req.body.destination].total.confirmed;
    console.log(confirmed/totalpop);
    
   
    if(confirmed/totalpop <0.3){
    var dd = {
        content: [
            // {
            //     image: 'public/images/aplogo.png',
            //     width: 150,
            //     height: 150,
            //     margin: [200, 20, 20, 20],
            // },
            'COVID-19 e-Pass Govt. of Telangana',
            'Please keep the copy of e-Pass when enterning the premises of Telangana .This e-Pass if only valid for 1 week from its date of approval',
            'Only one person is allowed to travel with the pass',
            "Carry neccessary documents during the time of travel",
            'e-Pass will be ceased if the applicant is seen violating the rules and regulations',
            'The e-Pass will only be valid for 1 week ',
            `Name: ${req.body.fname} ${req.body.lname}`,
            `Source: ${req.body.source}`,
            `Destination: ${req.body.destination}`,
            'Status: Approved ',
            `Date: ${req.body.date}`
        ]        
    };
}
else{
    var dd = {
        content: [
                // {
                //     image: '../public/images/aplogo.png',
                //     width: 150,
                //     height: 150,
                //     margin: [200, 20, 20, 20],
                // },
                'COVID-19 e-Pass Govt. of Telangana',
            'Please keep the copy of e-Pass when enterning the premises of Telangana .This e-Pass if only valid for 1 week from its date of approval',
            'Only one person is allowed to travel with the pass',
            "Carry neccessary documents during the time of travel",
            'e-Pass will be ceased if the applicant is seen violating the rules and regulations',
            'The e-Pass will only be valid for 1 week ',
            `Name: ${req.body.fname} ${req.body.lname}`,
            `Source: ${req.body.source}`,
            `Destination: ${req.body.destination}`,
            'Status: Rejected ',
            `Date: ${req.body.date}`
        ]        
    };
}
    
    const pdfDoc=pdfMake.createPdf(dd);
    
    
    pdfDoc.getBase64((data) => {
        res.writeHead(200,
            {
                'Content-Type':'application/pdf',
                'Content-Disposition':'attachment;filename="filename.pdf"'
            });
            const download=Buffer.from(data.toString('utf-8'),'base64');
            res.end(download);
    });
    
})




module.exports=router;