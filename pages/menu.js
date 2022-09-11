import Link from "next/link";
import Header from "../components/Header";
import useRestaurant from "../hooks/useRestaurant";
import Custom404 from "./404";

const Menu = () => {

    const{autorizado} = useRestaurant();

    let error = <Custom404 />

    return (  
        <div>
            {autorizado ? (
                <>
                    <Header  pag={'Menu'}/>
                    Menu y precios
                </>
            ): (
                <Custom404 />
            )}


        </div>
    );
}
 
export default Menu;