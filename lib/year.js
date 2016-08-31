module.exports.getYear = () => {
  return (new Date().getYear()%100)
}

module.exports.getYearJ = () => {
  return Math.floor((((new Date().getYear()-100)+2000)/100))
}
