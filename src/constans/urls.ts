const baseURL = 'https://dummyjson.com'
const products = '/products'
const category = '/category'

const vehicle = '/vehicle'


const urls = {
    car: {
        base: `${products}${category}${vehicle}`,
        byId: (id: number) => `${products}/${id}`

    }
}
export {
    baseURL,
    urls
}