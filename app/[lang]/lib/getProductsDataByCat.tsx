
export default async function getProductsDataByCat(cat, type, noOfProducts) {
    const urlPath =`https://prodapp.lifepharmacy.com/api/web/products?${cat!=""?`${type}=${cat}&`:""}order_by=popularity&type=cols&skip=${noOfProducts}&take=40&new_method=true&lang=ae-en`;
    // console.log(urlPath);
    
    const res = await fetch(urlPath)

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}