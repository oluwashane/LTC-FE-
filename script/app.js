const requestForm = document.querySelector('#form');

requestForm.addEventListener('submit', (e) => {

    // User details
    const data = {
        fullName: document.querySelector('#fullName').value,
        email: document.querySelector('#email').value,
        message: document.querySelector('#message').value
    }
    
    send_data(data);
    e.preventDefault();
})

const send_data = (data) => {
    fetch('https://newdevltcv3.herokuapp.com/users', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        console.log(result);
        window.location.replace('../next.html');
    })
    .catch((error) => {
        console.log(error)
    })
}
