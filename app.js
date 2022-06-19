// Background animation
const curve = document.querySelector(".curve");
window.addEventListener('mousemove', e => {
    let x = -(e.x - window.innerWidth / 2) / window.innerWidth * 12;
    let y = -(e.y - window.innerHeight / 2) / window.innerHeight * 6;
    curve.style.transform = "translate(" + x + "%, " + y + "%)";
})

// Getting cards
const cardsList = document.querySelectorAll(".grid-design");
const mainCard = document.querySelector(".card");

// Main card design showcase
let lastIndex = -1;
if (cardsList.length > 0) {
    const interval = setInterval(() => {
        let i;
        do {
            i = Math.floor(Math.random() * (cardsList.length)); //Avoiding same picture over two cycles
        } while (i == lastIndex)
        mainCard.style.backgroundImage = "url(" + cardsList[i].src + ")";
        lastIndex = i;
    }, 1000);
}

//Change card bg
const displayCard = document.querySelector(".display");
cardsList.forEach(el => {
    el.addEventListener("click", function (event) {
        displayCard.style.backgroundImage = "url(" + this.src + ")";
    });
});

//Change card by upload
document.querySelectorAll(".file").forEach(inputElement => {
    const dropArea = inputElement.closest(".drop-area");

    dropArea.addEventListener("click", (e) => {
        inputElement.click();
    });

    inputElement.addEventListener("change", (e) => {
        if (inputElement.files.length) {
            console.log(inputElement.files)
            updateCard(inputElement.files[0]);
        }
    });

    dropArea.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropArea.classList.add("drop-area__over");
    });

    ["dragleave", "dragend"].forEach((type) => {
        dropArea.addEventListener(type, (e) => {
            dropArea.classList.remove("drop-area__over");
        });
    });

    dropArea.addEventListener("drop", (e) => {
        e.preventDefault();
        if (e.dataTransfer.files.length == 1) {
            inputElement.files = e.dataTransfer.files;
            updateCard(inputElement.files[0])
        }
        dropArea.classList.remove("drop-area__over");
    });

});

function updateCard(fileData) {
    const displayUpload = document.querySelector(".upload-display");
    let fileReader = new FileReader();

    fileReader.onload = function (event) {
        displayUpload.style.backgroundImage = "url(" + event.target.result + ")";
    }
    fileReader.readAsDataURL(fileData);
}

//Back to top
const topButton = document.querySelector(".topBtn");
topButton.addEventListener("click", () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
window.onscroll = () => {
    if (document.body.scrollTop > window.innerHeight / 2 || document.documentElement.scrollTop > window.innerHeight / 2) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

