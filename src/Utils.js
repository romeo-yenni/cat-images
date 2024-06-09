
export const getCat = (url, updateImage, setIsLoading) => {
    setIsLoading(true)
    fetch(url)
    .then(res => {
        if (!res.ok) {
            throw new Error('Network response was not ok ' + res.statusText)           
        }
        return res.blob();
    })
    .then(blob => {
        const imgUrl = URL.createObjectURL(blob)
        updateImage(imgUrl)
        setIsLoading(false)
    })
    .catch(error => console.error('error fetching', error))
}