import { createContext, useState } from "react";

const UIContext = createContext({
  menuIsOpen: false,
  toggleMenu: () => {},
});

export const UIContextProvider = ({children}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);
  return (
    <UIContext.Provider value={{
      menuIsOpen,
      toggleMenu,
      }}>
      {children}
    </UIContext.Provider>
  )
}

export default UIContext;