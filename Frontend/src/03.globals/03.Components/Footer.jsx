import React from "react";

const Footer = () => {

    return (
        <>
            <footer className="flex w-full z-10 fixed mt-auto bottom-0 bg-orange-500 border border-black">

                <div className="flex flex-wrap items-center justify-between mx-auto px-2 py-2">

                    <ul className="flex flex-row justify-center gap-16">
                        <li>
                            <span className="px-4 py-4 text-yellow-100 hover:text-red-900 transition font-Lugrasimo text-2xl font-bold uppercase cursor-pointer">Service après-vente</span>
                        </li>
                        <li>
                            <span className="px-4 py-4 text-yellow-100 hover:text-red-900 transition font-Lugrasimo text-2xl font-bold uppercase cursor-pointer">Services après-mort</span>
                        </li>
                        <li>
                            <span className="px-4 py-4 text-yellow-100 hover:text-red-900 transition font-Lugrasimo text-2xl font-bold uppercase cursor-pointer">On recrute !</span>
                        </li>
                    </ul>

                </div>

            </footer >

        </>
    )
}

export default Footer;