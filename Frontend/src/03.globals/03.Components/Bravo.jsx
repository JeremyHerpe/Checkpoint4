import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Bravo = () => {

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center bg-neutral-100 border border-black px-10 py-8 mx-auto sm:max-w-md my-10 text-slate-700 rounded font-Lugrasimo text-xl font-bold drop-shadow-lg">
                <h2 className="pb-6">Bravo, bienvenue !</h2>
                <p className="pb-8">Nos scribes ont bien pris note de votre inscription</p>
                <NavLink to="/Connexion">
                    <button
                        type="submit"
                        className="w-full mx-auto border bg-gradient-to-r from-slate-300 to-slate-600 hover:from-slate-500 hover:to-slate-700 text-neutral-100 py-2 px-4 rounded-md my-3"
                    >
                        Bah c'est chouette
                    </button>
                </NavLink>
            </div>


        </>
    )
}

export default Bravo
