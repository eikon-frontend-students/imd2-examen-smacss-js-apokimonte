var headerBackground = document.querySelector(".l-header-background");
var headerTitle = document.querySelector(".header-title");
var firstArticleChange = document.querySelector(".product-one");
var secondArticleChange = document.querySelector(".product-two");
var thirdArticleChange = document.querySelector(".product-three");

function changeColorHeader() {
  headerBackground.classList.toggle("is-active");
  headerTitle.classList.toggle("is-active");
  headerBackground.style.transition = ".5s";
  headerTitle.style.transition = ".5s";
}
headerBackground.addEventListener("click", changeColorHeader);

function changeAppearanceOneProduct() {
  OneProductChange.classList.toggle("become-pink");
  OneProductChange.style.transition = ".5s";
}
OneProductChange.addEventListener("click", changeAppearanceOneProduct);
