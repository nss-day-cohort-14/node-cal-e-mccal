module.exports.math = (dateObj) => {

  let month = Number(dateObj.month)
  let year = Number(dateObj.year)

let q = 1  /////bc first day of the month
let m = module.exports.getMonth(month)
let y = module.exports.getYear(month, year)


const zeller =
((q + Math.floor((13 * (m + 1)) / 5) + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400)) + 6) % 7

return zeller;
//////0 is sunday, sat is 6///////
}

module.exports.getMonth = (month) => {
  if (month < 3){
    return (month + 12)
  } else {
    return month
  }
};


module.exports.getYear = (month, year) => {
  if (month < 3) {
    return year - 1
  } else {
      return year
    }
  }
