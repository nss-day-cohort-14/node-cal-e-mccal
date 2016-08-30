// const h = dayOfWeek;
// const q = datOfMonth;
// const m = month;
// const k = yearOfCentury;
// const j = year/100;

let today= {
  q: 30,
  m: 8,
  k: 2016%100,
  j: 20
}

let q = (today.q);
let m = (today.m);
let k = (today.k);
let j = (today.j);

math = () => {
  return Number(((q + ((13*(m+1))/5) + k + (k/4) + (j/4) - (2*j))%7));
}
