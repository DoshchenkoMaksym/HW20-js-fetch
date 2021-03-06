let selectList = document.querySelector('.albums__list');
let photosGallery = document.querySelector('.photos__gallery');
getAlbums().then(() => getPhotos(1));


async function getAlbums() {
    let albums = await fetch('https://jsonplaceholder.typicode.com/albums');
    let albumsArr = await albums.json();
    selectList.innerHTML = albumsArr.map(data => {
        return `<li  class="albums__list-item" data-id="${data.id}">${data.id}. Album title: "${data.title}"</li>`;
    }).join('');
};

async function getPhotos(id) {
    let photos = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
    let photosArr = await photos.json();
    photosGallery.innerHTML = photosArr.map(data => {
        return `<img class="photos__img" src="${data.thumbnailUrl}"></img>`;
    }).join('');
};

selectList.addEventListener('click', (event) => getPhotos((event.target.getAttribute('data-id'))));

