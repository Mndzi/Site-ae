const toggleBtn = document.querySelector("#toggle-btn");
const sidebar = document.querySelector("#sidebar");

toggleBtn.addEventListener("click", () => {
    sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px"; /* Alterna a posição */
});