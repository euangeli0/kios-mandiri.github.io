// ================= SEARCH BAR =================
function searchBarang() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".menu-card");

    cards.forEach(card => {
        const nama = card.querySelector("h3").innerText.toLowerCase();
        card.style.display = nama.includes(input) ? "block" : "none";
    });
}