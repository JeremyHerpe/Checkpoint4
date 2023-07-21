import { Routes, Route } from "react-router-dom";
import HomePage from "../03.globals/01.Pages/HomePage";
import Shop from "../03.globals/03.Components/Shop";
import Refourgue from "../03.globals/03.Components/Refourgue";
import Compte from "../03.globals/03.Components/Compte";
import Dequoi from "../03.globals/03.Components/Dequoi";
import Connexion from "../03.globals/03.Components/Connexion";


function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/refourgue" element={<Refourgue />} />
            <Route path="/compte" element={<Compte />} />
            <Route path="/dequoi" element={<Dequoi />} />
            <Route path="/connexion" element={<Connexion />} />
        </Routes>
    )
}

export default Router;