//////FIND EVEN NUMBER FROM AN ARAY
// const arr=[1,5,8,9,10,10,20];
// const result =arr.filter((item)=>item%2===0)
// console.log(result)//////result will come in array
//--------------------------------------------------------

//////FIND BIGGER NUMBER FROM AN ARAY
// let arr=[3,6,5,6,7,8,9]
//  let a=arr.reduce((acc,cur)=>Math.max(acc,cur));
//  let a=arr.reduce((acc,cur)=>(acc>cur?acc:cur)); //BIGGER
// let a=arr.reduce((acc,cur)=>(acc<cur?acc:cur));  //SMALLER
// console.log(a)
//--------------------------------------------------------

//////FIND BIGGER NUMBER FROM AN ARAY ---BY USING FORECH METHOD
// const arr = [1,12,2,5,9];
// let max=0;
// arr.forEach((Element)=>{max=Element>max?Element:max})
// console.log(max)
//--------------------------------------------------------

//////FIND BIGGER NUMBER FROM AN ARAY--BY USING FOR LOOP
// const arr = [1,12,2,5,9];
// let max=0;
// for (i=0;i<=arr.length;i++){
//     if (arr[i]>max){
//        max=arr[i]
//     }
//   }
// console.log(max)
//--------------------------------------------------------

//////FIND REPEATED NUMBER FROM AN ARAY
// const arr=[4,2,6,6,3,3,6,,6,6,6,6,6,5]
// const repeatNum=arr.filter((item)=>item==6).pop()
// const repeated=arr.filter((item)=>item==6).length
// console.log("The Number",repeatNum ,"is Repeted", repeated," Times ")
//--------------------------------------------------------

//////REMOVE REPEATED NUMBER FROM AN ARAY       O/P  => 
// const arr=[4,2,6,6,3,3,6,,6,6,6,6,6,5]
// const noRepeat=arr.filter((item,index)=>arr.indexOf(item)==index)
// console.log(noRepeat)
//--------------------------------------------------------

//////REMOVE REPEATED NUMBER FROM AN ARAY
// const arr=[4,2,6,6,3,3,6,,6,6,6,6,6,5]
// let noRepeat=[...new set(arr)]
// console.log(noRepeat);
//--------------------------------------------------------

//Replacing or adding new element to array.

// const array1=["pune","nanded","hyderabad"]
// array1[0]="Mumbai"
// array1.shift()
// array1.unshift("Mumbai")
// array1.push("Mumbai")
// array1.splice(2,0,"Mumbai","Goa",20)
// console.log(array1)
//--------------------------------------------------------

// find modulus of 5 and add in new array   === OUTPUT ==> [ 55, 65, 70 ]
// const array14=[1,2,34,55,65,70,23]
// const newArr=[]
// array14.forEach((item)=>
// item%5===0 && newArr.push(item))
// console.log(newArr)
//-------------------------------------------------------------------------------------////


//Concating 2 arrays in between        ====OUTPUT ==>[ 'A', 'B', 'X', 'Y', 'Z', 'C' ]
// const array1=["A","B","C"]
// const array2=["X","Y","Z"]
// array1.splice(2,0,...array2)
// console.log(array1);

//-------------------------------------------------------------------------------------////
//// merging nested array to single array    ====OUTPUT ==> [ 'A', 'B', 'X', 'Y', 'Z', 'C' ]
// const output=["A","B",["X",["Y"]],"Z","C"]
// console.log(output.flat(Infinity))


//-------------------------------------------------------------------------------------////
////// FINDING BIGGEST WORD AND LENGTH OF WORD
// let string1="Hello PDAC I am from Maharashtra"
// let result1=(string1.split(" "))
// var wordlength=0;
// var word=""
// for (var i=0;i<result1.length;i++){
//     if(wordlength<result1[i].length){
//         word=result1[i]
//         wordlength=result1[i].length
//     }
// }
// console.log("Biggest word is "+word+ " And word Length is " +wordlength);
//--------------------------------------------------------


///// FINDING BIGGEST WORD
// let str = "I AM  FROM NANDED MAHARASHTRA INDIA";
// let b = str.split(" ");
// var c=""
// for (i=0;i<=b.length;i++){
//   if (b[i]>b[i+1]){
//     c=b[i]
//   }
// }
// console.log(c)
//--------------------------------------------------------

/////arrange alternative element             ==== Output=>[ 'foo', 'bar', 'foo', 'bar' ]
// const array10=[1,2,2,1,3,4,1,1,4,2,2]
// const array10=["foo","bar","bar","foo","foo","bar"]    
//  const newarr=[]
//  for(i=0;i<array10.length;i++){
//     if(i==0){
//         newarr.push(array10[i])
//     }
//     else{
//         if(array10[i-1]!==array10[i]){
//             newarr.push(array10[i])
//         }
//     }
//  }
//  console.log(newarr);
//--------------------------------------------------------

// repetative item add to object   ==== output=> { c: 2, a: 1, t: 1, h: 1 }
// let str1="catch"
// const array12=str1.split("")
// const obj12={}
// array12.forEach((item)=>
// obj12[item]=obj12[item]?obj12[item]+1:1)
// console.log(obj12);
//-------------------------------------------------------------------------------------////

/// repetative item add to object   ==== output=> { car: 2, cat: 2, bat: 3 }
// const array12=["car","cat","bat","bat","car","cat","bat"]
// const obj12={}
// array12.forEach((item)=>
// obj12[item]=obj12[item]?obj12[item]+1:1)
// console.log(obj12);
//-------------------------------------------------------------------------------------////


