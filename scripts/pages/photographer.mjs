import {createphotographerPage, createMediaCardImage,createMediaCardVideo} from "../templates/photographerFactory.mjs"
import Lightbox from "./lightbox.mjs";
import {displayModal, closeModal, validateMoadal} from "../utils/contactForm.mjs"
import {applyFilter} from "../utils/triMedias.mjs"

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
    calculNbLikesTotal(tabMediaPhotographer)
    renderMediaPhotographer(tabMediaPhotographer);
    const listOptions =document.getElementById("list");
    listOptions.addEventListener('click',()=>{
        let orderSort = getSelectValue();
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
function calculNbLikesTotal(tabMediaPhotographer){
    let likeTotalPhotographer = 0;
    for(let i=0;i<tabMediaPhotographer.length; i++){
        likeTotalPhotographer += tabMediaPhotographer[i].likes;
    }
    const likesPhotographer = document.getElementsByClassName("data-likes-count");
    likesPhotographer[0].innerHTML = likeTotalPhotographer 
}

function getSelectValue()
    {   let valueOrder =""
        let selectedValue = document.getElementsByTagName('select');
        for(let i=0; i<selectedValue[0].options.length; i++){
            if(selectedValue[0].options[i].selected === true){
                valueOrder = selectedValue[0].options[i].value
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
        const likes =parseInt(nblike[0].getAttribute("value"))+1;
        card.removeChild(nblike[0]);
        const newElementLike = `<span class="counter" value="${likes}" data-likes-count>${likes}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="likes"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/></svg>`
        card.innerHTML=newElementLike;
        
        const nbTotalLikes= document.getElementsByClassName("data-likes-count");
        const containerNbTotalLikes = document.getElementsByClassName("priceandlike-like");
        let newValTotalLikes = parseInt(nbTotalLikes[0].textContent) +1;
        containerNbTotalLikes[0].removeChild(nbTotalLikes[0]);
        const newTotalLike = `<span class="data-likes-count">${newValTotalLikes}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="likes"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/></svg>`
        containerNbTotalLikes[0].innerHTML = newTotalLike
    }))
    const containerMedia = document.getElementById("photographer-media")
    const links =Array.from( containerMedia.querySelectorAll('a[href]'));
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
