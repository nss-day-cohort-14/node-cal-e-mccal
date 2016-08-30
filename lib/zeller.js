const today = {
    q: 30,
    m: 8,
    k: 2016 % 100,
    j: 20
}

const q = (today.q) //day of the month
const m = (today.m) //is the month
const k = (today.k) //year of the century
const j = (today.j) //zero based century


math = () => {

    console.log((q + ((13 * (m + 1)) / 5) + k + (k / 4) + (j / 4) - (2 * j)) % 7)
}
math()


module.exports = {
    math
}
