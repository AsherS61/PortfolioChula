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
        <Link href={pageRef} className="px-2 block py-4 hover:bg-gray-500 cursor-pointer transition-colors duration-200 font-bold">
            <div className={styles.itemcontainer} >{title}</div>
        </Link>
    );
}