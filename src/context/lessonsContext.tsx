import { createContext, useState } from "react";

interface LessonsContextType {
  showCoins: boolean;
  toggleShowCoins: () => void;
}

const LessonsContext = createContext<LessonsContextType>({
  showCoins: false,
  toggleShowCoins: () => {
    return false;
  },
});

//TODO: fix children

const LessonProvider = ({ children }) => {
  const [showCoins, setShowCoins] = useState(false);
  const toggleShowCoins = () => {
    setShowCoins(!showCoins);
  };

  return (
    <LessonsContext.Provider value={{ showCoins, toggleShowCoins }}>
      {children}
    </LessonsContext.Provider>
  );
};

export { LessonProvider, LessonsContext };
