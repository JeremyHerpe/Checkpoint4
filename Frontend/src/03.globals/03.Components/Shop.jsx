import React from "react";
import Article from "./Article";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Shop = () => {

    return (
        <>
            <Navbar />
            <div className=" w-full h-full  bg-yellow-100 px-5 py-5 mx-auto">
                <h1 className="flex justify-center px-3 py-3 mx-auto text-gray-800 font-extrabold font-sans italic ">
                    Le shop de Gnome Dépot, articles de zinzins et matos complètement OP à modique prix
                </h1>
                <ul className="grid grid-cols-3 gap-8">
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                </ul>
            </div >
        </>
    );
};

export default Shop