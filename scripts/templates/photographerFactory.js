/*class PhotographerCard{
    constructor(photographer){
        this._photographer = photographer;
    }*/
  export  function createphotographerCard(data) {
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
