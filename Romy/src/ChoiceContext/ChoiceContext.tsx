import { createContext, useContext, useState } from "react";

type choiceContexteType = {
    choices : string[];
    addChoice: (choice: string) => void;
    resetChoices: () => void;

};

const ChoiceContext = createContext<ChoiceContextType | null>(null);

export const ChoiceProvider = ({ children }: { children: React.ReactNode }) => {
  const [choices, setChoices] = useState<string[]>([]);

  const addChoice = (choice: string) => setChoices((prev) => [...prev, choice]);
  const resetChoices = () => setChoices([]);

  return (
    <ChoiceContext.Provider value={{ choices, addChoice, resetChoices }}>
      {children}
    </ChoiceContext.Provider>
  );
};


export const useChoices = () => {
  const context = useContext(ChoiceContext);
  if (!context) throw new Error("useChoices must be used within a ChoiceProvider");
  return context;
};