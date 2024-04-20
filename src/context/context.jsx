import { createContext } from "react";
// import { LandingData } from "../data/headings";

export const ContextProvider = createContext();

const ContextWrapper = ({ children }) => {
  if (!children) {
    return null;
  }
  return (
    <ContextProvider.Provider value={{}}>{children}</ContextProvider.Provider>
  );
};
export default ContextWrapper;
