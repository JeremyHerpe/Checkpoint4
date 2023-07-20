import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="bg-orange-500 border border-black">
                <div className="w-full flex flex-wrap items-center justify-between mx-auto px-3 py-3">
                    <a href="/" className="w-1/3 flex justify-center items-center">
                        {/* <img src="" class="h-8 w-8 mr-3" alt="logo" /> */}
                        <span className="self-center font-Lugrasimo text-4xl font-black text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 italic uppercase">GNOME DEPOT</span>
                        <span className="self-end font-Lugrasimo text-sm font-black italic uppercase">depuis 1348</span>
                    </a>

                   
                        <ul className="flex flex-row justify-center gap-12 px-2 py-2 mx-auto my-3">
                            <NavLink to="/dequoi">
                                <li>
                                    <h2 className=" text-yellow-100 hover:text-red-800 transition font-Lugrasimo text-2xl font-bold uppercase cursor-pointer">De quoi ?</h2>
                                </li>
                            </NavLink>
                            <NavLink to="/shop">
                                <li>
                                    <h2 className=" text-yellow-100 hover:text-red-800 transition font-Lugrasimo text-2xl font-bold uppercase cursor-pointer">Le Shop</h2>
                                </li>
                            </NavLink>
                            <NavLink to="/refourgue">
                                <li>
                                    <h2 className=" text-yellow-100 hover:text-red-800 transition font-Lugrasimo text-2xl font-bold uppercase cursor-pointer">Revends ton matos</h2>
                                </li>
                            </NavLink>
                            <NavLink to="/compte">
                                <li>
                                    <h2 className=" text-yellow-100 hover:text-red-800 transition font-Lugrasimo text-2xl font-bold uppercase cursor-pointer">T'es pas déjà client ?!</h2>
                                </li>
                            </NavLink>
                        </ul>
                 
                </div>
            </nav >
        </>
    );
};

export default Navbar;