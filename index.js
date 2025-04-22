const issue = document.getElementById("#issue");
const menu_bar = document.getElementById("menu_bar");
const menu_options = document.getElementById("menu_options");
const menu_option = document.querySelector("menu_options");

menu_bar.addEventListener("click", function() {
    menu_options.style.display="block"
});
menu_options.addEventListener("click", function() {
    menu_options.style.dispaly="none"
});