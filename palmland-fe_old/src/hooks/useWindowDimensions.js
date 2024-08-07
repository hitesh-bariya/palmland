import { useEffect, useState } from "react";

export const useWindowDimensions = () => {
  const [isMobile576, setIsMobile576] = useState(true);
  const [isTablet768, setIsTablet768] = useState(true);
  const [isTablet992, setIsTablet992] = useState(true);
  const handleResize = () => {
    if (window.innerWidth <= 992 && window.innerWidth > 768) {
      setIsMobile576(false);
      setIsTablet768(false);
      setIsTablet992(true);
    } else if (window.innerWidth <= 768 && window.innerWidth > 576) {
      setIsMobile576(false);
      setIsTablet768(true);
      setIsTablet992(false);
    } else if (window.innerWidth <= 576) {
        setIsMobile576(true);
        setIsTablet768(false);
        setIsTablet992(false);
    } else {
        setIsMobile576(false);
        setIsTablet768(false);
        setIsTablet992(false);
    }
  };
  useEffect(()=>{
    handleResize()
  },[])
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return { isMobile576, isTablet768, isTablet992 };
};
