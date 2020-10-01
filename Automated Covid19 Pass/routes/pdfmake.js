const express =require('express');
const router=express.Router();

var pdfMake = require('pdfmake/build/pdfmake.js');
var pdfFonts = require('pdfmake/build/vfs_fonts.js');
pdfMake.vfs = pdfFonts.pdfMake.vfs;





module.exports=function(status,data){
    console.log(status);
    console.log("pdf")
    console.log(data.name);

    router.post('/pdf',(req,res,next)=>{
        console.log(req.body)
        if(status===1){
        var dd = {
            content: [
                'Approved paragraph',
                'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
            ]        
        };
    }
    else{
        var dd = {
            content: [
                'Rejected paragraph',
                'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
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
    return router;
}