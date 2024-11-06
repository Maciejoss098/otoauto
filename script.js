// Wstępnie dodane pozorowane ogłoszenia
let listingsArray = JSON.parse(localStorage.getItem('listings')) || [
    {
        title: "Ford Focus",
        brand: "Ford",
        model: "Focus",
        year: 2012,
        price: 25000,
        description: "Niezawodny Ford Focus, idealny na co dzień.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Volkswagen Golf",
        brand: "Volkswagen",
        model: "Golf",
        year: 2015,
        price: 35000,
        description: "Volkswagen Golf w świetnym stanie, niski przebieg.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "BMW 3 Series",
        brand: "BMW",
        model: "3 Series",
        year: 2018,
        price: 65000,
        description: "BMW 3 Series, sportowy charakter i komfort jazdy.",
        image: "https://via.placeholder.com/150"
    }
];

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

// Funkcja do wyszukiwania ogłoszeń
function searchListings() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const filteredListings = listingsArray.filter(listing => 
        listing.title.toLowerCase().includes(query) ||
        listing.brand.toLowerCase().includes(query) ||
        listing.model.toLowerCase().includes(query)
    );
    displayFilteredListings(filteredListings);
}

function displayFilteredListings(filteredListings) {
    const listingsDiv = document.getElementById('listings');
    listingsDiv.innerHTML = '';

    filteredListings.forEach(listing => {
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

// Wyświetlenie ogłoszeń przy starcie
if (document.getElementById('listings')) {
    displayListings();
}

// Funkcja do dodawania ogłoszenia
document.getElementById('listingForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;
    const imageFile = document.getElementById('image').files[0];
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const newListing = {
            title,
            brand,
            model,
            year,
            price,
            description,
            image: e.target.result // URL do przesłanego zdjęcia
        };
        listingsArray.push(newListing);
        localStorage.setItem('listings', JSON.stringify(listingsArray));
        alert('Ogłoszenie dodane!');
        window.location.href = 'index.html'; // Przekierowanie na stronę główną
    };
    reader.readAsDataURL(imageFile); // Wczytaj obraz jako URL
});
