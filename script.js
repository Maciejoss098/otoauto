const listings = [
    {
        title: "Ford Fiesta 2018",
        description: "Idealny samochód miejski.",
        price: "30 000 PLN",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Volkswagen Golf 2017",
        description: "Niezawodny hatchback.",
        price: "40 000 PLN",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Toyota Corolla 2019",
        description: "Ekonomiczny sedan.",
        price: "50 000 PLN",
        image: "https://via.placeholder.com/150"
    }
];

function displayListings() {
    const listingsContainer = document.getElementById('listings');
    listingsContainer.innerHTML = '';

    listings.forEach(listing => {
        const listingDiv = document.createElement('div');
        listingDiv.innerHTML = `
            <h3>${listing.title}</h3>
            <img src="${listing.image}" alt="${listing.title}">
            <p>${listing.description}</p>
            <p>Cena: ${listing.price}</p>
            <button onclick="viewDetails('${listing.title}')">Zobacz szczegóły</button>
        `;
        listingsContainer.appendChild(listingDiv);
    });
}

function showCreateListingForm() {
    const formHTML = `
        <h3>Dodaj Ogłoszenie</h3>
        <input type="text" id="title" placeholder="Tytuł">
        <input type="text" id="description" placeholder="Opis">
        <input type="text" id="price" placeholder="Cena">
        <input type="file" id="image" accept="image/*">
        <button onclick="addListing()">Dodaj</button>
    `;
    document.getElementById('listings').innerHTML = formHTML;
}

function addListing() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const imageInput = document.getElementById('image');
    const imageFile = URL.createObjectURL(imageInput.files[0]);

    if (title && description && price && imageInput.files.length > 0) {
        listings.push({ title, description, price, image: imageFile });
        displayListings();
    } else {
        alert("Wypełnij wszystkie pola!");
    }
}

function viewDetails(title) {
    alert(`Szczegóły ogłoszenia: ${title}`);
}

window.onload = displayListings;
