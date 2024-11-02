const listings = [
    { make: "Toyota", model: "Corolla", year: 2020, description: "W dobrym stanie, z pełną historią serwisową.", price: "50 000 zł", image: "https://via.placeholder.com/150" },
    { make: "Ford", model: "Focus", year: 2019, description: "Ekonomiczne auto, idealne do miasta.", price: "45 000 zł", image: "https://via.placeholder.com/150" },
    { make: "Volkswagen", model: "Golf", year: 2018, description: "Zadbany samochód z niskim przebiegiem.", price: "55 000 zł", image: "https://via.placeholder.com/150" }
];

function displayListings() {
    const listingsContainer = document.getElementById("allListings");
    listingsContainer.innerHTML = '';
    listings.forEach((listing, index) => {
        listingsContainer.innerHTML += `
            <div class="listing">
                <img src="${listing.image}" alt="zdjęcie" style="width:100%">
                <h3>${listing.make} ${listing.model}</h3>
                <p>Rok: ${listing.year}</p>
                <p>${listing.description}</p>
                <p>Cena: ${listing.price}</p>
                <button onclick="viewDetails(${index})">Zobacz więcej</button>
            </div>
        `;
    });
}

function viewDetails(index) {
    const listing = listings[index];
    alert(`Szczegóły ogłoszenia:\nMarka: ${listing.make}\nModel: ${listing.model}\nRok: ${listing.year}\nOpis: ${listing.description}\nCena: ${listing.price}`);
}

document.getElementById('listingForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const newListing = {
        make: this.make.value,
        model: this.model.value,
        year: this.year.value,
        description: this.description.value,
        price: this.price.value,
        image: URL.createObjectURL(this.image.files[0])
    };
    listings.push(newListing);
    alert('Ogłoszenie dodane!');
    this.reset();
    displayListings();
});

document.getElementById('profileForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Profil został stworzony!');
    this.reset();
});

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}

// Wyświetlanie ogłoszeń na stronie głównej
displayListings();
