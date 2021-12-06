import Lightbox from "./lightbox.mjs";
import {displayModal, closeModal, validateMoadal} from "../utils/contactForm.mjs"
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
function createMediaCardImage(media){
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
function createMediaCardVideo(media){
    const $wrapperMedia = document.createElement('article');
    $wrapperMedia.classList.add('card');
    const photographerMediaPage =`
        <a href="assets/photographers/${media.photographerId}/${media.video}" class="card-media" aria-label=${media.title}, closeup view">
           
            <video aria-label="${media.alt}" data-lightbox data-lightbox-caption="${media.title}">
                <source src="assets/photographers/${media.photographerId}/${media.video}" type="video/mp4">
            </video>
            <i class="fas fa-video"></i>
            <!--
            <svg class="video-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm280 208c0 6.6-5.4 12-12 12H148c-6.6 0-12-5.4-12-12V124c0-6.6 5.4-12 12-12h216c6.6 0 12 5.4 12 12v264zm104-16c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z"/></svg>
            -->
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
async function renderPhotographer (photographer) {
    // Header
    const photographerDom = document.getElementById('photograph-header');
    const template = createphotographerPage(photographer);
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
    //calcule nombre total des likes
    let likeTotalPhotographer = 0;
    for(let i=0;i<tabMediaPhotographer.length; i++){
        likeTotalPhotographer += tabMediaPhotographer[i].likes;
    }
    const likesPhotographer = document.getElementsByClassName("data-likes-count");
    likesPhotographer[0].innerHTML = likeTotalPhotographer 
    renderMediaPhotographer(tabMediaPhotographer);
    const listOptions =document.getElementById("list");
    listOptions.addEventListener('click',()=>{
        let orderSort = getSelectValue();
    console.log(orderSort)
    if(orderSort){
        const tabMediaPhotographerSort = applyFilter(tabMediaPhotographer, orderSort);
        const photogarpherMedia = document.getElementById("photographer-media")
        while(photogarpherMedia.firstChild){
            photogarpherMedia.removeChild(photogarpherMedia.firstChild)
        } 
        renderMediaPhotographer(tabMediaPhotographerSort);
    }
    })
    
}
//trier media par titre
function applyOrderByTitle (medias) {
   return medias.sort((a, b) => a.title < b.title ? -1 : 0);
}
//trier media par date
function applyOrderByDate (medias) {
    return medias.sort((a, b) => new Date(b.date) - new Date(a.date));
}
//trier media par likes
function applyOrderByLikes (medias) {
    return medias.sort((a, b) => b.likes - a.likes);
}
//appliquer filtre
function  applyFilter (medias, order) {
    let filtered = applyOrderByTitle(medias);
    if (order == 'rate') filtered = applyOrderByLikes(filtered);
    else if (order == 'date') filtered = applyOrderByDate(filtered);
    return filtered;
}
function getSelectValue()
    {   let valueOrder =""
        let selectedValue = document.getElementsByTagName('select');
        console.log(selectedValue[0].options)
        for(let i=0; i<selectedValue[0].options.length; i++){
            if(selectedValue[0].options[i].selected === true){
                valueOrder = selectedValue[0].options[i].value
                console.log(valueOrder)
            }
        }
        return valueOrder;
    }

async function init() {
    // Récupère la datas de photographer
    await getPhotographer();
    //modifier le nblikes on click
    const cards = Array.from(document.getElementsByClassName("card-header-like"));
    cards.forEach(card => card.addEventListener('click', e => {
        e.preventDefault();
        let nblike = e.currentTarget.getElementsByClassName('counter')
        console.log(nblike[0])
        console.log(parseInt(nblike[0].getAttribute("value"))+1)
        const likes =parseInt(nblike[0].getAttribute("value"))+1;
        card.removeChild(nblike[0]);
        const newElementLike = `<span class="counter" value="${likes}" data-likes-count>${likes}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="likes"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/></svg>`
        card.innerHTML=newElementLike;
        
        const nbTotalLikes= document.getElementsByClassName("data-likes-count");
        const containerNbTotalLikes = document.getElementsByClassName("priceandlike-like");
        console.log(nbTotalLikes[0])
        console.log(parseInt(nbTotalLikes[0].textContent))
        let newValTotalLikes = parseInt(nbTotalLikes[0].textContent) +1;
        containerNbTotalLikes[0].removeChild(nbTotalLikes[0]);
        const newTotalLike = `<span class="data-likes-count">${newValTotalLikes}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="likes"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/></svg>`
        containerNbTotalLikes[0].innerHTML = newTotalLike
    }))
    const links =Array.from( document.querySelectorAll('a[href$=".jpg"]'));
    const gallery = links.map(link =>link.getAttribute('href'));
    links.forEach(link=> link.addEventListener('click', e => {
        e.preventDefault();
        new Lightbox(e.currentTarget.getAttribute("href"), gallery)
        
    }));
    const contactBtn = document.getElementsByClassName("contact_button")
    const btnCloseModal =document.getElementsByClassName("modal-close")
    const modal = document.getElementById("modal-contact");
    contactBtn[0].addEventListener('click', () =>{
        displayModal(modal)
        btnCloseModal[0].focus();
    })
    btnCloseModal[0].addEventListener('click', () =>{
        btnCloseModal[0].focus();
        modal.setAttribute('aria-hidden', 'true');
        closeModal(modal)
    })
    document.addEventListener('keyup',(e)=>{
        if(e.key == 'Escape'){
            modal.style.display = "none";
        }
    })
    const modalcontent=document.querySelector('form')
    modalcontent.addEventListener("click", validateMoadal);
}

init();
