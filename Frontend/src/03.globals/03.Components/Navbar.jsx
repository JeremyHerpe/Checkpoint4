import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { LoginContext } from '../../02.navigation/LoginContext'
const Navbar = () => {

    const { dataLogin, setDataLogin } = useContext(LoginContext);

    const logout = () => {
        localStorage.removeItem("token");
        setDataLogin(undefined);
    };

    const handleLogout = () => {
        logout();
    };

    return (
        <>
            <nav className="bg-orange-500 border border-black">
                <div className="w-full flex flex-wrap items-center justify-between mx-auto px-3 py-3">
                    <a href="/" className="w-1/3 flex justify-center items-center">

                        <span className="self-center font-Lugrasimo text-4xl font-black text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 italic uppercase">GNOME DEPOT</span>
                        <span className="self-end font-Lugrasimo text-sm font-black italic uppercase">depuis 1348</span>
                    </a>


                    <ul className="flex flex-row justify-center gap-12 px-2 py-2 mx-auto my-3">
                        <NavLink to="/dequoi">
                            <li>
                                <h2 className=" text-yellow-100 hover:text-red-800 transition font-Lugrasimo text-2xl md:text-xl font-bold uppercase cursor-pointer">De quoi ?</h2>
                            </li>
                        </NavLink>
                        <NavLink to="/shop">
                            <li>
                                <h2 className=" text-yellow-100 hover:text-red-800 transition font-Lugrasimo text-2xl md:text-xl font-bold uppercase cursor-pointer">Le Shop</h2>
                            </li>
                        </NavLink>
                        <NavLink to="/refourgue">
                            <li>
                                <h2 className=" text-yellow-100 hover:text-red-800 transition font-Lugrasimo text-2xl md:text-xl font-bold uppercase cursor-pointer">Revends ton matos</h2>
                            </li>
                        </NavLink>
                        {dataLogin ? (
                            <NavLink to="/">
                                <button type="submit" onClick={handleLogout} className=" text-yellow-100 hover:text-red-800 transition font-Lugrasimo text-2xl md:text-xl font-bold uppercase cursor-pointer">
                                    Rituel de Déconnection
                                </button>
                            </NavLink>
                        ) : (
                            <NavLink to="/connexion">
                                <button className=" text-yellow-100 hover:text-red-800 transition font-Lugrasimo text-2xl md:text-xl font-bold uppercase cursor-pointer">
                                    Rituel de Connection
                                </button>
                            </NavLink>
                        )}

                    </ul>

                </div>
            </nav >
        </>
    );
};

export default Navbar;