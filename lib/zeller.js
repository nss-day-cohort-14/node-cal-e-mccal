module.exports.math = (dateObj) => {
let month = dateObj.month
let year = dateObj.year

let q = 1
let m = getMonth(month)
let y = getYear(year)


const zeller =
((q + Math.floor((13 * (m + 1)) / 5) + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400)) + 6) % 7

return zeller;
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
