console.log("iam module1 ")

function sample() {
    console.log("iam sample function from module1")   
}


function sample2(){
    console.log("iam sample 2 function ")
}
module.exports={sample:sample,sample2:sample2};