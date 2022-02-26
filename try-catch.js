let x = 9;
try {
    if (x == '') throw 'give a number';
    if (x <= 5) throw 'Give a Number Greater Than 5';
    if (x < 10) throw 'Please Give Value large than 10';
} catch (err) {
    console.log(err);
}
console.log('This is Not Error');