// const h = dayOfWeek;
// const q = datOfMonth;
// const m = month;
// const k = yearOfCentury;
// const j = year/100;

let today= {
  q: new Date().getDate(),
  m: new Date().getMonth()+1,
  k: (new Date().getYear())%100,
  j: Math.floor((new Date().getYear())%100)
}

let q = (today.q);
let m = (today.m);
let k = (today.k);
let j = (today.j);

math = () => {
  return Number(((q + ((13*(m+1))/5) + k + (k/4) + (j/4) - (2*j))%7));
}
console.log(math());