///// SETTIME OUT
//  for (let i=0;i<10;i++) {
//     setTimeout(function(){
//         console.log(i);
//     },1000)
// }
//--------------------------------------------------------

///// SETTIME OUT WITH LET SCOPE
// for(let i=1;i<5;i++){
//     setTimeout(()=> 
//     console.log(i),0);
//     console.log(i * 2);
// }
//--------------------------------------------------------

///// SETTIME OUT WITH VAR SCOPE
// for(var i=1;i<5;i++){
//     setTimeout(()=> 
//     console.log(i),0);
//     console.log(i*2);
// }
//--------------------------------------------------------

///// BLOCK OF SCOPE WITH VAR,LET,CONST 
// if(100<200){
//     var a="ONE"
//     let b="TWO"
//     const c="THREE"
// }
// console.log(a,b,c)
//--------------------------------------------------------

//POST increment and PRE increment   ===OUTPUT ==> 13 13 15
// var a=13
// console.log(a)   ///----> 13
// console.log(a++)  //post increment   --->13
// console.log(++a)    ////---->15
//-------------------------------------------------------------------------------------////

// var b=11
// console.log( a<=b);                    // ===OUTPUT ==> a is not defined

//-------------------------------------------------------------------------------------////

// var fname="John"
// var lname="Wick"
// console.log(fname+" "+lname)       ==o/p==> John Wick

// var num1="10"
// var num2="20"
// console.log(num1+" "+num2)          ==o/p==>10 20

// var num1=10
// var num2="10"
// console.log(num1==num2)             ==o/p==>true
// console.log(num1===num2)            ==o/p==>false

// var a="ABC"
// var b="abc"
// console.log(a==b)                   ==o/p==>false

// var num1=20
// var num2=10
// console.log(num1+num2)              //==o/p==>30
// console.log(num1-num2)              //==o/p==>10
// console.log(num1*num2)              //==o/p==>200
// console.log(num1/num2)              //==o/p==>2

// var num1="20"
// var num2=10
// console.log(num1+num2)               //==o/p==>2010
// console.log(num1-num2)               //==o/p==>10
// console.log(num1*num2)               //==o/p==>200
// console.log(num1/num2)               //==o/p==>2

// var num1=20
// var str1="ABC"
// console.log(num1+str1)               //==o/p==>20ABC
// console.log(num1-str1)               //==o/p==>NAN
// console.log(num1*str1)               //==o/p==>NAN
// console.log(num1/str1)               //==o/p==>NAN

//-------------------------------------------------------------------------------------////


// Changing object value  
// const obj={
//     name:"PDAC",
//     city:"Nanded",
//     age:10
//     }

//  obj.name="Gopdac"
//  obj.city="Pune"
//  console.log(obj);                    
//-------------------------------------------------------------------------------------////

// getting object Key in array              === OUTPUT ==>[ 'Name', 'City', 'Java' ]
// var obj={"Name":20,"City":40,"Java":55}     
// console.log(Object.keys(obj));

// sum of array elements using for loop
// const nums=[2,4,5,7,8,10,2]
// let sum=0;
// for(i=0;i<nums.length;i++){
//  sum=sum+nums[i]
// }
// console.log(sum)



//find vowels from given string
// let str="Something"   
// let result=str.match(/[aeiou]/gi)
// let result=str.match(/[aeiou]/gi).length
// let result=str.match(/[aeiou]/gi).join("")
// console.log(result)

//how hoisting support in this situation?
// function sayHi(){
//     console.log(name);
//     console.log(age);
//     var name="Ayush"
//     let age=20
// }
// sayHi()



// let abc=setInterval(()=>{
//     console.log("hello")
// },1000)

// setTimeout(()=>{
//     clearInterval(abc)
// },4000)


// const array1=[1,2,3,4,5,6,7,8,9,21]
// let primenums=[]
// for (let i = 0; i <= array1.length; i++){
//         if (array1[i] % i === 0)
// {
//     primenums.push(array1[i])
// }}
// console.log(primenums);


//reverse the given WORD
// const reversefun=(strng1)=>{
//     return strng1.split("").reverse().join("")
// }
// console.log(reversefun("PDAC"))


//reverse the given SENTENCE
// const reverseSent=(strng1)=>{
//     return strng1.split(" ").reverse().join(" ")
// }
// console.log(reverseSent("PDAC is in Nanded"))


//reverse the WORD of given sentence
// const reverseSent1=(strng1)=>{
//     return strng1.split("").reverse().join("").split(" ").reverse().join(" ")
// }
// console.log(reverseSent1("PDAC is in Nanded"))

// Find the Biggest digit from given nuber
// const bignumber=(num)=>{
// return num.split("").reduce((acc,cur)=>acc>cur?acc:cur)
// }
// console.log(bignumber("7756903575"))

//Add 0 at begining of given number
// const enterNew=(num)=>{
//     let result=num.split("")
//      result.unshift("0")
//      return result.join("")
//     }
// console.log(enterNew("7756903575"))

// find total sum of given number
// const sumofnumber=(num)=>{
//         let result=num.split("")
//          return result.reduce((acc,cur)=>Number(acc)+Number(cur))
//         }
// console.log(sumofnumber("7756903575"))

//fizzbuzz program
// var str=""
// for(let i=1;i<=100;i++)
// {
//     if (i%15===0)   str=str+(" FizzBuzz");
//     else if (i%3===0) str=str+ (" Fizz");
//     else if (i%5===0) str=str+(" Buzz");
//     else  str = str+ " "+i;
// }
//  console.log(str);