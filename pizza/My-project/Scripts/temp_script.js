let cart = document.querySelectorAll('.btns');

for(i = 0; i < cart.length; i++) {
    cart[i].addEventListener('click', () =>{
        alert("Button clicked")
    })
}