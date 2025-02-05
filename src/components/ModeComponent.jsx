

import { IoMoon } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import useLocalStorage from "../hooks/useLocalStorage";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useLanguage } from "../context/LanguageContext";

function ModeComponent() {
  const { translate } = useLanguage()
  const lang = translate("changeLanguage");
    const [dark, setDark] = useLocalStorage("theme", null);
    useEffect(() => {
        const theme = JSON.parse(localStorage.getItem("theme"));
        if (theme !== null) {
          if (theme) {
            document.body.classList.add("dark");
            setDark(true);  
          } else {
            document.body.classList.remove("dark");
            setDark(false);
          }
        } else {
          if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add("dark");
            setDark(true); 
          } else {
            document.body.classList.remove("dark");
            setDark(false); 
          }
        }
      }, []);
      useEffect(()=>{
        if(lang==="TÜRKÇE"){
          toast.success("Mode changed.")
        }
        else{
          toast.success("Mod değişti.")
        }
          
      },[dark])
    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }
    return (
        <>
            <div className="flex flex-row items-center hover:animation-pulse text-opacity-10 text-[#777777]" onClick={() => darkModeHandler()} >
                <div className="mr-3 w-14 flow-root dark:bg-black bg-[#E92577] rounded-2xl transition duration-700 ">
                    {
                        dark ?
                            <IoMoon className="float-left m-1 transition text-[#FFE86E]" /> : <FaCircle className="float-right m-1 transition  text-[#FFE86E]" />
                    }
                </div>
                {
                    dark ?
                        <p className="font-semibold text-[#D9D9D9]">LIGHT MODE</p> : <p className="font-semibold  text-[#777777]">DARK MODE</p>
                }
            </div>
        </>
    )
}

export default ModeComponent