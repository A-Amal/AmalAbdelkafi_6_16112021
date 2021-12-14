// create photogarpher header
export function createphotographerPage(data){
    const $wrapper = document.createElement('article');
    const photographerPage = `
    <div class="photographer">
        <div class="photographer-contact">
            <div class="photographer-info">
                <h1 class="photographer-name">${data.name}</h1>
                <h2 class="photographer-location">${data.city}, ${data.country}</h2>
                <p class="photographer-tagline">${data.tagline}</p>
            </div>
            <div class="photographer-button">
                <button class="contact_button" aria-label="Contact me">Contactez-moi</button>
            </div>
            <div class="photographer-picture photo">
                <img src="assets/photographers/Photographers ID Photos/${data.portrait}" alt="${data.name}">
            </div>
        </div>
        <div class="priceandlike">
            <div class="priceandlike-like">
                <span class="data-likes-count"></span>
                <svg class="svg-likes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
            </div>
            <div>${data.price}€ / jour</div>
        </div>
    </div>`;
    $wrapper.innerHTML = photographerPage;
    return ($wrapper);

}
// create media card image
export function createMediaCardImage(media){
    const $wrapperMedia = document.createElement('article');
    $wrapperMedia.classList.add('card');
    const photographerMediaPage =`
        <a href="assets/photographers/${media.photographerId}/${media.image}" class="card-media" aria-label=${media.title} name=${media.title} closeup view">
            <img src="assets/photographers/${media.photographerId}/${media.image}" alt="${media.alt}">
        </a>
        <div class="card-header">
            <p class="card-header-title">${media.title}</p>
            <div class="card-header-like" role="button" data-likes=${media.id}>
                <span class="counter" value="${media.likes}" data-likes-count>${media.likes}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="likes"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/></svg>
            </div>
        </div>`;
    $wrapperMedia.innerHTML = photographerMediaPage;
    return ($wrapperMedia);
}
// create media card video
export function createMediaCardVideo(media){
    const $wrapperMedia = document.createElement('article');
    $wrapperMedia.classList.add('card');
    const photographerMediaPage =`
        <a href="assets/photographers/${media.photographerId}/${media.video}" class="card-media" aria-label=${media.title}, closeup view">
            <video aria-label="${media.alt}" data-lightbox data-lightbox-caption="${media.title}">
                <source src="assets/photographers/${media.photographerId}/${media.video}" type="video/mp4">
            </video>
            <i class="fas fa-video"></i>
        </a>
        <div class="card-header">
            <p class="card-header-title">${media.title}</p>
            <div class="card-header-like" role="button" data-likes=${media.id}>
                <span class="counter" value="${media.likes}" data-likes-count>${media.likes}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="likes"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/></svg>
            </div>
        </div>
        `;
    $wrapperMedia.innerHTML = photographerMediaPage;
    return ($wrapperMedia);
}