
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

function likes(names) {
  let result = "no one likes this'"
  if (names.length == 1)
    result = `${names[0]} likes this`
  if (names.length == 2)
    result = `${names[0]} and ${names[1]} like this'`
  if (names.length == 3)
    result = `${names[0]}, ${names[1]} and ${names[2]} like this`
  if (names.length == 4)
    result = `${names[0]}, ${names[1]} and ${names.length-2} others like this`;

    return result 
  // TODO
}



// Find the smallest integer in the array
class SmallestIntegerFinder {
 
  findSmallestInt(args){
    console.log(args);

    let s = args[0]
    for (let i = 0; i < args.length; i++) {
       
      if(s > args[i+1])
        s=args[i+1]
    }
    return s
  }
}

//  Stop gninnipS My sdroW!
function spinWords(string) {
  console.log("comm");

  let str = string.split(" ")
  console.log(str);

  for (let i = 0; i < str.length; i++) {
    if (str[i].length < 5)
      console.log(str[i]);

    str[i] = str[i].split("").reverse().join("")
  }
  return str.join(" ")
  //TODO Have fun :)
}
console.log(spinWords("hi wht abcdefG goooo go"))


// Persistent Bugger.
function persistence(num) {
  let result = num
  let sum = 0
  while (result > 9) {
    sum++
    console.log("while");
    
    
    let num = result.toString()
    let numb = 1
    console.log(numb);

    num = num.split("")
    console.log(num);

    for (let i = 0; i < num.length; i++) {
      console.log("run", i);
      numb *= Number(num[i])
      console.log(numb)
    }
   
    result = numb

  }
  console.log("result == ", num ,"sum == ",sum);

  return sum

}
console.log(
  persistence(39)
);

function getMiddle(s) {
  if (s.length == 0)
    return s
  if (s.length % 2 == 0) {
    let i = s.length / 2
    return s.slice(i, i)
  }

  //Code goes here!
}

console.log(
  getMiddle("c")
);



// Sum of Digits / Digital Root
function digital_root(n) {
  let result = n
  while (result > 9) {
    console.log("while");
    
    let sum = 0
    let num = result.toString()
    let numb = 0
    console.log(numb);

    num = num.split("")
    console.log(num);

    for (let i = 0; i < num.length; i++) {
      console.log("run", i);

      numb = parseInt(num[i])
      sum += numb
      console.log(numb)
    } 
  
    result = sum
      if(result < 10)
      break

  }
  console.log("result", result);

  return result

}
//   console.log("result == ", num ,"sum == ",sum);

//   return sum

// }
console.log(
  persistence(39)
);

// Decode the Morse code
decodeMorse = function(morseCode){
  let str = '';
  let morseCodeWords = morseCode.split('   ');
  for (let i in morseCodeWords) {
    let morseCodeArray = morseCodeWords[i].split(' ');
    for (let j in morseCodeArray) {
      if (MORSE_CODE[morseCodeArray[j]] !== undefined) {
        str += MORSE_CODE[morseCodeArray[j]];
      }
    }
    str += ' ';
  }
  str = str.trim();  
  return str;
}
// Hello, Name or World!
function hello(name  = "World") {
  if(name == "")
    name = "World"
   let n = name.charAt(0).toUpperCase() + name.substr(1).toLowerCase()

  return `Hello, ${n}!`
  //your code here
}

decodeMorse = function (morseCode) {
  let decodeString = '';
  let morseCodeWords = morseCode.split('   ');
  for (let i in morseCodeWords) {
    let morseCodeArray = morseCodeWords[i].split(' ');
    for (let j in morseCodeArray) {
      if (MORSE_CODE[morseCodeArray[j]] !== undefined) {
        decodeString += MORSE_CODE[morseCodeArray[j]];
      }
    }
    decodeString += ' ';
  }
  decodeString = decodeString.trim();
  return decodeString;
}
console.log(
  decodeMorse('.... . -.--   .--- ..- -.. .')
);



