class Comments{

    async render(){
        const html = `
            <ul class="modal__comments comments"></ul>
        `
        
        const commentsColumn = document.querySelector('.modal__col_2');
        commentsColumn.innerHTML += html;

        async function getData(){
            const modalImgId = ROOT_MODAL.querySelector('.modal__img').getAttribute('id');

            let response = await fetch(`https://boiling-refuge-66454.herokuapp.com/images/${modalImgId}`);

            if (!response.ok){
                throw new Error(`Ошибка по адресу https://boiling-refuge-66454.herokuapp.com/images/${modalImgId}!`);
            }

            let obj = await response.json();
            let comments = obj.comments;
            
            for (let item of comments){
                const date = new Date(item.date);
                ROOT_MODAL.querySelector('.modal__comments').innerHTML += `
                    <li class="comments__item">
                        <span class="comments__date">${date.getDate()}.${date.getMonth()}.${date.getFullYear()}</span>
                        <span class="comments__text">${item.text}</span>
                    </li>
                `
            }
        } //Получение и вывод комментариев

        getData();
    }

    
}

const commentsBlock = new Comments();