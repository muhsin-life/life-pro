import PageStructure from '../../components/page-structure'
import getHomePageData from '../lib/getHomePageData'
import Products from '../../components/products'


export default async function UsersPage({ params }) {
    const data_res = await getHomePageData(params.lang)

    // const pro_data_res = await getProductsData(params.lang)
    // const pro_data = await pro_data_res

    return (
        <div className='max-w-[1450px] px-[10px] mx-auto'>
            {
                data_res.data.content.map((data, ind) => (
                    <PageStructure data={data} lang={params.lang} setLoading={ind === 0 ? true : false}>
                        { /* @ts-expect-error Async Server Component */}
                        <Products lang={params.lang} slug={data.section_data_object?.slug} type_key={data.section_data_object?.type_key} />
                    </PageStructure>))
            }
        </div>
    )
}
