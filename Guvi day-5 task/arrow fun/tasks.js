

//a.Print odd numbers in an array


const arr = [1, 2, 3, 4, 5];
arr.forEach(num => {
  if (num % 2 !== 0) {
    console.log(num);
  }
});


// Output: 1, 3, 5


//b.Convert all the strings to title caps in a string array


{function titleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  
  function convert(arr) {
    arr.forEach((str, i) => {
      arr[i] = titleCase(str);
    });
  }
  
  const arr = ["the quick brown fox", "jumps over", "the lazy dog"];
  convert(arr);
  console.log(arr); 
  
  
  // Output: ["The Quick Brown Fox", "Jumps Over", "The Lazy Dog"]
  }
  

  //c.Sum of all numbers in an array

{
    
function add(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
    sum += arr[i];
    }
}
return sum;
}

const arr = [1, 2, 3, 4, 5];
const sum = add(arr);
console.log(sum); // Output: 15
}
  