// function nextBigger(n){
//   let num = -1

//   points.sort(function(a, b){return a-b}); 
//   for (let i = 0; i < n.length; i++) {
//     newNum  = 
//   }
//   return num
//   //your code here
// }



function pigIt(str) {
  let words = str.split(' ');

  // for (let i = 0; i < str.length; i++) {

  // let res = words[i].slice(1)+words[i].slice(0,1)
  //  words[i]=res
  // }
  // //  let end = words[words.length-1].slice(1)+words[words.length-1].slice(0,1)
  // //  words[words.length-1]=end 

  // console.log(
  //   words[0]
  // );

  let a = words.join('ay ')

  let end = str.charAt(str.length - 1)
  console.log(end);

  if (end === "?" || end === "!") {
    console.log("chaim");

  }
  else {
    a += "ay"
  }
  console.log(a);
  return a


  //Code here
}

pigIt("Hii hello man im Gogramen")
pigIt("Hii hello man im Gogramen ?")

function solution(roman) {
  console.log("solution(roman)");

  let result = 0
  var romNumerals = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "IV": 4,
    "V": 5,
    "I": 1,
  }


  for (let i = 0; i < roman.length; i++) {
    if (romNumerals[roman[i]] == "I" && romNumerals[roman[i + 1]] == "V") {
      result += romNumerals["IV"]
      continue
    }
    console.log(romNumerals[roman[i]]);
    result += romNumerals[roman[i]]
    console.log(result);
  }


  return result
  // complete the solution by transforming the 
  // string roman numeral into an integer  
}

solution('XXI')


// function accum(s) {
//   let myStr = ""
//   let upper = ''
//   for (let n = 0; n < s.length; n++) {
//     // if (s[n] != s[n + 1]){
//     if (n < 1) {
//       myStr = s[n]
//       upper += myStr.charAt(0).toUpperCase()

//     }
//     else {
//       myStr = s[n].repeat(n)
//       upper += myStr.charAt(0).toUpperCase() + myStr.toLowerCase(1);
//     }
//     if (n < s.length - 1) {
//       upper += "-"
//     }
//     console.log(upper);
//     // }
//   }
//   return upper
//   // your code
// }



// function solution(number) {
//   let sum = 0
//   for (let num = 0; num < number; num++) {
//     console.log("hi");

//     if (num > 0) {
//       // if (num % 3 == 0 && num % 5 == 0)
//       // sum += num
//       // continue
//       if (num % 3 == 0) {


//         sum += num
//         continue
//       }
//       if (num % 5 == 0) {
//         sum += num
//         continue
//       }
//     }
//   }
//   return sum
// }

// function solution(number) {
//   let sum = 0
//   for (let num = 0; num < number; num++) {


//     if (num > 0) {

//       if (num % 3 == 0) {


//         sum += num
//         continue
//       }
//       if (num % 5 == 0) {
//         sum += num
//         continue
//       }
//     }
//   }
//   return sum
// }


// console.log(

//   solution(20)
// );

// function highAndLow(numbers) {
//   let arrSort = numbers.split(" ").sort(function (a, b) { return a - b })
//   let arr = arrSort[0] + " " + arrSort[arrSort.length - 1]

//   return arr
//   // ...
// }








// console.log("hi chaim");

// function getAverage(marks) {
//   let coun = 0;
//   for (let index = 0; index < marks.length; index++) {
//     coun += marks[index]

//   }
//   return coun / marks.length
//   // your code
// }

// console.log(getAverage([1, 2, 3, 4, 5]));
// let som = []

// // function divisors(integer) {
// //   let limit = Math.Sqrt(integer);
// //   console.log(limit);

// //   let divis = 2
// //   while (divis <= limit) {
// //     if (integer % divis == 0) {
// //       som.push(integer / divis)
// //     }
// //     divis++
// //   }
// //   console.log(som);

