import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { NavLink, useNavigate } from "react-router-dom";


const Connexion = () => {

    const navigate = useNavigate();

    const [dataUser, setDataUser] = useState([]);

    const [user_email, setUser_Email] = useState("");
    const [user_name, setUser_Name] = useState("");
    const [magical_password, setMagical_Password] = useState("");

    useEffect(() => {
        fetch(`http://localhost:3000/users`)
            .then((res) => res.json())
            .then((result) => {
                setDataUser(result);
            })
            .catch((error) => console.error(error));
    }, []);

    const incantation = (e) => {
        e.preventDefault();
        axios
            .post(
                `http://localhost:3000/users/login`,
                {
                    user_email,
                    user_name,
                    magical_password
                },
                {
                    headers: { "Content-Type": "application/json" },
                }
            )
            .then((response) => {
                if (response.status === 200) {
                    localStorage.setItem("token", JSON.stringify(response.data), console.log("ItemSet"));
                    const decoded = jwtDecode(response.data.token);
                    setDataUser(decoded.cargo);
                    navigate("/");
                } else {
                    throw new Error("throw-error level, Error during login attempt");
                }
            })
            .catch((error) => {
                console.error("Catch level, Error during login attempt", error);
            });
    };


    return (

        <>
            <Navbar />

            <section className="bg-neutral-100 h-full w-full font-Lugrasimo ">
                <div className=" mx-auto max-w-screen-xl text-center py-16 px-12">

                    <h1 className="mb-4 font-extrabold tracking-tight leading-none text-gray-900 text-6xl drop-shadow-lg">Accomplis le Rituel de Connection !</h1>
                    <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 "> Sois certain.e d'incanter les bonnes formules sinon Konso'Logg le démon va s'énerver.</p>
                    <div className="flex flex-col items-center justify-center h-full">
                        <form onSubmit={incantation} className=" w-1/2 center">
                            <div>
                                <label htmlFor="Nom" className="text-md text-slate-900">
                                    Ton nom:
                                </label>
                                <div className="py-2">
                                    <input
                                        onChange={(e) => setUser_Name(e.target.value)}
                                        value={user_name}
                                        id="Nom"
                                        name="user_name"
                                        type="text"
                                        required
                                        className="w-full rounded-lg text-md text-slate-900"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="mail" className="text-md text-slate-900">
                                    Ton email:
                                </label>
                                <div className="py-2">
                                    <input
                                        onChange={(e) => setUser_Email(e.target.value)}
                                        value={user_email}
                                        id="e-mail"
                                        name="user_email"
                                        type="email"
                                        required
                                        className="w-full rounded-lg text-md text-slate-900"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password" className="text-md text-slate-900">
                                    Ton incantation de confidentialité:
                                </label>
                                <div className="py-2">
                                    <input
                                        onChange={(e) => setMagical_Password(e.target.value)}
                                        value={magical_password}
                                        id="password"
                                        name="magical_password"
                                        type="password"
                                        required
                                        className="w-full rounded-lg text-md text-slate-900"
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="w-full mx-auto border bg-gradient-to-r from-slate-400 to-slate-700 hover:from-slate-500 hover:to-slate-700 text-neutral-200 py-2 px-4 rounded-md my-3"
                                >
                                    RITUEL !
                                </button>
                            </div>
                        </form>
                    </div>
                    <a href="https://i.kym-cdn.com/entries/icons/original/000/030/021/Screen_Shot_2019-06-10_at_2.40.34_PM.jpg" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full">
                        <span className="text-xl font-medium">Il existe des gens qui se traversent les méandres du fleuve de la vie sans compte-client Gnome Dépot.</span>
                    </a>
                    <NavLink to="/compte">
                        <h1 className="mb-4 font-extrabold tracking-tight leading-none text-gray-900 text-5xl drop-shadow-lg cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">Si c'est ton cas, tu vaux mieux que ça !</h1>
                    </NavLink>
                </div>
            </section>
        </>
    )

}
export default Connexion
