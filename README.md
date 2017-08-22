# LaundryMap

<img src="https://media.giphy.com/media/bCvO8biVh8WyI/giphy.gif" width=300px placeholder="iron man">

Welcome to my LaundryMap! We offer the following services: `iron`, `mend`, `clean`. Unfortunately, we can only process individual items of clothing. We have not figured out how to process loads... ¯\\_(ツ)_/¯

## Iron
Write a function `iron` that removes the wrinkles (capital letters) from a *single* piece of clothing.

``` javascript
function iron(clothing_item){
    // code in here
    // return ironed_clothing_item;
}

// DRIVER CODE
iron("grEEn shIrt"); //=> "green shirt"
```

<details>
<summary>Solution (Click Here)</summary>

```js
function iron(clothing_item){
    return clothing_item.toLowerCase();
}

iron("grEEn shIrt"); //=> "green shirt"
```

</details>

#### Ironing Load - Sample Data

```
// input
var wrinkled_clothes = [
  "grEEn shIrt",
  "TubE sockS",
  "TIe Dye shIrt",
  "gray pants",
  "HAndKerChief",
  "whItE bLousE"
]

// expected output
var expected_ironed_clothes = [
  "green shirt",
  "tube socks",
  "tie dye shirt",
  "gray pants",
  "handkerchief",
  "white blouse"
]
```

<hr>
<hr>
<hr>

## Mend

Write a function `mend` that repairs/removes the holes ("/") in a *single* piece of clothing.

``` javascript
function mend(clothing_item){
    // code in here
    // return mended_clothing_item;
}

// DRIVER CODE
mend("tu/be socks"); //=> "tube socks"
```

<details>
<summary>Solution (Click Here)</summary>

```js
function mend(clothing_item){
    return clothing_item.replace("/", "");
}

mend("tu/be socks"); //=> "tube socks"
```

</details>

#### Mending Load - Sample Data
```
// input
var torn_clothes = [
  "knit swe/ater",
  "tu/be socks",
  "blue je/ans",
  "whit/e blouse"
]

// expected output
var expected_mended_clothes = [
  "knit sweater",
  "tube socks",
  "blue jeans",
  "white blouse"
]
```

<hr>
<hr>
<hr>

## Clean

Write a function `clean` that removes the dirt ("*") from a *single* piece of clothing.

``` javascript
function clean(clothing_item){
    // code in here
    // return clean_clothing_item;
}

clean("*blue shirt"); //=> "blue shirt"
```

<details>
<summary>Solution (Click Here)</summary>

```js
function clean(clothing_item){
    return clothing_item.replace("*", "");
}

clean("*blue shirt"); //=> "blue shirt"
```

</details>

#### Cleaning Load - Sample Data
```
var dirty_clothes = [
  "*blue shirt",
  "argyle s*ocks",
  "u*gly sweater",
  "brown plaid pa*nts",
  "paisl*ey dress shirt"
]

var expected_clean_clothes = [
  "blue shirt",
  "argyle socks",
  "ugly sweater",
  "brown plaid pants",
  "paisley dress shirt"
]
```

<hr>
<hr>
<hr>

## Core Challenge: Help us process loads!
Can you help the LaundryMap process an *entire* load of laundry, not just individual clothing items?

Given the inputs and expected output, specified above, how would you generate the `expected` output?

> **Hint**: You're going to need to loop (or iterate!) over the clothes in each load of laundry!

## Solutions

<details>
<summary>Using a painful manual approach (Click Here)</summary>

```js
function iron(clothing_item){
    return clothing_item.toLowerCase();
}

var output = [];

output.push( iron(wrinkled_clothes[0]) );
output.push( iron(wrinkled_clothes[1]) );
output.push( iron(wrinkled_clothes[2]) );
output.push( iron(wrinkled_clothes[3]) );
output.push( iron(wrinkled_clothes[4]) );
output.push( iron(wrinkled_clothes[5]) );

console.log("ironed:", output);
```

</details>

<details>
<summary>Using a `for` loop (Click Here)</summary>

```js
function iron(clothing_item){
    return clothing_item.toLowerCase();
}

var output = [];

for(var i=0; i<wrinkled_clothes.length; i++){
    output.push( iron(wrinkled_clothes[i]) );   
}

console.log("ironed:", output);
```

</details>

<details>
<summary>Using the `forEach` method (Click Here)</summary>

```js
function iron(clothing_item){
    return clothing_item.toLowerCase();
}

var output = [];

wrinkled_clothes.forEach(function process_item(item){
    output.push( iron(item) );   
})

console.log("ironed:", output);
```

</details>

<details>
<summary>Using the `map` method (Click Here)</summary>

```js
function iron(clothing_item){
    return clothing_item.toLowerCase();
}

var output = wrinkled_clothes.map(iron);

console.log("ironed:", output);
```

This works too:
```js
var output = wrinkled_clothes.map(function iron(clothing_item){
    return clothing_item.toLowerCase();
});

console.log("ironed:", output);
```

</details>

<hr>
<hr>
<hr>

## Bonus: Processing Batches
The Boss is thrilled we can `iron`, `mend`, and `clean` an entire load of clothing. Let's take it a step further -- let's wrap it all up in a single mega `doBatch` function that uses `iron`, `mend` and `clean` internally!

```js
// copy your `iron`, `mend`, `clean` functions up here (but do not modify!)

function doBatch(clothes){
    // your code here
}

doBatch(["pLe*A/tED SKirt", "f*AncY T/Ie"]);
//=> ["pleated skirt", "fancy tie"]
```

<details>
<summary>Solution (Click Here)</summary>

```js
function doBatch(clothes) {
    return iron(mend(clean(clothes)));
}

doBatch(["pLe*A/tED SKirt", "f*AncY T/Ie"]);
//=> ["pleated skirt", "fancy tie"]
```

</details>

#### Super Bonus: Batches of batches
How would you process *loads and loads* of customer clothes, all at once? (and return/output them all at once too!)

<details>
<summary>Solution (Click Here)</summary>

```js
function doBatches(loads_of_clothes) {
    return loads_of_clothes.map(function(clothes){
        return clothes.map(function(item){
            return iron(mend(clean(item)));
        });
    });
}

doBatches([
    ["pLe*A/tED SKirt", "f*AncY T/Ie"], // e.g. customer 1
    ["cumber*bund"],                    //      customer 2
    ["rEd tuX/edo", "red* soCks"]       //      customer 3
]);

//=> [
//     ["pLeated skirt", "fancy tie"],
//     ["cumberbund"],
//     ["red tuxedo", "red socks"]
//   ]
```

</details>

<hr>
<hr>
<hr>

## Stretch: Professional Sorts!
The Boss thinks it will make us look more professional if we sort the laundry alphabetically before returning it to the customer. Without modifying any of the functions you created above, how might you accomplish this goal?

<details>
<summary>Solution (Click Here)</summary>

```js
output.sort(); // easy!

console.log(output);
```

</details>


#### Mega-Stretch: Numeric Sort
Now sort it by the length of the string, longest to shortest. Like a tidy pyramid of clothes!

<details>
<summary>Solution (Click Here)</summary>

```js
output.sort(function(a,b){
    return a.length - b.length;
});

console.log(output);
```

</details>
