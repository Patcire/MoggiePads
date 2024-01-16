export  const goToTop = () => {

    window.scroll({
        top:0,
        behavior:"smooth"
    })

}

export const showRelativeToPosition = (setShowButtons) => {

    if (scrollY> 200) {
        setShowButtons(prevState => ({
            ...prevState,
            goTop: true}))
        return
    }

    setShowButtons({goTOP:false})

}