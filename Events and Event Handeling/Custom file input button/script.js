let btn = document.querySelector("#btn")
let inp = document.querySelector("input")

btn.addEventListener("click",function(){
  inp.click()
})

inp.addEventListener("change",function(dets){
  // console.log(dets)
  btn.textContent = dets.target.files[0].name
  btn.classList.add("fileSelected");
})