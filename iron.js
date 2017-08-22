var wrinkled_clothes = [
  "grEEn shIrt",
  "TubE sockS",
  "TIe Dye shIrt",
  "gray pants",
  "HAndKerChief",
  "whItE bLousE"
];

/* YOUR CODE HERE */
function iron(clothing_item){
 return clothing_item.map((x)=>x.toLowerCase())
}
console.log(iron(wrinkled_clothes));
/* PRINT RESULT */
console.log("--> Finished running iron.js");
// let output = dirty_clothes.filter(iron);

