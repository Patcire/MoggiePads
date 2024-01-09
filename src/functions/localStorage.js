export const getLocalStorage = (key) =>{

    let storage = localStorage.getItem(key)

    if (localStorage.getItem(key) === null){
        storage = []
    }

    storage =JSON.parse(localStorage.getItem(key))

    return storage
}

export const saveUserInLocalStorage = (key, user) => {
    let storage = getLocalStorage(key)

    if (storage === null){
        storage= []
    }

    const existed = storage.includes(element => element.email === user.email)

    if (existed) return false
    storage.push(user)
    console.log(user)
    console.log(storage)
    localStorage.setItem('users', JSON.stringify(storage))
    return true
}