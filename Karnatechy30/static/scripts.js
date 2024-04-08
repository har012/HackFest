$(document).ready(function() {
    $('.menu-toggle').on('click', function() {
        $('.nav').toggleClass('showing');
        $('.nav ul').toggleClass('showing');
    });

    $('.post-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
      });
});


// POST PAGE
const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");

inputFile.addEventListener("change", uploadImage);

function uploadImage() {
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    imageView.style.backgroundImage = `url(${imgLink})`;
    imageView.textContent = "";
    imageView.style.border = 0;
}

dropArea.addEventListener("dragover", function(e) {
    e.preventDefault();
});
dropArea.addEventListener("drop", function(e) {
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadImage();
});