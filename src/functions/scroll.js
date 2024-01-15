export   const goToTop = () => {
    window.scroll({
        top:0,
        behavior:"smooth"
    })

}

export const showRelativeToPosition = (setShowButton) => {
    console.log(scrollY)
    if (scrollY> 200) {
        setShowButton(true)
        return
    }
    setShowButton(false)

}