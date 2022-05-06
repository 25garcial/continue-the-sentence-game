document.querySelector(".sub").addEventListener("click", function(){main()})
function main(){
let fresh=document.querySelector("input").value
document.querySelector("input").value=""
	if (fresh.slice(0,1)!=" "){
  fresh = " " +fresh.slice(0, fresh.length)
  }
	
  
  let separated=fresh.split(" ")
  for (var i=0; i<separated.length; i++){
  if (separated[i]=="but") {separated[i]=",but"}}
  fresh=separated.join("")
  o+=fresh
 document.querySelector("lable").innerHTML=o
  }
  
for (var o="once upon a time,";o.length<80;){
  main()
}
  console.log()
