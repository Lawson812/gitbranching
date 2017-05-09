for (var i= 0; i<=55; i+5){
    console.log(i)
}
function isPal (word){
    var ogWord = word;
    if(ogWord === word.split('').reverse().join('')){
        console.log('is palindrome')
    } else{
        console.log('nah')
    }
}

isPal('RACECAR');
isPal('jeremy irons');
isPal('lolololololol');
