let accordion = document.getElementsByClassName("accordion");
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let page = this.nextElementSibling;
    if (page.style.display === "block") {
      page.style.display = "none";
    } else {
      page.style.display = "block";
    }
  });
}

