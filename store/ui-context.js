import { createContext, useState, useEffect } from "react";

const UIContext = createContext({
  menuIsOpen: false,
  toggleMenu: () => {},
  screenwidth: null,
});

export const UIContextProvider = ({children}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(null);
  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);

  useEffect(() => {
    function onResizeHandler() {
      setScreenWidth(window.screen.width);
    };

    if (menuIsOpen) {
      document.body.style.setProperty('overflow', 'hidden');
    } else {
      document.body.style.removeProperty('overflow', 'hidden');
    }
    window.addEventListener('resize', onResizeHandler);
    return () => {window.removeEventListener('resize',onResizeHandler)}
  },[menuIsOpen])


  return (
    <UIContext.Provider value={{
      menuIsOpen,
      toggleMenu,
      screenWidth,
      }}>
      {children}
    </UIContext.Provider>
  )
}

export default UIContext;