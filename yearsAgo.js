function yearsAgo(pyear){
var date = new Date();
var year = date.getFullYear();
var ago = year - pyear;
 return ago;
}
console.log(yearsAgo("2006"));
