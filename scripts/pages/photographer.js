
// create photogarpher header
function createphotographerPage(data){
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
                <svg class="svg-likes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
            </div>
            <div>${data.price}€ / jour</div>
        </div>
    </div>`;
    $wrapper.innerHTML = photographerPage;
    return ($wrapper);

}
// create media card image
function createMediaCardImage(media){
    const $wrapperMedia = document.createElement('article');
    $wrapperMedia.classList.add('card');
    const photographerMediaPage =`
        <a href="#" class="card-media" aria-label=${media.title}, closeup view">
            <img src="assets/photographers/${media.photographerId}/${media.image}" alt="${media.alt}">
        </a>
        <div class="card-header">
            <p class="card-header-title">${media.title}</p>
            <div class="card-header-like" role="button" data-likes=${media.id}>
                <span class="counter" data-likes-count>${media.likes}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="likes"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/></svg>
            </div>
        </div>`;
        console.log(media)
    $wrapperMedia.innerHTML = photographerMediaPage;
    return ($wrapperMedia);
}
// create media card video
function createMediaCardVideo(media){
    const $wrapperMedia = document.createElement('article');
    $wrapperMedia.classList.add('card');
    const photographerMediaPage =`
        <a href="#" class="card-media" aria-label=${media.title}, closeup view">
           
            <video aria-label="${media.alt}" data-lightbox data-lightbox-caption="${media.title}">
                <source src="assets/photographers/${media.photographerId}/${media.video}" type="video/mp4">
            </video>
            <svg class="video-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm280 208c0 6.6-5.4 12-12 12H148c-6.6 0-12-5.4-12-12V124c0-6.6 5.4-12 12-12h216c6.6 0 12 5.4 12 12v264zm104-16c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z"/></svg>
        </a>
        <div class="card-header">
            <p class="card-header-title">${media.title}</p>
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
    const photographerDom = document.getElementById('photograph-header');
    const template = createphotographerPage(photographer);
    console.log(photographer)
    photographerDom.appendChild(template);
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
            
            console.log(media);
            if(media.video){
                const template = createMediaCardVideo(media);
                photographerMediaDom.appendChild(template);
            }else{
                const template = createMediaCardImage(media);
                photographerMediaDom.appendChild(template);
            }
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
                    dataMedia.push(media);
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
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    let photographer = await fetchData(id);
    document.title = 'FishEye ' + photographer.name;
    renderPhotographer( photographer);
    let tabMediaPhotographer = await fetchDataMedia(photographer.id);
    console.log(tabMediaPhotographer)
    //calcule nombre total des likes
    let likeTotalPhotographer = 0;
    for(let i=0;i<tabMediaPhotographer.length; i++){
        likeTotalPhotographer += tabMediaPhotographer[i].likes;
    }
    const likesPhotographer = document.getElementsByClassName("data-likes-count");
    likesPhotographer[0].innerHTML = likeTotalPhotographer 
    renderMediaPhotographer(tabMediaPhotographer);
}

async function init() {
    // Récupère la datas de photographer
     await getPhotographer();
     
  
}

init();
