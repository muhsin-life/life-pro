'use client'
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { usePathname } from 'next/navigation';


const ImgPage = ({ sectionData, isDesktop, isMobile, m_width, m_height }) => {
    const pathname = usePathname();

    return <>
   
        <Link href={sectionData.type_key === 'category' ? `${pathname}/products?categories=${sectionData.slug}` : `${pathname}/${sectionData.slug}`} >
            <Image src={isDesktop ? sectionData.desktop.image_url : sectionData.mobile.image_url} className={`mx-auto brightness-100 hover:brightness-105 transition-all duration-400 ${isDesktop ? 'max-w-full' : 'w-full'}`}
                height={isDesktop ? (sectionData.desktop.height ? sectionData.desktop.height : 109) : (sectionData.mobile.height ? sectionData.mobile.height : m_height ? m_height : 100)}
                width={isDesktop ? (sectionData.desktop.width ? sectionData.desktop.width : 390) : sectionData.mobile.width ? sectionData.mobile.width : m_width ? m_width : 100} alt={sectionData.slug} />
        </Link>
    </>

}

export default ImgPage