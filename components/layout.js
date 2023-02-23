import Link from "next/link"
import style from "../styles/layout.module.css"
import Image from "next/image";
const Layout = ({children}) => {
    return (
        <div className={style.layout}>
            <header className={style.pageHeader}>
                <Link href={"/"} style={{textDecoration:"none"}} className={"pageHeader"}>
                    <div className={style.pageTitle}>
                        <h1>THE</h1>
                        <h1>CATATOUILLE</h1>
                        <h1>routine cousine</h1>
                    </div>
                </Link>     
                <Image src={"/cat.svg"} width={150} height={150} alt="logo" priority={true} />
            </header>

            <div className={style.pageContent}>
                {children}
            </div>

            <footer className={style.pageFooter}>
                <p>Vinicius El Khalili</p>
            </footer>
        </div>
    );
}
 
export default Layout;