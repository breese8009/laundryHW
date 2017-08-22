var dirty_clothes = [
  "*blue shirt",
  "argyle s*ocks",
  "u*gly sweater",
  "brown plaid pa*nts",
  "paisl*ey dress shirt"
];

/* YOUR CODE HERE */
function clean(clothing_item){
  return clothing_item.map((s)=>{
  		return s.split``.filter((x)=>x!=="*").join``;
  });
}

/* PRINT RESULT */
console.log("--> Finished running clean.js");



// let output = expected_clean_clothes=dirty_clothes.filter(clean);

