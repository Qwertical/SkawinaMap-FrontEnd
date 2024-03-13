// funkcja do wyswietlania modalnego diva
overlay.addEventListener("click", closeModal);
document.getElementById("modal").style.display = "none";
function showModal() {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("overlay").style.display = "flex";
}
// funkcja do zamykania modalnego diva
function closeModal() {
        document.getElementById("modal").style.display = "none";
        document.getElementById("overlay").style.display = "none";
}
