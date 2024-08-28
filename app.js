const btn = document.getElementById("btn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector("#close");

btn.addEventListener("click", () => {
  document.body.classList.add("show");
  toggleShow();
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
  document.body.classList.remove("show");
});

function toggleShow() {
  modal.classList.add("active");
}
