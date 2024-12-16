
import AboutClientSaying from "../aboutComponents/aboutClientSaying";
import AboutFoodMenu from "../aboutComponents/aboutFoodMenu";
import AboutHero from "../aboutComponents/aboutHero";
import AboutNavebar from "../aboutComponents/aboutNavebar";
import AboutWhyChoose from "../aboutComponents/aboutWhyChoose";


export default function Page (){
    return(
        <div>
           <AboutNavebar/>
            <AboutHero/>
            <AboutWhyChoose/>
            <AboutClientSaying/>
            <AboutFoodMenu/>
        </div>
    );
}