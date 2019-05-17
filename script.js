const cards = document.querySelectorAll('#card_container');

let has_flipped_card = false;
let first_card;
let second_card;

function flip_Card(){
    this.classList.toggle('flip');

    if(!has_flipped_card){
        has_flipped_card = true;
        first_card = this;
        // console.log(has_flipped_card, first_card);                
    } else {
        has_flipped_card = false;
        second_card = this;

        if(first_card.dataset.framework === second_card.dataset.framework){
            first_card.removeEventListener('click', flip_Card);
            second_card.removeEventListener('click', flip_Card);
        } else {
           setTimeout(() => {
            first_card.classList.remove('flip');
            second_card.classList.remove('flip');
           }, 1500);
        }
    }
}

(function shuffle_cards(){
    cards.forEach(card => {
        let random_position = Math.floor(Math.random() * 20 );
        card.style.order = random_position;
    });
})();  
cards.forEach(card => card.addEventListener('click', flip_Card));