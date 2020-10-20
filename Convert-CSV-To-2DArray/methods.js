
function get2DMatrixFromCSV(csvData){
    try{
            rows = csvData.split("\n");
        
            return rows.map(function (row) {
            return row.split(",");
        });
    }
    catch(e){
        alert('get2DMatrixFromCSV: ' + e);
        return null;
    }
}