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

    const exist = storage.some(element => element.email === user.email)

    if (exist) return false
    storage.push(user)
    localStorage.setItem('users', JSON.stringify(storage))
    return true
}