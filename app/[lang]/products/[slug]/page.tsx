
import SingleProductsContent from "../../../components/single-product-page";
import getSingleProductData from "../../lib/getSingleProductData";

export default async function productPage({ params }) {

    const pro_data_res = await getSingleProductData(params.lang, params.slug)
    const pro_data = await pro_data_res.data.product


    return (
        <>
            <SingleProductsContent pro_data={pro_data} lang={params.lang} />
        </>
    )

}