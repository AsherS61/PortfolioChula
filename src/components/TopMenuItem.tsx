import Link from "next/link";
import styles from "./topMenu.module.css"

export default function TopMenuItem( {
    title,
    pageRef   
} : {
    title:string,
    pageRef:string
}) {
    return (
        <div className="px-5 block py-4 hover:bg-gray-500 cursor-pointer transition-colors duration-200 font-bold">
            <Link href={pageRef} className={styles.itemcontainer} >{title}</Link>
        </div>
    );
}