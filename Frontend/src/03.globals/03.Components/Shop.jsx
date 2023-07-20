import React, { useState } from "react";
import Article from "./Article";
import Navbar from "./Navbar";


const Shop = () => {

    // const [article, setArticle] = useState([]);

    // useEffect(() => {
    //     axios
    //         .get(`http://localhost:1337/articles`)
    //         .then((res) => {
    //             setDataSection(res.data);
    //             console.warn("sections : ", res.data);
    //         })
    //         .catch((err) => {
    //             if (err.response) {
    //                 if (err.response.status === 404) {
    //                     console.error("erreur en recupérant les sections");
    //                 }
    //                 if (err.response.status === 500) {
    //                     console.error(err);
    //                 }
    //             }
    //         });
    // }, []);


    return (
        <>
            <Navbar />
            <div className=" w-full h-full  bg-yellow-100 px-5 py-5 mx-auto">
                <h1 className="flex justify-center px-3 py-3 mx-auto text-gray-800 font-Lugrasimo font-extrabold italic ">
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