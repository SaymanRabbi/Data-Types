function callbackParent(name,parent) {
    return parent(name);
}
function callBackChild(name) {
    console.log("Good afternoon",name)
}
callbackParent('sayman',callBackChild)