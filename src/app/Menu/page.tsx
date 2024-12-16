
import MenuNavebar from "../components/menuNavebar";
import Deserts from "../menuComponents/Deserts";
import Drinks from "../menuComponents/drinks";

import MHero from "../menuComponents/mHero";

export default function Page (){
    return(
            <div>
            <MenuNavebar/>
            <MHero/>
            <Deserts/>
            <Drinks/>
            </div>
        );
}