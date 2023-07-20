import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="bg-orange-500 border border-black">
                <div className="w-full flex flex-wrap items-center justify-between mx-auto px-3 py-3">
                    <a href="/" className="w-1/3 flex justify-center items-center">
                        {/* <img src="" class="h-8 w-8 mr-3" alt="logo" /> */}
                        <span className="self-center font-sans text-4xl font-black italic uppercase">GNOME DEPOT</span>
                        <span className="self-end font-sans text-sm font-black italic uppercase">depuis 1348</span>
                    </a>

                    <div classNames="w-2/3" id="">
                        <ul className="flex flex-row justify-center gap-8 px-2 py-2 bg-gray-300 rounded-xl border border-black mx-5 my-3 ">
                            <NavLink to="/">
                                <li>
                                    <h2 className="px-2 py-2 text-gray-600 hover:text-gray-800 font-sans text-2xl font-bold uppercase cursor-pointer">De quoi ?</h2>
                                </li>
                            </NavLink>
                            <NavLink to="/shop">
                                <li>
                                    <h2 className="px-2 py-2 text-gray-600 hover:text-gray-800 font-sans text-2xl font-bold uppercase cursor-pointer">Le Shop</h2>
                                </li>
                            </NavLink>
                            <NavLink to="/refourgue">
                                <li>
                                    <h2 className="px-2 py-2 text-gray-600 hover:text-gray-800 font-sans text-2xl font-bold uppercase cursor-pointer">Revends ton matos</h2>
                                </li>
                            </NavLink>
                            <NavLink to="/compte">
                                <li>
                                    <h2 className="px-2 py-2 text-gray-600 hover:text-gray-800 font-sans text-2xl font-bold uppercase cursor-pointer">T'es pas déjà client ?!</h2>
                                </li>
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    );
};

export default Navbar;