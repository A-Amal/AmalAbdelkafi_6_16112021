
    function createphotographerCard(data) {
        const $wrapper = document.createElement('article')
        const photographerCard = `
            <a href="photographer.html?id=${data.id}" class="photographer-link" tabindex="0" aria-label="${data.name}">
                <div class="photographer-picture">
                    <img src="assets/photographers/Photographers ID Photos/${data.portrait}" alt="photo ${data.name}">
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
    async function getPhotographers() {
        //Recuperer les photographers du fichier photographers.json
           try{
            const response = await fetch("./data/photographers.json");
            const responseData = await response.json();
            console.log(responseData);
            let data = responseData.photographers;
            console.log(data);
            return data;
           }catch (error) {
            console.log(error);
        }
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel =  createphotographerCard(photographer);
            //const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(photographerModel);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const photographers  = await getPhotographers();
        displayData(photographers);
    }
    
    init();
    