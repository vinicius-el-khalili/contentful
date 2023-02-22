import Link from "next/link"
import style from "../styles/layout.module.css"
const Layout = ({children}) => {
    return (
        <div className={style.layout}>
            <header>
                <Link href={"/"} style={{textDecoration:"none"}}>
                    <div className={style.pageTitle}>
                        <h1>THE</h1>
                        <h1>CATATOUILLE</h1>
                        <h1>Everyday cousine</h1>
                    </div>
                </Link>     
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