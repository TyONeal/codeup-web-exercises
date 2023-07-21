const getUser = (username) => {
    const url = `https://api.github.com/users/${username}/events`;
    const options = {headers: {'Authorization': PROMISES_TOKEN}}


    return fetch(url, options).then((response) => {
        return response.json();

    })
}

(() => {
    let textSubmit = document.querySelector('.text-box');
    textSubmit.addEventListener('keyup', (e) => {
        if (e.code === 'Enter') {
            getUser(textSubmit.value).then((userData)=> {
                console.log(userData);
                alert(userData[0].created_at);
            })
        }
    })







})();