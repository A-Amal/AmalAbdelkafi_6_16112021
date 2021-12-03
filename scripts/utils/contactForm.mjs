

export function displayModal(modal) {
    modal.setAttribute('aria-hidden', 'false');
	modal.style.display = "block";
    
}


export function closeModal(modal) {
    modal.setAttribute('aria-hidden', 'true');
    window.setTimeout(()=>{
        modal.style.display = "none";
    }, 500)

}
export function validateMoadal(){
    let erreur = false;
    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    let ErreurFirst = document.getElementById("erreurFirstname");
    let ErreurLast = document.getElementById("erreurLastname");
    let ErreurEmail = document.getElementById("erreurEmail");
    let ErreurMessage = document.getElementById("erreurMessage")
    // eslint-disable-next-line no-useless-escape
    let mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    // Field firstname must have a minimum 2 characters and can not be empty
    if(firstname.value.length < 2){
      ErreurFirst.style.display ="block";
      ErreurFirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
      firstname.style.border="3px red solid";
      erreur = true;
    }else{
      firstname.style.border="3px rgb(83, 156, 83) solid";
      ErreurFirst.style.display ="none";
    }
  
    // Field lastname must have a minimum 2 characters and can not be empty
    if(lastname.value.length < 2){
      ErreurLast.style.display ="block";
      ErreurLast.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
      lastname.style.border="3px red solid";
      erreur = true;
    }else{
      lastname.style.border="3px rgb(83, 156, 83) solid";
      ErreurLast.style.display ="none";
    }
  
    // Field email must be a valid email
    if(email.value.length === 0 || !email.value.match(mailRegex)){
      ErreurEmail.style.display ="block";
      ErreurEmail.innerHTML = "Veuillez entrer une adresse mail valide.";
      email.style.border="3px red solid";
      erreur = true;
    }else{
      email.style.border="3px rgb(83, 156, 83) solid";
      ErreurEmail.style.display ="none";
    }
  
    // Field message must be must have a minimum 5 characters and can not be empty
    if(message.value.length < 5 ){
        ErreurMessage.style.display ="block";
        ErreurMessage.innerHTML = "Veuillez entrer minimum 5 caractères ou plus pour le champ du message.";
        message.style.border="3px red solid";
        erreur = true;
      }else{
        message.style.border="3px rgb(83, 156, 83) solid";
        ErreurMessage.style.display ="none";
      }

    if(!erreur){
        console.log(firstname.value , lastname.value, email.value, message.value);
    }
  }
  