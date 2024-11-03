let listingsArray = [
    { title: "Ford Focus", brand: "Ford", model: "Focus", year: "2015", price: "45000", description: "Bardzo dobry stan, pierwszy właściciel.", image: "https://www.tapeciarnia.pl/fotki/d/23840_1450431659_7396.jpg" },
    { title: "Volkswagen Golf", brand: "Volkswagen", model: "Golf", year: "2018", price: "60000", description: "Auto bezwypadkowe, serwisowane.", image: "https://www.tapeciarnia.pl/fotki/d/23840_1450431659_7396.jpg" },
    { title: "Toyota Corolla", brand: "Toyota", model: "Corolla", year: "2016", price: "50000", description: "Osobowe, z kompletem dokumentów.", image: "https://www.tapeciarnia.pl/fotki/d/23840_1450431659_7396.jpg" },
    { title: "Honda Civic", brand: "Honda", model: "Civic", year: "2017", price: "55000", description: "Ekonomiczne, idealne na miasto.", image: "https://www.tapeciarnia.pl/fotki/d/23840_1450431659_7396.jpg" },
    { title: "BMW 320", brand: "BMW", model: "320", year: "2019", price: "80000", description: "Zadbane, sportowe osiągi.", image: "https://www.tapeciarnia.pl/fotki/d/23840_1450431659_7396.jpg" },
    { title: "Audi A4", brand: "Audi", model: "A4", year: "2020", price: "95000", description: "Wysoka jakość wykończenia.", image: "https://www.tapeciarnia.pl/fotki/d/23840_1450431659_7396.jpg" },
    { title: "Kia Ceed", brand: "Kia", model: "Ceed", year: "2018", price: "49000", description: "Przestronne wnętrze, dobra oferta.", image: "https://www.tapeciarnia.pl/fotki/d/23840_1450431659_7396.jpg" },
    { title: "Mazda 3", brand: "Mazda", model: "3", year: "2020", price: "72000", description: "Dynamiczne prowadzenie.", image: "https://www.tapeciarnia.pl/fotki/d/23840_1450431659_7396.jpg" },
    { title: "Peugeot 308", brand: "Peugeot", model: "308", year: "2017", price: "43000", description: "Z niskim przebiegiem.", image: "https://www.tapeciarnia.pl/fotki/d/23840_1450431659_7396.jpg" },
    { title: "Fiat Tipo", brand: "Fiat", model: "Tipo", year: "2016", price: "38000", description: "Dobre dla rodziny.", image: "https://www.tapeciarnia.pl/fotki/d/23840_1450431659_7396.jpg" },
    { title: "Renault Clio", brand: "Renault", model: "Clio", year: "2015", price: "29000", description: "Kompaktowe, wygodne auto.", image: "https://www.tapeciarnia.pl/fotki/d/23840_1450431659_7396.jpg" },
    { title: "Opel Astra", brand: "Opel", model: "Astra", year: "2019", price: "67000", description: "Mocny silnik, dobrze wyposażone.", image: "https://www.tapeciarnia.pl/fotki/d/23840_1450431659_7396.jpg" },
    { title: "Nissan Qashqai", brand: "Nissan", model: "Qashqai", year: "2021", price: "105000", description: "SUV, wygodne wnętrze.", image: "https://www.tapeciarnia.pl/fotki/d/23840_1450431659_7396.jpg" },
    { title: "Volkswagen Passat", brand: "Volkswagen", model: "Passat", year: "2020", price: "92000", description: "Idealne auto dla rodziny.", image: "https://www.tapeciarnia.pl/fotki/d/23840_1450431659_7396.jpg" },
    { title: "Skoda Octavia", brand: "Skoda", model: "Octavia", year: "2018", price: "54000", description: "Niskie koszty eksploatacji.", image: "https://www.tapeciarnia.pl/fotki/d/23840_1450431659_7396.jpg" },
    { title: "Subaru Forester", brand: "Subaru", model: "Forester", year: "2019", price: "98000", description: "Doskonałe właściwości terenowe.", image: "https://www.tapeciarnia.pl/fotki/d/23840_1450431659_7396.jpg" },
    { title: "Hyundai i30", brand: "Hyundai", model: "i30", year: "2019", price: "61000", description: "Nowoczesny design.", image: "https://www.tapeciarnia.pl/fotki/d/23840_1450431659_7396.jpg" },
    { title: "Mercedes-Benz C-Class", brand: "Mercedes-Benz", model: "C-Class", year: "2020", price: "120000", description: "Luksusowy sedan.", image: "https://www.tapeciarnia.pl/fotki/d/23840_1450431659_7396.jpg" },
    { title: "Peugeot 508", brand: "Peugeot", model: "508", year: "2018", price: "68000", description: "Stylowy i elegancki.", image: "https://www.tapeciarnia.pl/fotki/d/23840_1450431659_7396.jpg" },
    { title: "Lexus IS", brand: "Lexus", model: "IS", year: "2021", price: "140000", description: "Wyjątkowa jakość wykonania.", image: "https://www.tapeciarnia.pl/fotki/d/23840_1450431659_7396.jpg" },
    { title: "Ford Fiesta", brand: "Ford", model: "Fiesta", year: "2017", price: "32000", description: "Małe, zwinne auto.", image: "https://www.tapeciarnia.pl/fotki/d/23840_1450431659_7396.jpg" },
    { title: "Dacia Duster", brand: "Dacia", model: "Duster", year: "2016", price: "41000", description: "Dostępne w dobrej cenie.", image: "https://www.tapeciarnia.pl/fotki/d/23840_1450431659_7396.jpg" },
];

function displayListings(filteredListings = listingsArray) {
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

// Funkcja do wyszukiwania ogłoszeń
function searchListings() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const filteredListings = listingsArray.filter(listing => 
        listing.title.toLowerCase().includes(query) ||
        listing.brand.toLowerCase().includes(query) ||
        listing.model.toLowerCase().includes(query)
    );
    displayListings(filteredListings);
}

// Wyświetlenie ogłoszeń przy starcie
displayListings();
let listingsArray = JSON.parse(localStorage.getItem('listings')) || [];
// Funkcja do wyświetlania ogłoszeń
function displayListings(filteredListings = listingsArray) {
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
// Funkcja do wyszukiwania ogłoszeń
function searchListings() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const filteredListings = listingsArray.filter(listing => 
        listing.title.toLowerCase().includes(query) ||
        listing.brand.toLowerCase().includes(query) ||
        listing.model.toLowerCase().includes(query)
    );
    displayListings(filteredListings);
}
// Funkcja do dodawania ogłoszenia
document.getElementById('listingForm').addEventListener('submit', function(event) {
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
// Wyświetlenie ogłoszeń przy starcie
displayListings();
