

const images = [

    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg',
    'images/pic-8.jpg',
    'images/pic-9.jpg'
];

let imageIndex = 0;

const imageElement = document.getElementById('imageElement');

setInterval(() => {
    const imageUrl = images[imageIndex];
    // console.log(imageIndex, imageUrl);
    imageElement.setAttribute('src', imageUrl)
    imageIndex < 8 ? imageIndex++ : imageIndex = 0;

}, 2000);