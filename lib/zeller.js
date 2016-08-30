/***
 * h = calculated day
 * q = day (q for day??? don't ask me... ask Dr. Zeller....)
 * m = month
 * y = year
 * note: calculations must be in integers - do not use floats or it will fail.
 *
 *      /    |(m+1)*26|       | y |       | y |   | y |    \
 * h = | q + |--------| + y + |---| + 6 * |---| + |---| - 1 | mod 7
 *      \    |   10   |       | 4 |       |100|   |400|    /
 *
 ***/
function zeller(month, day, year) /* returns 0-6 where 0=sunday, 1=monday, etc....*/ {
    if (month < 3) {
        month += 12;
        year -= 1;
    }
    var h = (day + parseInt(((month + 1) * 26) / 10) + year + parseInt(year / 4) + 6 * parseInt(year / 100) + parseInt(year / 400) - 1) % 7;
    return h;
}
console.log("hello")

module.exports = {
    zeller
}
