import React, { createContext, useState } from "react";

interface MeuContextoProps {
  valorDoContexto: string;
  setValorDoContexto: React.Dispatch<React.SetStateAction<string>>;
}

// Crie o contexto
export const MeuContexto = createContext<MeuContextoProps>({
  valorDoContexto: "",
  setValorDoContexto: () => {},
});

// Crie um componente de provedor para envolver a parte da sua aplicação que irá utilizar o contexto
export const MeuContextoProvedor: React.FC = ({ children }: any) => {
  const [valorDoContexto, setValorDoContexto] = useState("");

  return (
    <MeuContexto.Provider value={{ valorDoContexto, setValorDoContexto }}>
      {children}
    </MeuContexto.Provider>
  );
};
