var headerBackground = document.querySelector(".l-header-background");
var headerTitle = document.querySelector(".header-title");
var OneProductChange = document.querySelector(".product-one");
var TwoProductChange = document.querySelector(".product-two");
var ThreeProductChange = document.querySelector(".product-three");

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

// manque de temps pour les suivants, étant donné que j'ai recommencé mon projet, (function add text)
// pareil pour les autres couleurs etc... (my bad)
