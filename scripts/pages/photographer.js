// create photogarpher header
function createphotographerPage(data){
    const $wrapper = document.createElement('article');
    const photographerPage = `
    <div class="photographer">
        <div class="photographer-contact">
            <div class="photographer-info">
                <h1 class="photographer-name">${data.name}</h1>
                <p class="photographer-location">${data.city}, ${data.country}</p>
                <p class="photographer-tagline">${data.tagline}</p>
            </div>
            <div class="photographer-button">
                <button class="contact_button" onclick="displayModal()" aria-label="Contact me">Contactez-moi</button>
            </div>
            <div class="photographer-picture">
                <img src="assets/photographers/Photographers ID Photos/${data.portrait}" alt="${data.name}">
            </div>
        </div>
        <div id="photographer-media">
        </div>
        <div class="priceandlike">
            <div class="priceandlike-like">
                <span class="data-likes-count"></span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
            </div>
            <div>${data.price}€ / jour</div>
        </div>
    </div>`;
    $wrapper.innerHTML = photographerPage;
    return ($wrapper);

}
// create media card
function createMediaCard(media){
    const $wrapperMedia = document.createElement('article');
    $wrapperMedia.classList.add('card');
    const photographerMediaPage =`
        <a href="#" class="card-media" aria-label=${media.title}, closeup view">
        <img src="assets/photographers/${media.photographerId}/${media.image}" alt="${media.name}">
        ${media.image}
        </a>
        <div class="card-header">
            <h2 class="card-header-title">${media.title}</h2>
            <div class="card-header-like" role="button" data-likes=${media.id}>
                <span class="counter" data-likes-count>${media.likes}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="likes"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/></svg>
            </div>
        </div>`;
        console.log(media)
    $wrapperMedia.innerHTML = photographerMediaPage;
    return ($wrapperMedia);
}


async function renderPhotographer (photographer) {
    // Header
    //let likes = 0;
    const photographerDom = document.getElementById('photograph-header');
    const template = createphotographerPage(photographer);
    console.log(photographer)
    photographerDom.appendChild(template);
    //photographer.media.forEach((media) => likes += media.likes);
    //photographerDom .photographer.querySelector('[data-likes-count]').innerText = likes;
    }


async function fetchData (idPhotographer) {
    try {
        let data;
        const response = await fetch("./data/photographers.json");
        const responseData = await response.json();
        responseData.photographers.forEach(
            (photographer) => {
                if (photographer.id == idPhotographer){
                    data  = photographer;
                    console.log(data);
                }    
            });   
        return data;
    }
    catch (error) {
        console.log(error);
    }
}
//render media
async function renderMediaPhotographer (medias) {
    
    const photographerMediaDom = document.getElementById('photographer-media');
    medias.forEach(
        (media)=>{
            const template = createMediaCard(media);
            photographerMediaDom.appendChild(template)
            console.log(media)
        }
    )
}
//fetch data media photographer
async function fetchDataMedia (idPhotographer) {
    try {
        let dataMedia =[];
        const response = await fetch("./data/photographers.json");
        const responseData = await response.json();
        responseData.media.forEach(
            (media) => {
                if (media.photographerId== idPhotographer){
                    dataMedia .push(media);
                }    
            });   
        return dataMedia ;
    }
    catch (error) {
        console.log(error);
    }
}
async function getPhotographer() {
    //Recuperer le photographer du fichier photographers.json
    const queryString = window.location.search;
    console.log(queryString)
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    let photographer = await fetchData(id);
    console.log(id)
    console.log(photographer)
    document.title = 'FishEye ' + photographer.name;
    renderPhotographer( photographer);
    let tabMediaPhotographer = await fetchDataMedia(photographer.id);
    console.log(tabMediaPhotographer)
    renderMediaPhotographer(tabMediaPhotographer);
}

async function init() {
    // Récupère la datas de photographer
     await getPhotographer();
     
  
}

init();
