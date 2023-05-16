export default async function getCategoryData(lang) {
    const res = await fetch(`https://prodapp.lifepharmacy.com/api/categories?lang=${lang}`)

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}