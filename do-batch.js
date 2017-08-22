var batch_input = [
  [ "pLe*A/tED SKirt", "f*AncY T/Ie" ],
  ["cumber*bund"],
  ["rEd tuX/edo", "red* soCks"]
];

/* TODO: copy `clean` function here */
/* TODO: copy `mend` function here */
/* TODO: copy `iron` function here */


/* YOUR CODE HERE */
function doBatch(clothes){
return clothes.map((x)=>{
  return clean(mend(iron(x)))
});
}
console.log(doBatch(batch_input));

/* PRINT RESULT */
console.log("--> Finished running do-batch.js");

//long-short
const stringSort = (clothe)=>{
return clothe.sort((a,b)=>b.length-a.length);
};
console.log(stringSort(doBatch(batch_input)));




//how to 


