import { useContext, useEffect, useState } from "react";
import { OpenContactPage } from "../contexts/contexts";

const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
  
    useEffect(() => {
      const updatePosition = () => {
        setScrollPosition(window.pageYOffset);
      }
      window.addEventListener("scroll", updatePosition);
      updatePosition();
      return () => window.removeEventListener("scroll", updatePosition);
    }, []);
  
    return scrollPosition;
  };
  
export {  useScrollPosition };


export function useConsumerOpenContact() {
  const opCls = useContext(OpenContactPage)

  return opCls
}