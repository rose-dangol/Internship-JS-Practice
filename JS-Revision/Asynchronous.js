function timeout(){
    console.log("Hiii!!")
    setTimeout(()=>{console.log("world!")},2000)
}
timeout()


function callbackFunc(name){
    console.log("this is callback"+name)
}
function mainFunction(callback){
    callback("roserose")
}
mainFunction(callbackFunc)