const images = ["pic4.jpg", "pic33.jpg", "pic6.jpg", "pic8.jpg", "pic44.jpg", "pic10.jpg", "pic11.jpg", "pic12.jpg"];


const chosenImage = images[Math.floor(Math.random() * images.length)]; 

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
