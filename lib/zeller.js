// const h = dayOfWeek;
// const q = datOfMonth;
// const m = month;
// const k = yearOfCentury;
// const j = year/100;


const sunday = 0
const monday = 1
const tuesday = 2
const wednesday = 3
const thursday = 4
const friday = 5
const saturday = 6



let today = {
    q: new Date().getDate(),
    m: new Date().getMonth() + 1,
    k: (new Date().getYear()) % 100,
    j: Math.floor((new Date().getYear()) % 100)
}

console.log(today)
let q = (today.q);
let m = (today.m);
let k = (today.k);
let j = (today.j);

math = () => {
    return Math.floor(((q + ((13 * (m + 1)) / 5) + k + (k / 4) + (j / 4) - (2 * j)) % 7));

}
console.log(math());
console.log(q)
console.log(k)
console.log(j)
console.log()
