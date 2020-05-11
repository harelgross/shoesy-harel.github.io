const progressBar = document.body.querySelector("#progress");

document.addEventListener('scroll',function() {
    const distanceTop = window.pageYOffset;
    const pageHeight = document.body.scrollHeight - window.innerHeight;

    progressBar.style.width = 100 * (distanceTop / pageHeight) + '%';
    console.log('Works in Chrome!');
   
});