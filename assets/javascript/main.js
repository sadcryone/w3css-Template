const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const closes = document.querySelectorAll('.js-modal-close');
function openBuyticket(){
    modal.classList.add('open');
}
function hidenBuyticket(){
    modal.classList.remove('open');
}
for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click',openBuyticket );
}
for(const close of closes){
    close.addEventListener('click',hidenBuyticket );
}