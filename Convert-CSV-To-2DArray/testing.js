function test_get2DMatrixFromCSV() {
    var input = document.getElementById("inputbox").value;
    var output = document.getElementById("outputbox");
    var obj2D;
    try {
        obj2D = get2DMatrixFromCSV(input);
        console.log(JSON.stringify(obj2D));
        output.innerHTML = JSON.stringify(obj2D);
    } catch (e) {
        alert('test_get2DMatrixFromCSV: ' + e);
        return null;
    }
}