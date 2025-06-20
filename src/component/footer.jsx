import { AnimatedSection } from "./animatedSections"

export default function Footer() {
    return (
        <>
            {/* Footer */}
            <AnimatedSection
                className="w-full min-h-screen flex"
                style={{ backgroundColor: '#851851' }}
            >
                <section className='flex flex-col justify-center  mr-70 ml-70 gap-[5rem] w-full'>
                    <div className="flex gap-10">
                        <div className="flex flex-col gap-6">
                            <h1>
                                Di hola!
                            </h1>
                            <div>email</div>
                            <div>WhatsApp</div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <br />

                            <div>email</div>
                            <div>WhatsApp</div>
                        </div>
                    </div>

                    <div className="border-t border-white w-full"></div>

                    <div className="flex justify-between">
                        <div>© Cristina Arela 2025</div>
                        <div className="flex gap-6">
                            <p>ES</p>
                            <p>EN</p>
                            <p>IT</p>
                        </div>
                    </div>

                </section>
            </AnimatedSection >
        </>
    )
}