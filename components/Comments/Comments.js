class Comments{

    async render(){
        let date = new Date();
        const html = `
            <ul class="modal__comments comments">
                <li class="comments__item">
                    <span class="comments__date">${date.getFullYear()}.${date.getMonth()}.${date.getDate()}</span>
                    <span class="comments__text">Comment text</span>
                </li>
                <li class="comments__item">
                    <span class="comments__date">16.08.2020</span>
                    <span class="comments__text">Comment text</span>
                </li>
                <li class="comments__item">
                    <span class="comments__date">16.08.2020</span>
                    <span class="comments__text">LoremLorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem et illo cupiditate optio praesentium accusamus odio rerum. Eligendi totam cumque tempora, enim tempore vero maxime magnam maiores voluptate tenetur! Non!
                    Laborum dolor repudiandae iusto quasi illum pariatur aliquid ipsam sapiente molestiae, harum, maiores dolorum perferendis unde veritatis dignissimos. Eius, quasi. Labore, voluptatum? Architecto necessitatibus labore soluta ipsam rem doloribus debitis.
                    Illo, ut at eius, quo ipsam atque laboriosam deleniti qui recusandae animi sequi quis, quam esse est magnam natus voluptates quibusdam exercitationem. Ratione cupiditate quaerat soluta velit sit voluptatum praesentium!
                    Sed sunt natus aperiam. Aliquid, vel rerum, beatae inventore doloribus illum ipsam esse dolor aperiam, necessitatibus minima debitis distinctio ad? Velit quis, vero iste recusandae est voluptate praesentium eveniet nihil.</span>
                </li>
            </ul>
        `
        
        const commentsColumn = document.querySelector('.modal__col_2');
        commentsColumn.innerHTML += html;

    }

    // async getComments(url){
        
    // }
}

const commentsBlock = new Comments();