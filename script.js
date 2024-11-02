let listingsArray = [];

// Funkcja do dodawania ogłoszenia
document.getElementById('listingForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;
    const imageFile = document.getElementById('image').files[0];

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const newListing = {
                title: title,
                price: price,
                description: description,
                image: event.target.result
            };

            listingsArray.push(newListing);
            displayListings();
            document.getElementById('listingForm').reset();
        };
        reader.readAsDataURL(imageFile);
    }
});

// Funkcja do wyświetlania ogłoszeń
function displayListings() {
    const listingsDiv = document.getElementById('listings');
    listingsDiv.innerHTML = '';

    listingsArray.forEach(listing => {
        const newListingDiv = document.createElement('div');
        newListingDiv.className = 'listing';
        newListingDiv.innerHTML = `
            <h3>${listing.title}</h3>
            <p>Cena: ${listing.price} zł</p>
            <p>Opis: ${listing.description}</p>
            <img src="${listing.image}" alt="${listing.title}" style="max-width: 100%;">
        `;
        listingsDiv.appendChild(newListingDiv);
    });
}

// Funkcja do filtrowania ogłoszeń
function filterListings() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredListings = listingsArray.filter(listing => listing.title.toLowerCase().includes(searchTerm));

    const listingsDiv = document.getElementById('listings');
    listingsDiv.innerHTML = '';

    filteredListings.forEach(listing => {
        const newListingDiv = document.createElement('div');
        newListingDiv.className = 'listing';
        newListingDiv.innerHTML = `
            <h3>${listing.title}</h3>
            <p>Cena: ${listing.price} zł</p>
            <p>Opis: ${listing.description}</p>
            <img src="${listing.image}" alt="${listing.title}" style="max-width: 100%;">
        `;
        listingsDiv.appendChild(newListingDiv);
    });
}
