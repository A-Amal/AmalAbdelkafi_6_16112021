    async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
       
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
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const photographers  = await getPhotographers();
        displayData(photographers);
    }
    
    init();
    