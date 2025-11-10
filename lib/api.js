
export const link = process.env.NEXT_PUBLIC_API_URL
export const getCommonApi = async (url) => {
    try {
        const res = await fetch(`${link}${url}`, {
            headers: {
                "Content-Type": "application/json",
            }
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}