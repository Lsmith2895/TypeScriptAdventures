import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LessonsContext } from "../../context/lessonsContext";
import { FallingCoins } from "../coinsAnimation/fallingCoins";

export function StartButton() {
  const { showCoins, toggleShowCoins } = useContext(LessonsContext);
  const navigate = useNavigate();

  const handleClick = () => {
    toggleShowCoins();
    setTimeout(() => {
      navigate("/level-one");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <button
      className="cta-button"
      onClick={handleClick}
      // onMouseEnter={() => toggleShowCoins()}
      // onMouseLeave={() => toggleShowCoins()}
    >
      Save The Kindom
      {showCoins && <FallingCoins />}
    </button>
  );
}
