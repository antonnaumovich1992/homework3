// var person = {
//     firstName: "Jim",
//     introduce: function(){
//         console.log("Hi, I'm " + this.firstName);
//     }
// };
 
// person.introduce();
// Outputs: Hi, I'm Jim
 
// setTimeout(person.introduce.bind(person), 50);
let a = delayedOutput('Карл у Клары украл кораллы, а Клара у Карла украла кларнет', 2, 5, 4, 2, 1);
// let b = delayedOutput('Карл у Клары', 2, 5, 4, 2, 1);

// console.log("begin");
// setTimeout(function () {
// 	console.log("2000ms timeout");
// }, 2000);
// setTimeout(function () {
// 	console.log("1500ms timeout");
// }, 1500);
// setTimeout(function () {
// 	console.log("1000ms timeout");
// }, 1000);
// setTimeout(function () {
// 	console.log("final");
// }, 500);
// console.log("end");

  

function delayedOutput(words, ...args){
    let arrFromString = words.split(' ')
    let arrFromArgs = args;
    // let hz;

    if (arrFromString.length > arrFromArgs.length){
        Array.prototype.addArg = function( newElement, n ) {
            while( n-- )
              this.push( newElement  );
            return this;
          };  
        arrFromArgs = arrFromArgs.addArg( arrFromArgs[arrFromArgs.length - 1], arrFromString.length - arrFromArgs.length);
        // console.log(arrFromArgs);   
    } else {
        arrFromArgs = arrFromArgs.slice(0, arrFromString.length);
        // console.log(arrFromArgs);
    }
// var result = arrFromArgs.map(function(row) {
//   return arrFromArgs.reduce(function(result, field, index) {
//     result[arrFromString[index]] = field;
//     return result
//   }, {});
// });
    function Arr2object(keys, vals) {
        return keys.reduce(
        function(prev, val, i) {
            prev[val] = vals[i];
            return prev;
        }, {}
        );
    };

  console.log(Arr2object(arrFromString, arrFromArgs));

// console.log(result);
};
//     let keys = words.split(' ');
//     let values = args;
//     let finalarray = [];

//     values.forEach((data,index) =>{
//         var objJSON = new Object();
//         for (i = 0; i < keys.length; i++) {
//             objJSON[keys[i]] = data[i];
//            }
//         finalarray.push(objJSON);
        
//     // return finalarray;
//     });

// };
    // arrFromString.forEach(function(item, index){
//     setTimeout(function(){ 
//         ${`#output`}.append(item)
//     }, index * 50 + 1000);
// });
    // return /*arrFromString +*/ arrFromArgs;
        // for (let i = 0; i < arrFromString.length; i++){
        //     for (let j = 0; j < arrFromArgs.length; j++){
        //         return setTimeout(console.log(arrFromString[i]), (j*1000));
        //     }
        // }


// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function(i) {
//     console.log('Index: ' + i + ', element: ' + arr[i]);
//   }, 3000, i);
// }

