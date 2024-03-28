document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");

    searchButton.addEventListener("click", function() {
        searchInput.classList.toggle("d-none");
        searchInput.focus();
    });
});
