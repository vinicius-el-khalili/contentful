import Link from "next/link"
import style from "@/styles/Layout.module.css"
import Image from "next/image";
const Layout = ({children}) => {
    return (
        <div className={style.layout}>
            <header>
                <Link href={"/"} className={style.pageHeader}>
                    <div className={style.pageTitle}>
                        <h1>THE</h1>
                        <h1>CATATOUILLE</h1>
                        <h1>routine cousine</h1>
                    </div>
                    <Image src={"/cat.svg"} width={150} height={150} alt="logo" priority={true} />
                </Link>     
            </header>

            <div className={style.pageContent}>
                {children}
            </div>
            <footer className={style.pageFooter}>
                <p>Footer</p>

            </footer>
        </div>
    );
}
 
export default Layout;