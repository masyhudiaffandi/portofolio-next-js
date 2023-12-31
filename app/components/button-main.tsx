'use client'
import Link from 'next/link'

const buttons = () => {
    const handleDownload = () => {
        const fileUrl = '@/public/cv.pdf';
            window.open(fileUrl, '_blank');
    }
    return (
        <>
            <button className=' text-md 77md:text-lg px-6 text-center hover:bg-white text-white transition-all hover:text-[#676394] py-2 border border-solid border-white rounded-full' type='button' onClick={handleDownload}>Download CV</button>
        </>

        
    )
}

export default buttons