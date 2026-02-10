const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", function () {

  const searchValue = searchInput.value.trim().toLowerCase();

  cards.forEach(card => {

    const title = card.querySelector("h3").textContent.toLowerCase();

    if (title.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }

  });

});
