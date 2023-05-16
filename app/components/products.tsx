import "server-only"
import getProductsData from "../[lang]/lib/getProductsData";
import ProductsSlider from "./products-slider";

export default async function Products({ lang, slug, type_key }: {
    lang: string;
    slug: string;
    type_key: string;
}): Promise<JSX.Element> {

    const proData = await getProductsData(lang, slug, type_key)

    return (
        <ProductsSlider proData={proData.data.products} />
    )
}

