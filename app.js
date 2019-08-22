
// let a = delayedOutput('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15', 2, 2, 5, 4, 3, 5, 8, 4, 5);
// let b = delayedOutput('Карл у Клары', 2, 5, 4, 2, 1);
let c = delayedOutput('Карл у Клары украл кораллы, а Клара у Карла украла кларнет', 2, 5, 4, 2, 1, 7, 8);

function delayedOutput(words, ...args){
    let arrFromString = words.split(' ')
    let arrFromArgs = args;

    if (arrFromString.length > arrFromArgs.length){
        Array.prototype.addArg = function( newElement, n ) {
            while( n-- )
              this.push( newElement  );
            return this;
          };  
        arrFromArgs = arrFromArgs.addArg( arrFromArgs[arrFromArgs.length - 1], arrFromString.length - arrFromArgs.length);   
    } else {
        arrFromArgs = arrFromArgs.slice(0, arrFromString.length);
    };

    for (let i=0; i<arrFromString.length; i++){
        setTimeout(() => {
            console.log(arrFromString[i])
        }, arrFromArgs[i]*1000);
    }
};