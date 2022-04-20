const featuresDropdown = document.querySelector(".dropdown1");
const companyDropdown = document.querySelector(".dropdown2");

console.log(arrow);
featuresDropdown.addEventListener("click", () => {
  features.classList.toggle("show");
  arrow.classList.toggle("rotate");
});

companyDropdown.addEventListener("click", () => {
  company.classList.toggle("show");
  arrow1.classList.toggle("rotate");
});

container.onclick = () => {
  features.classList.remove("show");
  company.classList.remove("show");
  arrow.classList.remove("rotate");
  arrow1.classList.remove("rotate");
};
