//GET

// fetch('https://jsonplaceholder.typicode.com/users?_limit=2', {
//     method: 'GET'
// })
//     .then((res) => {
//         if (res.status !== 200) {
//             throw Error(res.status);
//         }

//         return res.json()
//     })
//     .then((data) => console.log(data))
//     .catch((err) => console.log('err', err))


// POST
// const newUser = {
//     name: 'Iulian Familiy',
//     username: 'Grimm'
// }

// fetch('https://jsonplaceholder.typicode.com/users', {
//     method: 'POST',
//     body: JSON.stringify(newUser),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     }
// })
// .then((res) => res.json())
// .then((data => console.log(data)))

//PUT

// fetch('https://jsonplaceholder.typicode.com/users/1', {
//     method: 'PUT',
//     body: JSON.stringify(newUser),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     }
// })
// .then((res) => res.json())
// .then((data => console.log(data)))


//DELETE

// fetch('https://jsonplaceholder.typicode.com/users/1', {
//     method: 'DELETE',
// })
// .then((res) => res.json())
// .then((data => console.log(data)))
const root = document.getElementById('root')

const renderItems = (list) => {
    list.forEach((item) => {
        const element = document.createElement('div')
        element.innerText = `${item.id} name: ${item.name}`
        root.appendChild(element)
    })
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        if (res.status !== 200) {
            throw Error(res.status);
        }

        return res.json()
    })
    .then((data) => {
        renderItems(data)
    })
    .catch((err) => console.log('err', err))
