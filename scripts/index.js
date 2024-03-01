// document.addEventListener("DOMContentLoaded", function () {
//     var h1Element = document.getElementById("hero__h1");
//     h1Element.style.opacity = "1";
//     h1Element.style.transform = "translateY(0)";
// });


function changeIcon() {
    const checkInput = document.getElementById("check");
    const menuIcon = document.getElementById("menuicon");  // Corregido a getElementById

    if (checkInput.checked) {
        menuIcon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
      </svg>`;
    } else {
        menuIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="30"
        height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none"
        stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 6l16 0" />
        <path d="M4 12l16 0" />
        <path d="M4 18l16 0" />
    </svg>`;
    }
}