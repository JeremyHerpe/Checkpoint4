import React from "react";

const Footer = () => {

    return (
        <>
            <footer className="flex w-full bottom-0 bg-orange-500 border border-black">

                <div className="flex flex-wrap items-center justify-between mx-auto px-3 py-3">

                    <ul className="flex flex-row justify-center gap-16">
                        <li>
                            <span className="px-4 py-4 text-orange-800 font-sans text-2xl font-bold uppercase cursor-pointer">Service après-vente</span>
                        </li>
                        <li>
                            <span className="px-4 py-4 text-orange-800 font-sans text-2xl font-bold uppercase cursor-pointer">Services après-mort</span>
                        </li>
                        <li>
                            <span className="px-4 py-4 text-orange-800 font-sans text-2xl font-bold uppercase cursor-pointer">On recrute !</span>
                        </li>
                    </ul>

                </div>

            </footer >

        </>
    )
}

export default Footer;