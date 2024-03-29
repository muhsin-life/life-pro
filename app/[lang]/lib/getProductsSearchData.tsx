export default async function getProductsSearchData(term, noOfProducts) {
    const api = `https://prodapp.lifepharmacy.com/api/v2/search${term!=""?`?term=${term}`:''}&order_by=popularity&type=cols&skip=${noOfProducts}&take=40&new_method=true&lang=ae-en`
    console.log(api);
    
    const res = await fetch(api)
    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}