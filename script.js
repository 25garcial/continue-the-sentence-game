var o = "Once upon a time,";
document.querySelector(".sub").addEventListener("click", function () { main() })

function main() {
  var freshData = document.querySelector("input").value
  document.querySelector("input").value = ""
  
  if (freshData.slice(0, 1) != " " && freshData.slice(0, 1) != ".") {
    freshData = " " + freshData.slice(0, freshData.length)
  }
  let separated = freshData.split(" ")
  for (var i = 0; i < separated.length; i++) {
    if (separated[i] == "but") { separated[i - 1] += "," }
    if (separated[i] == "and") { separated[i - 1] += "," }
  }

  freshData = separated.join(" ")
  o += freshData

  document.querySelector("lable").innerHTML = o
}
main()
