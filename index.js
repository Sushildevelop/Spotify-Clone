const reviews = [{
            id: 1,
            info: "Deva Deva [Slowed + Reverb] - Arijit Singh - Lofi Songs",
            img: "/Sound -Images/deva-deva2.jpg",
            audio: "/song/deva deva.mp3"
        },
        {
            id: 2,
            info: "Neele Neele Ambar || Kishore Kumar || Kishore Kumar Hindi Songs",
            img: "/Sound -Images/neel-neel.jpeg",
            audio: "/song/Let Me Down Slowly x Main Dhoondne Ko Zamaane Mein (Gravero Mashup) Full Version.mp3"
        },
        {
            id: 3,
            info: "Kisi ki Muskurahaton Pe Ho - VIDEO SONG | Anari (1959) | Raj Kapoor & Nutan | Mukesh ",
            img: "/Sound -Images/kisi-kisi.jpg",
            audio: "/song/Despacito ft. Daddy Yankee.mp3"
        },
        {
            id: 4,
            info: "Chhu Kar Mere Manko ",
            img: "/Sound -Images/Chookar Mere Mann Ko.jpg",
            audio: "/song/chukar.mp3"
        }

    ]
    // select item

const img = document.getElementById("person-img");
const audio = document.getElementById("audio");
const info = document.querySelector(".info");
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")
const audioAll = document.getElementsByTagName("audio");



let currentItem = 0;

// Load Inital Item

window.addEventListener("DOMContentLoaded", function() {
    showPerson(currentItem);
})

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    audio.src = item.audio;
    info.textContent = item.info;
}

nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
})

prevBtn.addEventListener("click", function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})

randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
})