const pictureVariants = document.querySelectorAll(".pictureVariant");
const zoomPic = document.querySelector(".zoomPic");
const pictureDescription = document.querySelector(".pictureDescription");

pictureVariants.forEach(function (picture) {
    picture.addEventListener("click", function () {
        zoomPic.src = picture.src;
        zoomPic.alt = picture.alt;

        pictureDescription.textContent = picture.alt;
    });
});