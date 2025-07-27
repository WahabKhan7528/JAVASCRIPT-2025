let nm = document.querySelector("#name")
let form = document.querySelector("form")

form.addEventListener("submit",function(e){
 e.preventDefault();
//  if(nm.value.length <= 2){
//   document.querySelector("small").style.display = "initial"
//  }
//  else{
//   document.querySelector("small").style.display = "none"
// }

// Example for Custom Regex:
// 
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let ans = emailRegex.test("haribkhan@gmail.com")
  console.log(ans)
})