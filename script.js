let listingsArray = [];

// Funkcja do dodawania ogłoszenia
document.getElementById('listingForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;
    const imageFile = document.getElementById('image').files[0];

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const newListing = {
                title: title,
                brand: brand,
                model: model,
                year: year,
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
            <p>Marka: ${listing.brand}</p>
            <p>Model: ${listing.model}</p>
            <p>Rok: ${listing.year}</p>
            <p>Cena: ${listing.price} zł</p>
            <p>Opis: ${listing.description}</p>
            <img src="${listing.image}" alt="${listing.title}" style="max-width: 100%;">
        `;
        listingsDiv.appendChild(newListingDiv);
    });
}
