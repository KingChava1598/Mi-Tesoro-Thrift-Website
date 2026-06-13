const desktopPictures = document.querySelectorAll(".pictureVariant");
const mobilePictures = document.querySelectorAll(".mobilePictureVariant");

const zoomPic = document.querySelector(".zoomPic");
const pictureDescription = document.querySelector(".pictureDescription");

const picturePopup = document.querySelector("#picturePopup");
const popupImage = document.querySelector("#popupImage");
const popupDescription = document.querySelector("#popupDescription");
const closePopup = document.querySelector("#closePopup");

/* Desktop behavior: update the zoom section */
desktopPictures.forEach(function (picture) {
    picture.addEventListener("click", function () {
        zoomPic.src = picture.src;
        zoomPic.alt = picture.alt;
        pictureDescription.textContent = picture.alt;
    });
});

/* Mobile behavior: open the popup */
mobilePictures.forEach(function (picture) {
    picture.addEventListener("click", function () {
        popupImage.src = picture.src;
        popupImage.alt = picture.alt;
        popupDescription.textContent = picture.alt;

        picturePopup.classList.add("active");
    });
});

/* Close popup with X button */
closePopup.addEventListener("click", function () {
    picturePopup.classList.remove("active");
});

/* Close popup by tapping the dark background */
picturePopup.addEventListener("click", function (event) {
    if (event.target === picturePopup) {
        picturePopup.classList.remove("active");
    }
});

/* Close popup with Escape key */
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        picturePopup.classList.remove("active");
    }
});