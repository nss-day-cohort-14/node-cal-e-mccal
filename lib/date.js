// const h = dayOfWeek;
// const q = datOfMonth;
// const m = month;
// const k = yearOfCentury;
// const j = year/100;

let h = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
]
let month = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']


for (var x = 0; x < month.length; x++) {
    console.log(month[x], x)
}




/////////////////

for (var i = 0; i < h.length; i++) {
    // }

    // console.log(h[i], i)
    // console.log(i)
    // h[i]
    // }
    let today = {
        q: new Date().getDate(),
        m: new Date().getMonth() + 1,
        k: (new Date().getYear()) % 100,
        j: Math.floor((new Date().getYear()) % 100)

    }

    let q = (today.q);
    let m = (today.m);
    let k = (today.k);
    let j = (today.j);

    math = () => {
        // return Math.floor(((q + ((13 * (m + 1)) / 5) + k + (k / 4) + (j / 4) - (2 * j)) % 7));

        return Math.floor(((q + ((13 * (x + 1)) / 5) + k + (k / 4) + (j / 4) - (2 * j)) % 7));

    }


    // console.log("today", math());
    console.log("today", h[i], i);
    console.log(q)
    console.log(k)
    console.log(j)
    console.log(m)
    // console.log(i)
}