// //   return som
// // };


// // divisors(15)
// // divisors(12)
// // divisors(13)

// function nextId(ids) {
//   let arr = ids.sort(function (a, b) { return a - b });
//   let num

//   for (let i = 0; i < ids.length; i++) {

//     if (arr[i] != i) {
//       return i
//     }
//     num = i

//   }
//   //this will be awesome!
//   return num + 1;
// }

// console.log(
//   nextId([10, 1, 0, 3, 4, 7, 8, 9, 2]),
//   nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
//   nextId([0, 1, 2, 3, 5])
// );


// function greet(name) {
//   let n = name.charAt(0).toUpperCase() + name.substr(1).toLowerCase()
//   return `Hello, ${n} how are you doing today?"`

//   //your code here
// }
// console.log(
//   (greet("chTaim")));




// function getPlanetName(id) {
//   var name = "";
//   switch (id) {
//     case 1:
//       name = 'Mercury';
//       break;
//     case 2:
//       name = 'Venus';
//       break;
//     case 3:
//       name = 'Earth';
//       break;
//     case 4:
//       name = 'Mars';
//       break;
//     case 5:
//       name = 'Jupiter';
//       break;
//     case 6:
//       name = 'Saturn';
//       break;
//     case 7:
//       name = 'Uranus';
//       break;
//     case 8:
//       name = 'Neptune';
//       break;

//   }
//   return name;
// }

// console.log(
//   getPlanetName(2)
// );


// function positiveSum(arr) {
//   let sum = 0
//   for (let num of arr) {
//     if (num < 0)
//       sum += num
//   }
//   return sum

// }

// function findOdd(A) {
//   let n
//   let odd
//   for (let i = 0; i < A.length; i++) {
//     n = 0
//     for (let j = 0; j < A.length; j++) {
//       if (A[j] == (A[i])) n++
//     }
//     if (n % 2 != 0)
//       return A[i]
//     console.log(n, A[i])

//   }
//   //happy coding!
//   return odd;
// }


// function addBinary(a, b) {
//   return (a + b).toString()
// }

// console.log(

//   addBinary(1, 77));

// function findOutlier(integers) {

//   let arr = integers.filter(num => num % 2 == 0)
//   let odd = integers.filter(num => num % 2 == 1)
//   console.log(arr);
//   if (arr.length < odd.length)
//     return arr
//   else return odd

//   //your code here
// }

// findOutlier([2, 3, 4, 56, 7, 8, 9, 8])

// function repeatStr(n, s) {
//   let a = ""
//   for (let i = 0; i < n; i++) {
//     a += s

//   }

//   console.log(a);

//   return a;
// }

// repeatStr(3, 'chaim')

// function isDivisible(n, x, y) {

//   if (n % x == 0 && n % y == 0)
//     return true
//   return false
// }

// console.log(isDivisible(3, 7, 4), isDivisible(12, 3, 4));

// function longestRepetition(s) {
//   let count = 0
//   let longest
//   let arr = ["", 0]
//   for (let i = 0; i < s.length; i++) {
//     count++
//     if (s[i] != s[i + 1]) {
//       count = 0
//     }
//     if (s[i] == s[i + 1]) {

//       longest = s[i]
//       console.log(longest, count);
//     }

//     if (arr[1] < count) {
//       arr[1] = count
//       arr[0] = longest

//     }

//   }
//   // return num.toString()
//   //   console.log(arr);

//   //     return arr;
// }

// longestRepetition("bbbaaabaaaa")

// function arrayPlusArray(arr1, arr2) {
//   let sum = 0
//   let arrCon = arr1.concat(arr2)
//   console.log(arrCon);

//   for (num of arrCon) {
//     sum += num
//   }
//   console.log(sum);

//   return sum; //something went wron
// }

// arrayPlusArray([1, 2, 3], [4, 5, 6])