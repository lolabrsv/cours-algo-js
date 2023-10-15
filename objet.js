let student = { 
    name: "lola",
    favoritefood: "tomate",
    city: "paris",
}
let a = Object.values(student.name).length
let b = Object.values(student.favoritefood).length
let c = Object.values(student.city).length
let d = a+b+c
console.log(d)
if(d%2 == 0 ){
    console.log("pair")
}else {
    console.log("impair")
}