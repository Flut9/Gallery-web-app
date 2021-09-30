class Modal{

    render(){
        const html = `
            <div class="modal__section">
                <div class="modal__col_1">
                    <img src="https://picsum.photos/id/238/300/200" alt="" class="modal__img">
                </div>
                <div class="modal__col_2">

                </div>
                <div class="modal__close-btn">
                    <span></span>
                    <span></span>
                </div>
            </div>
        `

        ROOT_MODAL.innerHTML += html;
    }


    openModalWindow(event){
        modalBlock.render();
        formBlock.render();  //Рендерим форму в модальном окне

        let modalImg = ROOT_MODAL.querySelector('img');
        modalImg.setAttribute('src', event.target.getAttribute('src'));
        modalImg.setAttribute('id', event.target.getAttribute('id'));
        ROOT_MODAL.classList.add('active');
        document.body.style.overflowY = 'hidden';
        
        commentsBlock.render(); //Рендерим список комментариев в модальном окне

        const closeBtn = document.querySelector('.modal__close-btn');
        closeBtn.addEventListener('click', modalBlock.closeModalWindow);
    } //Открытие модального окна

    closeModalWindow(){
        ROOT_MODAL.classList.remove('active');
        ROOT_MODAL.innerHTML = '';
    } //Закрытие модального окна

}

const modalBlock = new Modal();