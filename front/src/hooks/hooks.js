import { useContext, useEffect, useState } from "react";
import { OpenContactPage } from "../contexts/contexts";
import { useLocation } from "react-router";

export const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const location = useLocation();
  
    useEffect(() => {
      const updatePosition = () => {
        setScrollPosition(window.pageYOffset);
      }
      window.addEventListener("scroll", updatePosition);
      updatePosition();
      return () => window.removeEventListener("scroll", updatePosition);
    }, [location]);
  
    return scrollPosition;
  };
  
export const useScrollToTop = ()=> {
  useEffect(()=>{
    window.pageYOffset = 0
  },[])
}

export function useConsumerOpenContact() {
  const opCls = useContext(OpenContactPage)

  return opCls
}