
export const getCat = async (url) => {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error('Network response was not ok ' + res.statusText);
        }
        const blob = await res.blob();
        return URL.createObjectURL(blob);
    } catch (error) {
        console.error('Error fetching:', error);
    }
}

