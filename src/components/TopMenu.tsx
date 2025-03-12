import styles from './topMenu.module.css'
import TopMenuItem from './TopMenuItem';

export default function TopMenu() {
    return (
        <div className={styles.menucontainer}>
            <div className='flex justify-between'>
                <div className='bg-black'>
                   <TopMenuItem title="Home" pageRef="/"></TopMenuItem> 
                </div>
                <TopMenuItem title="Projects" pageRef="/project"></TopMenuItem>
                <TopMenuItem title="Contact" pageRef="/contact"></TopMenuItem>
            </div>
        </div>
    );
}