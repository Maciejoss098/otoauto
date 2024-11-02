document.getElementById('listingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;
    const imageFile = document.getElementById('image').files[0];
    
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const newListing = `
                <div class="listing">
                    <h3>${title}</h3>
                    <p>Cena: ${price} zł</p>
                    <p>Opis: ${description}</p>
                    <img src="${event.target.result}" alt="${title}" style="max-width: 100%;">
                </div>
            `;
            document.getElementById('listings').innerHTML += newListing;
            document.getElementById('listingForm').reset();
        };
        reader.readAsDataURL(imageFile);
    }
});
