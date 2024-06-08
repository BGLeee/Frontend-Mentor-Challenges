var selectedNumber;

document.querySelectorAll("li").forEach((star) =>
  star.addEventListener("click", function () {
    console.log(this.innerText);
    if (selectedNumber == null) {
      selectedNumber = this.id;
    }
    if (selectedNumber != this.id) {
      this.classList.add("selected");

      document.getElementById(selectedNumber).classList.remove("selected");
      selectedNumber = this.id;
    } else if (selectedNumber == this.id) {
      this.classList.toggle("selected");
    }
  })
);

document.querySelector("button").addEventListener("click", function () {
  var primaryCard = document.querySelector(".primary-card");
  var secondaryCard = document.querySelector(".secondary-card");
  var span = document.querySelector("span");
  if (selectedNumber != null) {
    primaryCard.style.display = "none";
    secondaryCard.style.display = "flex";
    span.innerText = selectedNumber;
    secondaryCard.classList.add("visible-card");
  }
});
