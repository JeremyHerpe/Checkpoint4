import React, {useState} from "react";
import Navbar from "./Navbar";
import axios from "axios";

const Compte = () => {
    const [isClicked, setIsClicked] = useState(false);
    
    const [user, setUser] = useState({
    user_name: "",
    user_email: "",
  });

     const handleInput = (e) => {
    e.persist();
    setUser({ ...user, [e.target.name]: e.target.value });
    };
    
     const saveUser = (e) => {
    e.preventDefault();

    const data = {
      user_name: user.user_name,
        user_email: user.user_email,
      magical_password: user.magical_password,
    };

    axios
      .post(`http://localhost:3000/users`, data)
        .then(() => {
          console.log("success, master")
        setIsClicked(!isClicked);
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 404) {
            console.error("erreur en recupérant le matos", err);
          }
          if (err.response.status === 500) {
            console.error("erreur", err);
          }
        }
      });
    };
    
    return (
        <>
            <Navbar />
            <section className="bg-neutral-100 h-full w-full font-Lugrasimo ">

                <div className=" mx-auto max-w-screen-xl text-center py-16 px-12">
                    <a href="1348 étant l'année où la concurrence s'est brusquement raréfiée sur le marché porteur du matos enchanté" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full">
                        <span className="text-xl font-medium">Y'en a certains, comme ça, qui se promènent sans compte-client Gnome Dépot</span>
                        
                    </a>
                    <h1 className="mb-4 font-extrabold tracking-tight leading-none text-gray-900 text-6xl drop-shadow-lg">Mais toi tu vaux mieux que ça !</h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 "> Alors profites d'être là pour te connecter à ton compte-client, tant que tu y es. Sinon ravales ta honte et crée toi un compte dans l'instant pour redevenir fréquentable.</p>
<div className="flex flex-col items-center justify-center h-full">
                    <form onSubmit={saveUser} className=" w-1/2 center">
            
           <div>
          <label htmlFor="Nom" className="text-md text-slate-900">
            Ton nom:
          </label>
          <div className="py-2">
            <input
              onChange={handleInput}
              value={user.user_name}
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
              onChange={handleInput}
              value={user.user_email}
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
              onChange={handleInput}
              value={user.magical_password}
              id="password"
              name="magical_password"
              type="password"
              required
              className="w-full rounded-lg text-md text-slate-900"
            />
          </div>
        </div>

            <div className="flex pt-4 items-center">
              <input
                id="terms-and-privacy"
                name="terms-and-privacy"
                                type="checkbox"
                                
              />
              <label htmlFor="terms-and-privacy" className="flex ml-2 mt-2 text-sm">
                J'ai lu et j'accepte les 
                <a href="/" className="text-indigo-300 hover:text-indigo-500">
                  {"  "}
                  Conditions{"  "}
                </a>
                et la 
                <a href="/" className="text-indigo-300 hover:text-indigo-500">
                  {"  "}
                  Politique de Confidentialité{"  "}
                </a>
                .
              </label>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="w-full mx-auto border bg-gradient-to-r from-slate-300 to-slate-600 hover:from-slate-500 hover:to-slate-700 text-neutral-100 py-2 px-4 rounded-md my-3"
              >
                Je m'inscris
              </button>
            </div>
          </form>
                   
                    </div>
                    </div>
            </section>
        </>
    )
}

export default Compte