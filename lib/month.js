const {getMonth} = require("./zeller");

module.exports.checkMonth = (month) => {return getMonth(month)}

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

  return `${days[0]}${space}${days[1]}${space}${days[2]}${space}${days[3]}${space}${days[4]}${space}${days[5]}${space}${days[6]}${space}`
}
