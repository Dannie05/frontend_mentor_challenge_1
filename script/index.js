
const set = document.querySelector('.button-div');
set.addEventListener('click', handleClick, false)

function handleClick(e) {
    if (e.target.matches('button')) {
        const {textContent} = e.target;
        const rate = document.querySelector('.rate');
        rate.innerHTML= `You selected ${textContent} out of 5
        ` }    
        
        
}


const submit = document.querySelector('.submit')
const rating = document.querySelector('.main_one')
const thank_you = document.querySelector('.main-two')
submit.addEventListener('click', () => {
    thank_you.classList.remove('hidden');
    rating.classList.add('hidden');
})
