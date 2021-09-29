class Gallery{

    async getResponse(){
        const galleryImages = document.querySelector('.gallery__images');

        //Забираем картинки с сервера и выводим в блок .gallery__images
        let response = await fetch('https://boiling-refuge-66454.herokuapp.com/images');
        let imgs = await response.json();  
        for (let item of imgs){
            galleryImages.innerHTML += `<img class="images__item" id="${item.id}" src="${item.url}">`;
        }

        //Добавляем вызов модального окна при клике на картинки
        const images = document.querySelectorAll('.images__item');
        for (let item of images){
            item.addEventListener('click', modalBlock.openModalWindow);
        }
    }

    render(){       

        const html = `
            <h1 class="gallery__title">TEST APP</h1>
            <div class="gallery__images images"></div>
        `
        ROOT_GALLERY.innerHTML += html;
    }


}


const galleryBlock = new Gallery();
galleryBlock.render();
galleryBlock.getResponse();