import {MdOutlineKeyboardArrowLeft} from "react-icons/md"
import styles from "../styles/Navbar.module.css"

export default function Navbar(){
    return(
        <section className="text-black">
            <div className="bg-[#27aaa1] h-14"></div>
            <div className={`flex justify-center items-center h-20 w-full py-4 border-b-4 ${styles.shadow}`}>
                <div className="ml-4 text-4xl w-[20%]"><MdOutlineKeyboardArrowLeft /></div>
                <div className="w-[80%] ml-[20%] text-xl">Add Image / Icon</div>
            </div>
        </section>
    )
}