const {getMonth, getYear, math} = require("./zeller");

module.exports.checkMonth = (month) => {return getMonth(month)}
module.exports.checkYear = (month, year) => {return getYear(month, year)}

module.exports.monthToString = (month) => {

let monthObj = {
  13: 'January',
  14: 'February',
  3: 'March',
  4:'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December'
}

return monthObj[month]
}

module.exports.setHeader = () =>{
  let space = " ";
  let days = {
     0: "Su",
     1: "Mo",
     2: "Tu",
     3: "We",
     4: "Th",
     5: "Fr",
     6: "Sa"
   }

  return `${days[0]}${space}${days[1]}${space}${days[2]}${space}${days[3]}${space}${days[4]}${space}${days[5]}${space}${days[6]}${space}\n`
}


module.exports.setDays = (days) =>{
  let space = " ";


switch (days) {
  case 31 : {
  let daysArray = [];
    for (let i = 1; i < 32; i++){
      daysArray.push(i + space)
    } return daysArray
  }
  case 30 : {
  let daysArray = [];
    for (let i = 1; i < 31; i++){
      daysArray.push(i + space)
    } return daysArray
  }
  case 29 : {
  let daysArray = [];
    for (let i = 1; i < 30; i++){
      daysArray.push(i + space)
    } return daysArray
  }
  case 28 : {
  let daysArray = [];
    for (let i = 1; i < 29; i++){
      daysArray.push(i + space)
    } return daysArray
  }
}
}

module.exports.startOnCorrectDay = (dateObj) => {
  let month = Number(dateObj.month)
  let year = Number(dateObj.year)
  switch (math(dateObj)){
    case 0 : {return (" " + 1) } /////Sunday
    case 1 : {return ("    " + 1) } /////Monday
    case 2 : {return ("       " + 1) } /////Tuesday
    case 3 : {return ("          " + 1) } /////Wednesday
    case 4 : {return ("             " + 1)} /////thursday
    case 5 : {return ("               " + 1) } /////Friday
    case 6 : {return ("                   " + 1) } /////Saturday
  }
}


module.exports.findSplit = (characters) => {
  if (characters.length > 20) {
    let trimmed  = characters.charAt(20)
    return (trimmed)
  }
}

module.exports.trimLine = (characters) => {
  if (characters.length > 20) {
    let trimmed  = characters.indexOf(20)
    let newString = characters.split(trimmed )
    let joined = newString.join()
    return (joined)
  }
}
