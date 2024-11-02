document.getElementById('addCarButton').addEventListener('click', function() {
    const name = document.getElementById('carName').value;
    const model = document.getElementById('carModel').value;
    const year = document.getElementById('carYear').value;
    const price = document.getElementById('carPrice').value;
    const phone = document.getElementById('carPhone').value;
    const description = document.getElementById('carDescription').value;

    if (name && model && year && price && phone && description) {
        const carItem = document.createElement('div');
        carItem.classList.add('car-item');

        carItem.innerHTML = `
            <h3>${name} ${model}</h3>
            <p>Rok produkcji: ${year}</p>
            <p>Cena: ${price} PLN</p>
            <p>Telefon: ${phone}</p>
            <p>Opis: ${description}</p>
            <img src="//zdjecie" alt="${name} ${model}">
        `;

        document.getElementById('carListing').appendChild(carItem);

        document.getElementById('carName').value = '';
        document.getElementById('carModel').value = '';
        document.getElementById('carYear').value = '';
        document.getElementById('carPrice').value = '';
        document.getElementById('carPhone').value = '';
        document.getElementById('carDescription').value = '';
        
        alert("Ogłoszenie zostało dodane!");
    }
});

function searchCars() {
    alert("Funkcja wyszukiwania nie jest jeszcze zaimplementowana.");
}

// Dynamiczna data w stopce
document.getElementById("currentYear").textContent = new Date().getFullYear();
