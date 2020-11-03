import React from "react";
import AdhérentMenu from "../adhérentMenu/adhérentMenu";

function AdhérentLayout({ children }) {
  return (
    <>
      <AdhérentMenu />
      {children}
    </>
  );
}
export default AdhérentLayout;
