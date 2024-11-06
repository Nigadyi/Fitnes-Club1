window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}
// script.js
window.onload = function() {
    console.log("Страница загружена."); // Лог для проверки
    const loader = document.getElementById("loader");
    const mainContent = document.getElementById("mainContent");

    loader.style.display = "none"; // Скрываем загрузочный экран
    mainContent.style.display = "block"; // Показываем основное содержимое

    console.log("Загрузочный экран скрыт, основное содержимое показано."); // Лог для проверки
};