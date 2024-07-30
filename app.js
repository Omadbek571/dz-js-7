// 1-savol

// let num = +prompt("Iltimos son kiriting");

// function func(num) {
//     let natija = Math.sqrt(num)
//     return natija
// }

// console.log(func(num));

// 2-savol

// let a = +prompt("iltimos 1 son kiriting");
// let b = +prompt("iltimos 2 son kiriting");

// function func(a, b) {
//     let natija = a - b
//     return natija
// }

// let res = func(a, b)
// console.log(res);


// 3-savol

// let str = prompt("Iltimos soz kiriting")
// let num = +prompt("Iltimos son kiriting");

// function func(str, num) {
//     let res = ""

//     for (let i = 0; i < num; i++) {
//         res += str
//     }

//     return res
// }


// let natija = func(str, num)
// console.log(natija);


// 4-savol

// let num = +prompt("Iltimos son kiriting");

// function func(num) {
//     let res = num ** 3

//     return res
// }

// let natija = func(num)
// console.log(natija);


// 5-savol

// let a = +prompt("Iltimos 1 soni kiriting");
// let b = +prompt("Iltimos 2 soni kiriting");

// function func(a, b) {
//     return Math.floor(a / b)
// }

// let natija = func(a, b)
// console.log(natija);


// 6-savol

// let yil = +prompt("Iltimos yil kiriting");

// function func(yil) {
//     return Math.ceil(yil / 100)
// }

// let natija = func(yil)
// console.log(natija);


// 7-savol

// let num = +prompt("Iltimos son kiriting");

// function func(num) {
//     if (num === 0 || num === 1) {
//         return 1;
//     }

//     return num * func(num - 1);
// }

// let natija = func(num);
// console.log(natija);


// 8-savol

// function countVowels(str) {
//     const vowels = 'aeiouAEIOU';
//     let count = 0;

//     for (let char of str) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countVowels('Hello World'));
// console.log(countVowels('JavaScript is fun'));


// 9-savol

// let str = "salom"
// let num = 2;

// function func(str, num) {
//     if (str.length <= num) {
//         return str;
//     }

//     let res = ""

//     for (let i = num-1; i < str.length; i++) {
//         res += str[i]

//     }

//     return res
// }

// let natija = func(str, num)
// console.log(natija);


// 10 savol

let str = "salom"

function func(str) {
    let res1 = str.join("")
    for (let i = 0; i < res1.length; i++) {
        if (typeof i == "number") {
            return true
        } else {
            return false
        }
    }
}



// ?????

// 11-savol

// let num1 = +prompt("Iltimos son yozing");
// let num2 = +prompt("Iltimos yozgan sonizdi darajasini yozing");

// function func(num1, num2) {
//     let res = num1 ** num2

//     return res
// }

// let natija = func(num1, num2)
// console.log(natija);

// 12-savol

// let str = prompt("Iltimos sozlar yozing probelar bilan")

// function func(str) {
//     return str.split(" ").join("")
// }

// let natija = func(str)
// console.log(natija);

// 13-savol

// let str1 = "salom"
// let str2 = "salom"

// function func(str1 , str2) {
//     let birlashtiruv = ""
//     if (typeof str1 == "string" && typeof str2 == "string") {
//         birlashtiruv += str1 + str2
//     }else{
//         birlashtiruv += "siz yozgan sozda boshqa tip mavjud"
//     }

//     return birlashtiruv
// }

// let natija = func(str1, str2)
// console.log(natija);

// 14-savol


// let num1 = +prompt("Iltimos boshlanish soni kiriting");
// let num2 = +prompt("Iltimos tugash soni kiriting");

// function func(num1, num2) {
//     let natija = Math.floor(Math.random() * (num2 - num1 + 1) + num1)

//     return natija
// }

// let res = func(num1, num2)
// console.log(res);

// 15-savol

// let str = "salom"

// function func(str) {
//     let strBirinchisi = ""
//     let natija = str.charAt(0)

//     let natija2 = strBirinchisi = natija

//     let natija3 = natija2.toLocaleUpperCase()

//     return natija3

// }

// let res = func(str)
// console.log(res);





// let str1 = "salom"
// let res2 = str.charAt(0)
// console.log(res2);
// let natija1 = str.toLocaleUpperCase()

// console.log(natija1);


// Massivlarga oid masalalar

// 1-savol

// let arr = [1,2,3,4,5,6,7,8,9,10];

// function func(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }

//     return sum
// }

// let natija = func(arr)
// console.log(natija);

// 2-savol

// let arr = [1,2,3,4,5,6,7,8,9,10];

// function func(arr) {
//     let res = arr[0]

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > res) {
//             res = arr[i]
//         }
//     }

//     return res
// }

// let natija = func(arr)
// console.log(natija);

// 3-savol

// let arr = [1,2,3,4,5,6,7,8,9,10]

// function func(arr) {
//     let newArr = []
//     for (let i = arr.length - 1; i >= 0; i--) {
//         newArr.push(arr[i])
//     }

//     return newArr
// }

// let natija = func(arr)
// console.log(natija);

// 4-savol
// let arr = [-1, -2, -3, 1, 2, 3]

// function func(arr) {
//     let newArr = []
//     for (const iterator of arr) {
//         if (iterator > 0) {
//             newArr.push(iterator)
//         }
//     }

//     return newArr
// }
// let natija = func(arr)
// console.log(natija);

// 5-savol

// let arr = [1,2,3,4,5,6,7,8,9,10]

// function func(arr) {
//     let newArr = []

//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i] * arr[i])

//     }

//     return newArr
// }
// let natija = func(arr)
// console.log(natija);


// 6-savol

// let arr = [1,1,3,4,5,6,7,8,9,2,2]

// function func(arr) {
//     let res = []

//     for (const iterator of arr) {
//         if (!res.includes(iterator)) {
//             res.push(iterator)
//         }
//     }

//     return res
// }

// console.log(func(arr));

// 7-savol

// let arr1 = [1,2,3]
// let arr2 = [1,2,3]

// function func(arr1, arr2) {
//     let res = arr1.concat(arr2)

//     return res
// }

// let natija = func(arr1, arr2)
// console.log(natija);

// 8-savol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function func(arr) {
//     let newArr = []
//     for (const iterator of arr) {
//         if (iterator % 2 == 1) {
//             newArr.push(iterator)
//         }
//     }

//     return newArr
// }

// let natija = func(arr)
// console.log(natija);

// 9-savol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let num = +prompt("Iltimos son kiriting");

// function func(arr, num) {
//     let newArr = [];
//     for (const iterator of arr) {
//         newArr.push(iterator + num);  
//     }
//     return newArr;
// }

// let natija = func(arr, num);
// console.log(natija);


// 10-savol

// let arr = [1,2,3,4,5,6,7,8,9,10];

// function func(arr) {
//     let res = arr[0]

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < res) {
//             res = arr[i]
//         }
//     }

//     return res
// }

// let natija = func(arr)
// console.log(natija);
