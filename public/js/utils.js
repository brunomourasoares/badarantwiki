// Create Button Back to Top
const backToTop = document.getElementById('footer');
const button = document.createElement('button');
button.setAttribute('type', 'button');
button.setAttribute('id', 'btn-back-to-top');
button.classList.add('btn', 'btn-floating', 'btn-lg');
button.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
</svg>
`
backToTop.append(button);

// Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", btt);

function btt() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
