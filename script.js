let listings = [];

function addListing(make, model, year, phone, description, image) {
    const listing = {
        make,
        model,
        year,
        phone,
        description,
        image,
    };
    listings.push(listing);
    displayListings();
}

function displayListings() {
    const container = document.getElementById('listingContainer');
    container.innerHTML = '';
    listings.forEach((listing, index) => {
        const div = document.createElement('div');
        div.className = 'listing';
        div.innerHTML = `
            <h3>${listing.make} ${listing.model} (${listing.year})</h3>
            <p>${listing.description}</p>
            <p>Telefon: ${listing.phone}</p>
            <img src="${listing.image}" alt="Zdjęcie ${listing.make} ${listing.model}" style="width: 200px;">
        `;
        container.appendChild(div);
    });
}

function searchListings() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = listings.filter(listing =>
        listing.make.toLowerCase().includes(query) ||
        listing.model.toLowerCase().includes(query)
    );
    const container = document.getElementById('listingContainer');
    container.innerHTML = '';
    filtered.forEach(listing => {
        const div = document.createElement('div');
        div.className = 'listing';
        div.innerHTML = `
            <h3>${listing.make} ${listing.model} (${listing.year})</h3>
            <p>${listing.description}</p>
            <p>Telefon: ${listing.phone}</p>
            <img src="${listing.image}" alt="Zdjęcie ${listing.make} ${listing.model}" style="width: 200px;">
        `;
        container.appendChild(div);
    });
}

document.getElementById('listingForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const make = document.getElementById('carMake').value;
    const model = document.getElementById('carModel').value;
    const year = document.getElementById('carYear').value;
    const phone = document.getElementById('phone').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;
    addListing(make, model, year, phone, description, image);
    this.reset();
});

document.getElementById('profileForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Logika tworzenia profilu (możesz dodać tutaj więcej kodu)
    alert('Profil został stworzony!');
});
