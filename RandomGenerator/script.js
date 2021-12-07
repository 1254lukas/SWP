 function generate() {
            let num1 = parseInt(document.getElementById("num1").value);
            let num2 = parseInt(document.getElementById("num2").value);
            let random = parseInt(Math.random() * (num2 - num1) + num1);
            document.getElementById("output").innerHTML = "<p>" + "Zufällige Zahl zwischen " +  num1 + " und " +  num2 + ": " + random + "</p>";
        }