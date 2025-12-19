/* FORM CONTATTI – Portfolio di Tanzi Chiara

Obiettivo: Gestire l’invio di un form di contatto lato client, 
controllando che i campi siano validi prima dell’invio 
e mostrando messaggi chiari all’utente senza ricaricare la pagina.

*/

//  Aspetto che l’HTML sia completamente caricato
//  Uso DOMContentLoaded per evitare errori e lavorare in sicurezza sul DOM
document.addEventListener("DOMContentLoaded", () => {
  
// Collegamento agli elementi del DOM
const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const alertBox = document.getElementById("formAlert");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");


// Aggiungo una classe CSS is-invalid a un input
// Mostra errore visivo su un campo
function showError(input) {
    input.classList.add("is-invalid");
  }

// Pulisce errori e messaggi precedenti
function clearErrors() {
    [nameInput, emailInput, messageInput].forEach(input => {
      input.classList.remove("is-invalid");
    });
    alertBox.classList.add("d-none");
  }

// Controlla se il form è valido
  function validateForm() {
    let valid = true;

// Value valore inserito, trim rimuove spazi inutili, lenght controlla lunghezza
if (nameInput.value.trim().length < 2) {
      showError(nameInput);
      valid = false;
    }

// controllo base sulla email
if (!emailInput.value.includes("@")) {
      showError(emailInput);
      valid = false;
    }

// validazione messaggio
  if (messageInput.value.trim().length < 10) {
      showError(messageInput);
      valid = false;
    }

    // dice al codice esterno se il form e valido o no
    return valid;
  }

  // Gestione invio form
  form.addEventListener("submit", (e) => {

    // evita il refresh dalla pagina e JS gestisce tutto
    e.preventDefault();
    clearErrors();

    // se il form non è valido, mostra messaggio e blocca invio
    if (!validateForm()) {
      alertBox.textContent = "Compila correttamente tutti i campi.";
      
     
      alertBox.className = "alert alert-danger";
      return;
    }

    // Comunica successo, resetta il form e l'utente capisce che e andata a buon fine
    alertBox.textContent = "Messaggio inviato correttamente!";
    alertBox.className = "alert alert-success";
    form.reset();
  });
});

