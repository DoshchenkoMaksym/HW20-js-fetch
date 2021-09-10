let selectList = document.querySelector('.albums__list');
let photosGallery = document.querySelector('.photos__gallery');
getAlbums().then(() => getPhotos(selectList.value));



async function getAlbums() {
    let albums = await fetch('https://jsonplaceholder.typicode.com/albums');
    let albumsArr = await albums.json();
    selectList.innerHTML = albumsArr.map(data => {
        let li = `<option  class="albums__list-item" value="${data.id}">${data.id}. Album title: "${data.title}"</option>`;
        return li;
    }).join('');
};

async function getPhotos(id) {
    let photos = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
    let photosArr = await photos.json();
    photosGallery.innerHTML = photosArr.map(data => {
        let img = `<img class="photos__img" src="${data.thumbnailUrl}"></img>`;
        return img;
    }).join('');
};

selectList.addEventListener('change', () => getPhotos(selectList.value));

