class Form{

    async render(){
        const html = `
            <form action="" class="modal__form form">
                <input type="text" class="form__name" placeholder="Ваше имя">
                <input type="text" class="form__comment" placeholder="Ваш комментарий">
                <button class="form__submit">Оставить комментарий</button>
            </form>
        `

        const formColumn = document.querySelector('.modal__col_1');
        formColumn.innerHTML += html;

        const submitBtn = document.querySelector('.form__submit');
        const inputComment = document.querySelector('.form__comment');
        let comment = {         
            id: '',
            date: '',
            text: '',
        }

        // async function sendData(data){
        //     const modalImgId = ROOT_MODAL.querySelector('img').getAttribute('id');
        //     let response = await fetch(`https://boiling-refuge-66454.herokuapp.com/images/${modalImgId}/comments`, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json;charset=utf-8'
        //           },
        //         body: JSON.stringify(data),
        //     })

        //     return await response.json();   
        // } //Отправка комментария

        async function getData(){
            const modalImgId = ROOT_MODAL.querySelector('img').getAttribute('id');

            let response = await fetch(`https://boiling-refuge-66454.herokuapp.com/images/${modalImgId}`);
            let comments = await response.json();
            console.log(comments.comments);

            console.log(comments);
            // return await response.json();
        }

        submitBtn.addEventListener('click', function(event){
            event.preventDefault();
            
            const date = new Date();
            
            comment.text = inputComment.value;
            comment.id = ROOT_MODAL.querySelector('.modal__img').getAttribute('id');
            comment.date = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;

            // sendData(comment);
            // console.log(comment);
            getData()
            // console.log(getData());
        });

    }
}

const formBlock = new Form();