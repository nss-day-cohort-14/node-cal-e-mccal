// const h = dayOfWeek;
// const q = datOfMonth;
// const m = month;
// const k = yearOfCentury;
// const j = year/100;


const [, , ...cliArgs] = process.argv

<<<<<<< HEAD
math = () => {
  return Number(((q + ((13*(m+1))/5) + k + (k/4) + (j/4) - (2*j))%7));
}
// console.log(Math.floor(math()));

switch (Math.floor(math())) {
    case 0:
        console.log("Saturday");
        break;
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log();"monday";
        break;
    case 3:
        console.log();"tuesday";
        break;
    case 4:
         console.log("Wednesday");
        break;
    case 5:
        console.log();"thursday";
        break;
    case 6:
        console.log();"Friday";
}
=======
let h = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
]
let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']


for (var x = 0; x < months.length; x++) {
    console.log(months[x], x)

    const month = require("./month").getMonth();
    const year = require("./year").getYear();
    const day = require("./day").getDay();
    const J = require("./year").getYearJ()

    let today = {
        q: day,
        m: month,
        k: year,
        j: J
    }
>>>>>>> ad3b1104cea1834c9245d0ec854a8a83782cd68f


    /////////////////

    for (var i = 0; i < h.length; i++) {
        // }


    }

    console.log(math());

    function getDate(q, m, k) {
        return Number((((q - 1) + ((13 * (m + 1)) / 5) + k + (k / 4) + (j / 4) - (2 * j)) % 7));
    }


    console.log(getDate(20, 12, 19));
}
