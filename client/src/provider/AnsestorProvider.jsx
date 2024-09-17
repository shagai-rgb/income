"use client";

import { createContext, useContext } from "react";

export const AnsestorContext = createContext("Knife");
export const AnsestorProvider = ({ children }) => {
  return (
    <AnsestorContext.Provider value={{ ancestor }}>
      {children}
    </AnsestorContext.Provider>
  );
};

export const useAncestor = () => {
  const ancestor = useContext(AnsestorContext);
  return ancestor;
};
