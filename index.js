console.log()
let o="Once upon a time,"
document.querySelector(".sub").addEventListener("click", function(){main()})
function main(){
let fresh=document.querySelector("input").value
document.querySelector("input").value=""
	if (fresh.slice(0,1)!=" " && fresh.slice(0,1)!="."){
  fresh = " " +fresh.slice(0, fresh.length)
  }
  let separated=fresh.split(" ")
  for (var i=0; i<separated.length; i++){
  if (separated[i]=="but") {separated[i-1]+=","}
  if (separated[i]=="and") {separated[i-1]+=","}}

  fresh=separated.join(" ")
  o+=fresh
  
 document.querySelector("lable").innerHTML=o
  }
  main()
