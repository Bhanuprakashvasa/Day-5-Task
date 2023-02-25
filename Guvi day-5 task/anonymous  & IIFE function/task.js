
//1.Print odd numbers in an array

//anonymus function

const odd = function(arr) {
  arr.forEach(function(num) {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

//ex:

odd([1, 2, 3, 4, 5]); 

// Output: 1 3 5

//IIFE function
(function(arr) {
    arr.forEach(function(num) {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  })([1, 2, 3, 4, 5]); 
  
  // Output: 1 3 5

  //2.Convert all the strings to title caps in a string array
//anonymus function

const Title = function(arr) {
    const Array = arr.map(function(str) {
      return str.charAt(0).toUpper() + str.slice(1).toLower();
    });
    return Array;
  };
  
  // Example:


  const myArray = ["hello world", "foo bar", "lorem ipsum"];
  const Array = Title(myArray);
  console.log(Array); 
  
  // Output: ["Hello World", "Foo Bar", "Lorem Ipsum"]

  //IIFE function

  (function(arr) {
    const Array = arr.map(function(str) {
      return str.charAt(0).toUpper() + str.slice(1).toLower();
    });
    console.log(Array);
  })(["hello world", "foo bar", "lorem ipsum"]); 
  
  // Output: ["Hello World", "Foo Bar", "Lorem Ipsum"]
  

  //3.Sum of all numbers in an array
//anonymus function

const array= function(nums) {
    let sum = 0;
    nums.forEach(function(num) {
      sum += num;
    });
    return sum;
  };
  
  // Example :
  const arr = [4,6,2,8];
  const sum = array(arr);
  console.log(sum); 
  
  // Output: 20
  

  //IIFE function

  (function(nums) {
    let sum = 0;
    nums.forEach(function(num) {
      sum += num;
    });
    console.log(sum);
  })([4,6,2,8]); 
  
  // Output: 20


  //4.Return all the prime numbers in an array
  //anonymus fun 

  {
    const prime = function(nums) {
    const Arr = nums.filter(function(num) {
      if (num <= 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    });
    return Arr;
  };
  
  // Example :
  const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const Arr = prime(myArray);
  console.log(Arr); 
}
// Output: [2, 3, 5, 7]

  

//IIFE 

  (function(nums) {
    const prime = nums.filter(function(num) {
      if (num <= 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    });
    console.log(prime);
  })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); 
  
  // Output: [2, 3, 5, 7]

  //5.Return all the palindromes in an array
//anonymus
{
const palindrome = function(strs) {
    const array = strs.filter(function(str) {
      const reversedStr = str.split('').reverse().join('');
      return str === reversedStr;
    });
    return array;
  };
  
  // Example:
  const arr = ['racecar', 'banana', 'level', 'apple', 'deified'];
  const array = palindrome(arr);
  console.log(array); 
  
  
  // Output: ['racecar', 'level', 'deified']

}
  
  //IFEE

  (function(strs) {
    const palindrome = strs.filter(function(str) {
      const reversedStr = str.split('').reverse().join('');
      return str === reversedStr;
    });
    console.log(palindrome);
  })(['racecar', 'banana', 'level', 'apple', 'deified']); 
  
  // Output: ['racecar', 'level', 'deified']
  
  //6.Return median of two sorted arrays of the same size.

  //a.

  const find = function(nums1, nums2) {

    const merged = nums1.concat(nums2).sort((a, b) => a - b);
    
    
    const mid = Math.floor(merged.length / 2);
    
  
    if (merged.length % 2 === 0) {
      return (merged[mid] + merged[mid - 1]) / 2;
    } else {
      return merged[mid];
    }
  };
  
  // Example:
  const nums1 = [1, 3, 5];
  const nums2 = [2, 4, 6];
  const median = find(nums1, nums2);
  console.log(median); 
  
  // Output: 3.5
  
  //b.
{
  const find = (function(nums1, nums2) {
    
    const merged = nums1.concat(nums2).sort((a, b) => a - b);
    
  
    const mid = Math.floor(merged.length / 2);
    

    if (merged.length % 2 === 0) {
      return (merged[mid] + merged[mid - 1]) / 2;
    } else {
      return merged[mid];
    }
  })([1, 3, 5], [2, 4, 6]);
  
  console.log(find); 
  
  // Output: 3.5
  
}


//7.Remove duplicates from an array

//a.
{
const arr = [1, 2, 3, 3, 4, 5, 5];
const unique= Array.from(new Set(arr));
console.log(unique); 

// Output: [1, 2, 3, 4, 5]

}


//b.

const unique = (function(arr) {
    return Array.from(new Set(arr));
  })([1, 2, 3, 3, 4, 5, 5]);
  
  console.log(unique); 
  
  // Output: [1, 2, 3, 4, 5]
  

  //8.Rotate an array by k times
//a.
{
const arr = [1, 2, 3, 4, 5];
const v = 2;


for (let i = 0; i < v; i++) {
  arr.unshift(arr.pop());
}

console.log(arr);

// Output: [4, 5, 1, 2, 3]
}

//b.

const A = (function(arr, k) {
   
    for (let i = 0; i < k; i++) {
      arr.unshift(arr.pop());
    }
    
    return arr;
  })([1, 2, 3, 4, 5], 2);
  
  console.log(A);
  
  // Output: [4, 5, 1, 2, 3]
  