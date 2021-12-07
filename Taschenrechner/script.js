function berechnen() {
			 let zahl1 = parseInt(document.getElementById("zahl1").value);
            let zahl2 = parseInt(document.getElementById("zahl2").value);
			
            if (document.getElementById('addieren').checked) {
                document.getElementById("Ergebniss").innerHTML = zahl1 + zahl2;} 
					else if (document.getElementById('subtrahieren').checked) {
                document.getElementById("Ergebniss").innerHTML = zahl1 - zahl2;}
					else if (document.getElementById('multiplizieren').checked) {
                document.getElementById("Ergebniss").innerHTML = zahl1 * zahl2;}
					else if (document.getElementById('dividieren').checked) {
                document.getElementById("Ergebniss").innerHTML = zahl1 / zahl2;
            }
        }

  
        function reset() {
            location.reload();
		}