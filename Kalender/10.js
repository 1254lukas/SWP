

var lettag = 31;


const d = new Date();
        const dj = d.getYear() + 1900;
       // Kalender(dm, dj, 'Kalender');


const Monat = new Array(	"Jänner",
							"Jänner",
                             "Februar", 
                             "März",
                             "April",
                             "Mai",
                             "Juni",
                             "Juli",
                             "August",
                             "September",
                             "Oktober",
                             "November",
                             "Dezember",
							 "Jänner",
                             "Februar", 
                             "März",
                             "April",
                             "Mai",
                             "Juni",
                             "Juli",
                             "August",
                             "September",
                             "Oktober",
                             "November",
                             "Dezember");

let Tageszeile = "";

const Tag = new Array("Mo", "Di", "Mi", "Do", "Fr", "Sa", "So");




let tag = prompt("Tag eingeben:");
let mo = prompt("Monat eingeben:");
letztertag(mo);

var letprint = mo-1;


if (tag >= 31)
    alert("Diesen Tag gibt es nicht!");
else if (mo >= 13)
    alert("Diesen Monat gibt es nicht!");


function letztertag(mo)
    {
        if (mo == 4 || mo  == 6 || mo  == 9 || mo  == 11) 
        {
            lettag = 30;
            alert( lettag);
        }


        if (mo == 2)
        {
            lettag == lettag-3;

            if (dj % 4 == 0) lettag-2;
            else if (dj % 100 == 0) lettag-2;
             else  if (dj % 400 == 0) lettag-2;
             else lettag = lettag-3;
        }
    }

console.log(tag + mo );






//document.write("<div class='overview'> " + Monat +  " </div>");
for (i = 0; i <= 6; i++)
    {
        Tageszeile =  Tageszeile +'   |   '  + Tag[i]  + '\n';
     }

document.write("<div class='overview'> " +  Monat[mo]  + "    </div>");
document.write("<div class='Spaltenüberschrift'> " +"Tage:  "  + lettag + " </div>");


let config = {
    offSetLastMonth: 2,
    months: [
        { name: 'Jan', days: 31 },
        { name: 'Feb', days: 28 },
        { name: 'Mar', days: 31 },
        { name: 'Apr', days: 30 },
        { name: 'May', days: 31 },
        { name: 'Jun', days: 30 },
        { name: 'Jul', days: 31 },
        { name: 'Aug', days: 31 },
        { name: 'Sep', days: 30 },
        { name: 'Oct', days: 31 },
        { name: 'Nov', days: 30 },
        { name: 'Dec', days: 31 },
    ],
    
};




function printWoche() {
	i = mo;
	document.write("<br>");
	document.write(Monat[i]);
	document.write("<br>");
    document.write(Tageszeile);
	mo++;
	 document.write(' | ');
	document.write("<br>");
}

function getDayFormatted(numberOfDay) {
    if (numberOfDay < 10) {
        return ("0" + numberOfDay);
    }
    return (numberOfDay)

}




function printoffSet(getOffSet, month) {
    let offSet = getOffSet;
    let offSetString = "";
    for (let i = 0; i < offSet; i++) {
        offSetString += " --- | ";
    }
    printTage(offSet, month, offSetString);
}

function printTage(offSet, month, offSetString) {
    offSet = offSet;
    let KalenderWoche = "";
    for (let i = 1; i <= month.days;  i++) {
        let formatedNumber = getDayFormatted(i);
        KalenderWoche += formatedNumber + " | ";
        if (i + offSet == 7) {
            KalenderWoche = offSetString + KalenderWoche;
            document.write(KalenderWoche);
			document.write("<br>");
            KalenderWoche = "";
        } else if ((i + offSet) % 7 == 0) {
            document.write(KalenderWoche);
			document.write("<br>");
            KalenderWoche = "";
        } else if (i == month.days) {
             document.write(KalenderWoche);
			 document.write("<br>");
            letprint = (i + offSet) % 7;
            break;
        }
    }
}

function printKalender() {
    for (let i = 1; i < config.months.length; i++) {
        printWoche();
        printoffSet(letprint, config.months[i] );

    }
}

printKalender();