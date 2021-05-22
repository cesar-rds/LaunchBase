const modalOverlay = document.querySelector('.model-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards){
    card.addEventListener("click", function(){
        modalOverlay.classList.add('active')

    })
}

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active')
});