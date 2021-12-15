// 1. Отримати відповідь з цього ресурсу, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        console.log(value);
        let posts = value;
        let wrapper = document.createElement('div');
        document.body.appendChild(wrapper);

        for (const post of posts) {
            let postDiv = document.createElement('div');
            let button = document.createElement('button');
            let postId = document.createElement('h2');
            let postTitle = document.createElement('h3');
            let postBody = document.createElement('p');
            postId.innerText = `${post.id}`;
            postTitle.innerText = `${post.title}`;
            postBody.innerText = `${post.body}`;
            button.innerText = 'Show comments';

            postDiv.classList.add('post')

            button.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then(value => value.json())
                    .then(value => {
                        console.log(value);
                        let commentDiv = document.createElement('div');

                        let comments = value;
                        for (const commentItem of comments) {
                           let comment = document.createElement('div');
                           comment.innerText = commentItem.body;
                           comment.classList.add('comment');

                           commentDiv.appendChild(comment);


                        }

                        postDiv.appendChild(commentDiv);
                    });
            }

            wrapper.appendChild(postDiv);
            postDiv.append(postId, postTitle, postBody,button);


        }


    });