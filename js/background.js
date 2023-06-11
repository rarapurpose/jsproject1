const images = ["pic4.jpg", "pic5.jpg", "pic6.jpg", "pic8.jpg", "pic9.jpg", "pic10.jpg", "pic11.jpg", "pic12.jpg"];


const chosenImage = images[Math.floor(Math.random() * images.length)]; 

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);


//Math..random()으로 나온 숫자에 images Array의 길이 값을 곱한 숫자를 내림 
//document.createElement("img")만으로 html img를 만든다!
// bgImage.src = `img/${chosenImage}`; 
//html 의 <img src="img/"pic4.jpg/> 랑 같음
//bgImage를 body 내부에 추가
//Element 는 HTML tag들을 가져올 수 있다
