import { createContext, useState } from "react";

export const Datas = createContext();

function Context({ children }) {
  return (
<Datas.Provider>{children}</Datas.Provider>
  );
}
export default Context;
