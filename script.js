let listingsArray = [
    { title: "Ford Focus", brand: "Ford", model: "Focus", year: "2015", price: "45000", description: "Bardzo dobry stan, pierwszy właściciel.", image: "https://via.placeholder.com/150" },
    { title: "Volkswagen Golf", brand: "Volkswagen", model: "Golf", year: "2018", price: "60000", description: "Auto bezwypadkowe, serwisowane.", image: "https://via.placeholder.com/150" },
    { title: "Toyota Corolla", brand: "Toyota", model: "Corolla", year: "2016", price: "50000", description: "Osobowe, z kompletem dokumentów.", image: "https://via.placeholder.com/150" },
    { title: "Honda Civic", brand: "Honda", model: "Civic", year: "2017", price: "55000", description: "Ekonomiczne, idealne na miasto.", image: "https://via.placeholder.com/150" },
    { title: "BMW 320", brand: "BMW", model: "320", year: "2019", price: "80000", description: "Zadbane, sportowe osiągi.", image: "https://via.placeholder.com/150" },
    { title: "Audi A4", brand: "Audi", model: "A4", year: "2020", price: "95000", description: "Wysoka jakość wykończenia.", image: "https://via.placeholder.com/150" },
    { title: "Kia Ceed", brand: "Kia", model: "Ceed", year: "2018", price: "49000", description: "Przestronne wnętrze, dobra oferta.", image: "https://via.placeholder.com/150" },
    { title: "Mazda 3", brand: "Mazda", model: "3", year: "2020", price: "72000", description: "Dynamiczne prowadzenie.", image: "https://via.placeholder.com/150" },
    { title: "Peugeot 308", brand: "Peugeot", model: "308", year: "2017", price: "43000", description: "Z niskim przebiegiem.", image: "https://via.placeholder.com/150" },
    { title: "Fiat Tipo", brand: "Fiat", model: "Tipo", year: "2016", price: "38000", description: "Dobre dla rodziny.", image: "https://via.placeholder.com/150" },
    { title: "Renault Clio", brand: "Renault", model: "Clio", year: "2015", price: "29000", description: "Kompaktowe, wygodne auto.", image: "https://via.placeholder.com/150" },
    { title: "Opel Astra", brand: "Opel", model: "Astra", year: "2019", price: "67000", description: "Mocny silnik, dobrze wyposażone.", image: "https://via.placeholder.com/150" },
    { title: "Nissan Qashqai", brand: "Nissan", model: "Qashqai", year: "2021", price: "105000", description: "SUV, wygodne wnętrze.", image: "https://via.placeholder.com/150" },
    { title: "Volkswagen Passat", brand: "Volkswagen", model: "Passat", year: "2020", price: "92000", description: "Idealne auto dla rodziny.", image: "https://via.placeholder.com/150" },
    { title: "Skoda Octavia", brand: "Skoda", model: "Octavia", year: "2018", price: "54000", description: "Niskie koszty eksploatacji.", image: "https://via.placeholder.com/150" },
    { title: "Subaru Forester", brand: "Subaru", model: "Forester", year: "2019", price: "98000", description: "Doskonałe właściwości terenowe.", image: "https://via.placeholder.com/150" },
    { title: "Hyundai i30", brand: "Hyundai", model: "i30", year: "2019", price: "61000", description: "Nowoczesny design.", image: "https://via.placeholder.com/150" },
    { title: "Mercedes-Benz C-Class", brand: "Mercedes-Benz", model: "C-Class", year: "2020", price: "120000", description: "Luksusowy sedan.", image: "https://via.placeholder.com/150" },
    { title: "Peugeot 508", brand: "Peugeot", model: "508", year: "2018", price: "68000", description: "Stylowy i elegancki.", image: "https://via.placeholder.com/150" },
    { title: "Lexus IS", brand: "Lexus", model: "IS", year: "2021", price: "140000", description: "Wyjątkowa jakość wykonania.", image: "https://via.placeholder.com/150" },
    { title: "Ford Fiesta", brand: "Ford", model: "Fiesta", year: "2017", price: "32000", description: "Małe, zwinne auto.", image: "https://via.placeholder.com/150" },
    { title: "Dacia Duster", brand: "Dacia", model: "Duster", year: "2016", price: "41000", description: "Dostępne w dobrej cenie.", image: "https://via.placeholder.com/150" },
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
