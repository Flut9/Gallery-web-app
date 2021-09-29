// let comments = [];

// document.querySelector('button').addEventListener('click', function(event){
//     event.preventDefault();
//     let commentName = document.querySelector('input');

//     let comment = {
//         time: new Date(),
//         name: commentName.value,
//     }
    
//     commentName.value = '';

//     comments.push(comment);
//     console.log(comment);
// })

// async function getResponse(){
//     let response = await fetch('https://boiling-refuge-66454.herokuapp.com/images');
//     let images = await response.json()
    
//     for (let item of images){
//         console.log(item.url);
//     }
// }

// getResponse()