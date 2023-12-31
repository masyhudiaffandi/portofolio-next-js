import Link from "next/link"
import links from '@/app/lib/data'
import names from '../lib/greet'
import Image from 'next/image'
import Buttons from './button-main'
import GHButtons from "./gh-button"
import LinkButtons from "./in-button"

const Header = () => {
    return (
        <header id="home" className="flex justify-center">
            <nav className="flex items-center rounded-full  md:px-11 py-4 fixed bg-gray-600 bg-opacity-30 backdrop-blur-md border border-white-[0.8px] md:mt-8">
                <ul className="flex gap-16 md:px-0 px-16">
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link href={link.hash}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <section>
                <div className="hero h-[100vh] flex justify-center items-center">
                    <div className="hero-wrapper text-center  flex flex-col justify-center">
                        <div className="image flex justify-center align-center mb-[2vw]">
                            <Image className="bg-white p-[1px] rounded-full" src="/profile.jpg" alt="profile image" width={92} height={92} />
                        </div>
                        {names.map((name) => (
                        <div key={name.name} className="greetings flex flex-col gap-[2vh]">
                            <h1 className="halo text-xl md:text-4xl font-bold">Hello👋I&apos;m {name.name}</h1>
                            <h1 className="greeting text-md md:text-xl md:px-48 px-8">Hello! I&apos;m {name.name}, a <span className="underline text-[16px] md:text-[22px]">Front End Developer</span> weaving magic with <span className="underline text-[16px] md:text-[22px]">Laravel</span> and <span className="underline text-[16px] md:text-[22px]">Next.js</span> . Dive into my spellbinding projects, where technology meets artistry. Have a collaboration in mind or questions? Feel free to cast a message my way.</h1>
                        </div>
                        ))}
                        <div className="flex flex-wrap items-center mt-8 justify-center gap-3">
                            <Buttons />
                            <div className="social-link flex gap-3">
                                <GHButtons />
                                <LinkButtons />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Header