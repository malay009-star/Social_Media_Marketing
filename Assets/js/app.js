var menu = document.getElementById("menu-img");
var navigation = document.getElementById("navigation");
console.log(menu);
console.log(navigation);

menu.addEventListener("click", () => {
  navigation.classList.toggle("hidden");
  // navigation.style.display = "block";
});
