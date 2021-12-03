import {enableBodyScroll, disableBodyScroll} from "../utils/body-scroll-lock.mjs"
export default class Lightbox{

    constructor(url, images){
        this.element = this.buildDOM();
        this.images = images
        this.loadImage(url);
        this.onKeyUp = this.onKeyUp.bind(this);
        document.body.appendChild(this.element);
        disableBodyScroll(this.element);
        document.addEventListener('keyup',this.onKeyUp);
    }
    loadImage(url ){
        this.url = null;
        //this.title= null;
        const image = new Image();
        const container = this.element.querySelector('.lightbox__container');
        const loader = document.createElement('div');
        loader.classList.add('lightbox__loader');
        container.innerHTML = ''
        container.appendChild(loader);
        image.src = url;
        image.onload = ()=>{
           container.removeChild(loader);
           container.appendChild(image);
           this.url = url
           const title = (this.url+"").split("/")[(this.url+"").split("/").length-1]
           const wrapper = this.element.querySelector('.lightbox__title');
            wrapper.innerHTML=(title.split('.'))[0].replaceAll('_',' ')
        }
    }

    onKeyUp(e){
        if(e.key == 'Escape'){
            this.close(e);
        }else if(e.key == 'ArrowLeft'){
            this.prev(e)
        }else if(e.key == 'ArrowRight'){
           this.next(e) 
        }
    }
    //ferme la lightbox
    close(e){
        e.preventDefault();
        this.element.classList.add('fadeOut');
        enableBodyScroll(this.element)
        window.setTimeout(()=>{
            this.element.parentElement.removeChild(this.element)
        }, 500)
        document.removeEventListener('keyup',this.onKeyUp)
    }
    //naviguer vers l'image suivante
    next(e){
        e.preventDefault();
        let i = this.images.findIndex(image => image === this.url)
        if(i=== this.images.length -1){
            i= -1
        }
        this.loadImage(this.images[i+1])
    }
    //naviguer vers l'image precedante
    prev(e){
        e.preventDefault();
        let i = this.images.findIndex(image => image === this.url)
        if(i=== 0){
            i= this.images.length
        }
        this.loadImage(this.images[i-1]) 
    }

    buildDOM(){
        const dom = document.createElement('div');
        dom.classList.add('lightbox');
        dom.innerHTML=`
        <div class="lightbox__wrapper" aria-label="image closeup view">
            <button class="lightbox__close"aria-label="Fermer"></button>
            <button class="lightbox__next" aria-label="Suivant"></button>
            <button class="lightbox__prev"  aria-label="Précédent"></button>
            <div class="lightbox__container">
    
            </div>
            <h2 class="lightbox__title" ></h2>
        </div>`;
        dom.querySelector('.lightbox__close').addEventListener('click', this.close.bind(this));
        dom.querySelector('.lightbox__next').addEventListener('click', this.next.bind(this));
        dom.querySelector('.lightbox__prev').addEventListener('click', this.prev.bind(this));
        return dom;
    }
}
