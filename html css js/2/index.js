let dropdown = document.getElementsByClassName("dropdown");
for(let i=0;i<dropdown.length;i++){
dropdown[i].addEventListener("click",function(){
    console.log("hi");
    this.classList.toggle("active");
  let dropdown_C = this.nextElementSibling;
  if (dropdown_C.style.display === "block") {
    dropdown_C.style.display = "none";
  } else {
    dropdown_C.style.display = "block";
  }
  });
}