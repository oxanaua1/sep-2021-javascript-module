// 1.
// Отримати відповідь з цього ресурсу, та вивести в документ об'єкти. Застилізувати за допомогою css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(value => {
//         console.log(value);
//         let users = value;
//         let wrapDiv = document.createElement('div');
//         wrapDiv.classList.add('wrap');
//         document.body.appendChild(wrapDiv);
//
//         for (const user of users) {
//
//             let divPost = document.createElement('div');
//             let idDiv = document.createElement('div');
//             let titleH3 = document.createElement('h3');
//             let bodyDiv = document.createElement('div');
//
//             idDiv.innerText = `${user.id}`;
//             titleH3.innerText = `${user.title}`;
//             bodyDiv.innerText = `${user.body}`;
//
//
//             wrapDiv.appendChild(divPost);
//             divPost.append(idDiv, titleH3, bodyDiv);
//
//             divPost.classList.add('post');
//             idDiv.classList.add('idNum')
//
//         }
//
//     });


//     2.
// Отримати відповідь з цього ресурсу, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(value => {
        console.log(value);
        let comments = value;
        let wrapperComment = document.createElement('div');
        wrapperComment.classList.add('wrapperComment');
        document.body.appendChild(wrapperComment);

        for (const comment of comments) {
            let divPost = document.createElement('div');
            let idComment = document.createElement('div');
            let nameComment = document.createElement('h3');
            let emailComment = document.createElement('h4');
            let bodyComment = document.createElement('p');

            nameComment.innerText = `${comment.id} - ${comment.name}`;
            emailComment.innerText = `${comment.email}`;
            bodyComment.innerText = `${comment.body}`;

            wrapperComment.appendChild(divPost);
            divPost.append(idComment, nameComment,emailComment,bodyComment)

        }

    });
