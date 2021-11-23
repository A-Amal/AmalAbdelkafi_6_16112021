// eslint-disable-next-line no-unused-vars
function createphotographerCard(data) {
        const $wrapper = document.createElement('article')
        const photographerCard = `
            <a href="photographer.html?id=${data.id}" class="photographer-link" aria-label="${data.name}">
                <div class="photographer-picture">
                    <img src="assets/photographers/Photographers ID Photos/${data.portrait}" alt="photo ${data.name}"">
                </div>
                <h2  class="photographer-name">${data.name}</h2>
            </a>
            <p class="photographer-location">${data.city}, ${data.country}</p>
            <p class="photographer-tagline">${data.tagline}</p>
            <p class="photographer-price">${data.price}€/jour</p>
            `
        
        $wrapper.innerHTML = photographerCard
        return ($wrapper);
    }

// eslint-disable-next-line no-unused-vars
function createphotographerPage(data){
    const $wrapper = document.createElement('article');
    const photographerPage = `
    <div class="photographer">
    <div class="photographer-header">
        <h1 class="photographer-name">${data.name}</h1>
        <button data-modal-open="modal-contact" aria-label="Contact me" class="photographer-contact">Contactez-moi</button>
    </div>
    <div class="photographer-body">
        <p class="photographer-location">${data.city}, ${data.country}</p>
        <p class="photographer-tagline">${data.tagline}</p>
    </div>
    <div class="photographer-picture">
        <div class="photographer-picture-wrapper">
            <img src="${data.portrait}" alt="${data.name}">
        </div>
    </div>
    <div class="priceandlike">
        <div class="priceandlike-like">
            <span data-likes-count></span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
        </div>
        <div>${data.price}€ / jour</div>
    </div>
</div>`;
$wrapper.innerHTML = photographerPage;
return ($wrapper);

}
