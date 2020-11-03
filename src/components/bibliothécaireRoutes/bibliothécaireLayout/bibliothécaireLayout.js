import React from "react";
import BibMenu from "../bibliothécaireMenu/bibliothécaireMenu";

function BibliothécaireLayout({ children }) {
  return (
    <>
      <BibMenu />
      {children}
    </>
  );
}
export default BibliothécaireLayout;
