/*const scriptURL = 'https://script.google.com/macros/s/AKfycbzXDCzbh0aCpUR_zvvwXs5KDD8blvc67n2SgQh9j5_8-G39pVixxIsOQZcGRuFi0UwY/exec';

const form = document.forms['evaluationForm'];

form.addEventListener('submit', e => { // Corrigé 'submitForm' en 'submit'
   e.preventDefault();
   fetch(scriptURL, { method: 'POST', body: new FormData(form) })
       .then(response => alert("Merci ! Votre formulaire a été soumis avec succès."))
       .then(() => { window.location.reload(); })
       .catch(error => console.error('Erreur !', error.message));
}); 


const scriptURL = 'https://script.google.com/macros/s/AKfycbzXDCzbh0aCpUR_zvvwXs5KDD8blvc67n2SgQh9j5_8-G39pVixxIsOQZcGRuFi0UwY/exec';
const form = document.forms['evaluationForm'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => response.json())
        .then(data => {
            alert("Merci ! Votre formulaire a été soumis avec succès.");
            window.location.reload();
        })
        .catch(error => console.error('Erreur !', error.message));
});
*/


const scriptURL = 'https://script.google.com/macros/s/AKfycbzXDCzbh0aCpUR_zvvwXs5KDD8blvc67n2SgQh9j5_8-G39pVixxIsOQZcGRuFi0UwY/exec';
const form = document.forms['evaluationForm'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => response.json())
        .then(data => {
            document.getElementById('responseMessage').innerText = "Merci ! Votre formulaire a été soumis avec succès.";
            window.location.reload(); // Facultatif
        })
        .catch(error => {
            console.error('Erreur !', error.message);
            document.getElementById('responseMessage').innerText = "Erreur lors de la soumission du formulaire.";
        });
});
