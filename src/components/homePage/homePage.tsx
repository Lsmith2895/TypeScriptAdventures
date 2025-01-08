import "./homePage.css";
import "../../assets/styles/globalStyles.css";
import { StartButton } from "../utils/startButton";

export function HomePage() {
  return (
    <div className="main-wrapper">
      <header className="header">
        <h1>The Quest for Type Safety:</h1>
        <h2>A TypeScript Adventure</h2>
        <div className="author">By Logan Smith</div>
      </header>
      <img
        src="./src/assets/kingdomHomePage.webp"
        alt="photo of a king, his castle, and a treasure chest"
        className="heading-photo"
      />

      <section className="mission-section">
        <h3>Your Mission</h3>
        <p>
          Your goal is to embark on an epic quest to learn and master TypeScript
          types. As you progress through this adventure, you’ll face challenges
          and gain the knowledge necessary to conquer the{" "}
          <span className="highlight-text">Final Boss</span>—a complex
          TypeScript project that requires everything you've learned along the
          way.
        </p>

        <h3>PreRequisites</h3>
        <ol>
          <li>
            <a href="https://www.w3schools.com/js/default.asp">
              Basic Javascript Knowledge
            </a>
          </li>
          <li>
            <a href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html">
              Understand Potential Types (strings, boolean, Arrays ...etc)
            </a>
          </li>
        </ol>
        <div className="start-section">
          <h3>Ready to start your journey?</h3>
          <StartButton />
        </div>
      </section>
    </div>
  );
}
