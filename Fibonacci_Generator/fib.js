function fib(n) {
    document.write("<table>",
        "<caption>Fibonacci Table</caption>",
        "<tr><th>n</th><th>Fib(n)</th></tr>");
    
    var temp, i;
    var left = 0;
    var right = 1;

    if(isNaN(n) || n < 0){
        document.write("<tr><td colspan=\"2\">Not a valid input</td></tr>");
    } else if (n == 0){
        document.write("<tr><td>0</td><td>0</td></tr>");
    } else {
        document.write("<tr><td>0</td><td>0</td></tr>");
        document.write("<tr><td>1</td><td>1</td></tr>");
        for (i = 1; i < n; i++) {
            temp = left;
            left = right;
            right = temp + left;
            document.write("<tr><td>", i + 1, "</td><td>", right, "</td></tr>");
        }
    }
    document.write("</table>")
}

num = prompt("Enter a positve integer:" , "")

fib(num);

