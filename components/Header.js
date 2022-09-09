import Link from "next/link";
import Image from "next/image";
import useRestaurant from "../hooks/useRestaurant";

const Header = ({pag}) => {

    const {pedido} = useRestaurant();

    let pagSig='error';
    let pagAnt='error';
    let home=false;
    let ordenes=false;

    switch(pag){
        case 'Menu' : 
            pagSig='productos';
            pagAnt=null
            home=true
            ordenes=true
        break;
        case 'Productos' : 
            pagSig='resumen';
            pagAnt='menu'
            home=false
            ordenes=false
        break;
        case 'Resumen' :
            pagSig=null;
            pagAnt='productos'
            home=false
            ordenes=false
        break
        case 'Ordenes':
            pagSig=null;
            pagAnt=null
            home=false
            ordenes=false
        break
    }

    // console.log(pagSig);

    return (  
        <div className="color-header h-auto flex justify-between items-center flex-wrap px-12 shadow-xl border-b-2">
            <div className="flex justify-center sm:w-auto w-full">
                <Image width={60} height={60} src="/static/img/logo.png" alt="icono de la aplicacion" />
            </div>
            
            <div 
                className="flex justify-center flex-wrap sm:w-auto w-full py-5"
            >
                {pagSig === null ? null : 
                    <div
                        // className=" w-24 h-auto text-center"
                    >
                        <Link 
                            href={`/${pagSig}`}
                        >
                            <a className='block  py-1 px-2 w-auto text-white font-bold text-center mx-2 my-1'>Siguiente</a>
                        </Link>
                    </div>
                    
                }
                {pagAnt === null ? null : 
                    <div
                    >
                        <Link    
                            href={`/${pagAnt}`}
                        >
                            <a className='block py-1 w-24 text-white font-bold text-center mx-2 my-1'>Atras</a>
                        </Link>
                    </div>
                    
                }
                {home ? null : 
                    <div
                    >
                        <Link href='/menu'>
                            <a className='block py-1 w-24 text-white font-bold text-center mx-2 my-1'>Inicio</a>
                        </Link>
                    </div>
                    
                }
                {!ordenes ? null : 
                    <div
                    >
                        <Link href='/ordenes'>
                            <a className='block py-1 w-24 text-white font-bold text-center mx-2 my-1'>Ordenes</a>
                        </Link>
                    </div>
                }

            </div>
        </div>
    );
}
 
export default Header;