import { ButtonPrimary, LinkButtonPrimary } from ".."

export type HeroProps = {
    title?: string
    description?: string
    href?: string | undefined
    button?: string
}


export const Hero = (props: HeroProps) => {
    const { title, description, href, button } = props
    return (
        <div>
            <div className="lg:2/6 xl:w-2/4 mt-10 lg:ml-2 text-left">
                <div className="lg:text-6xl md:text-4xl text-3xl font-semibold text-primaryText leading-none">{title}</div>
                <div className="mt-6 text-xl font-light text-primaryText antialiased">{description}</div>
                <div className="mt-10">
                    {button && <LinkButtonPrimary to={href || '/'}>
                        {button}
                    </LinkButtonPrimary>
                    }
                </div>
            </div>
            <div className="mt-10 lg:mt-24 lg:ml-15 text-left">
                <button type="button" className="flex items-center justify-center w-12 h-12 rounded-full bg-cool-gray-100 text-gray-800 animate-bounce hover:text-gray-900 hover:bg-cool-gray-50 transition duration-300 ease-in-out cursor-pointer">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </button>
            </div>

        </div>
    )
}