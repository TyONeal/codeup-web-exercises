const getUser = async(username) => {
    const url = `https://api.github.com/users/${username}/events`;
    const options = {headers: {'Authorization': PROMISES_TOKEN}}


    const response = await fetch(url, options)
    const data = await response.json();
                return data;

}

(async() => {
    let textSubmit = document.querySelector('.text-box');
    textSubmit.addEventListener('keyup', async(e) => {
        console.log(e.code);
        if (e.code === 'Enter') {
            const userSearch = await getUser(textSubmit.value);
                const filteredSearch = userSearch.filter(pushEvent => {
                    return pushEvent.type === 'PushEvent';
                })
                console.log(filteredSearch[0].created_at);
                alert(filteredSearch[0].payload.commits[0].message);
        }
    })
})();