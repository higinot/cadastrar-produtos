// MeuContexto.tsx
import React, { createContext, useState } from "react";

type MeuContextoType = {
  valorDoContexto: any;
  setValorDoContexto: React.Dispatch<React.SetStateAction<any>>;
};

const MeuContexto = createContext<MeuContextoType>({
  valorDoContexto: null,
  setValorDoContexto: () => {},
});

type MeuContextoProviderProps = {
  children: React.ReactNode; // Atualizar o tipo para React.ReactNode
};

export const MeuContextoProvider: React.FC<MeuContextoProviderProps> = ({ children }) => {
  const [valorDoContexto, setValorDoContexto] = useState<any>(null);

  return (
    <MeuContexto.Provider value={{ valorDoContexto, setValorDoContexto }}>
      {children}
    </MeuContexto.Provider>
  );
};

export default MeuContexto;
