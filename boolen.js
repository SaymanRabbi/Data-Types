/* 
//Falsy
1.0;
2.null;
3.false;
4.undefined;
5.NaN
6.'' empty string with out whiteSpaces
Truthy
1.All number accept 0;
2.true;
3.string;
4.[];
5.{};
Anything else that is not falsy will be truthy
*/
let X= parseInt('Rolling');
if (X) {
    console.log("This is True");
}
else {
    console.log("No Its False")
}