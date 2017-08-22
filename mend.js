var torn_clothes = [
  "knit swe/ater",
  "tu/be socks",
  "blue je/ans",
  "whit/e blouse"
];

/* YOUR CODE HERE */
function mend(clothing_item){
return clothing_item.map((s)=>{
		return s.split``.filter((x)=>x!=="/").join``;
});
}
console.log(mend(torn_clothes));

/* PRINT RESULT */
console.log("--> Finished running mend.js");

// let output = torn_clothes.filter(mend);