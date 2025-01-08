import { useState, useEffect, useMemo } from "react";
import { Editor } from "@monaco-editor/react";
import { Link } from "react-router-dom";
import { validateCode } from "../../utils/validateCode";
import wizardsCurse from "../../../assets/wizardsCurseLesson1.webp";

export function LevelOne() {
  const [goldAmount, setGoldAmount] = useState<string>(
    "let goldAmount : undefined = 500",
  );
  const [isValid, setIsValid] = useState<boolean>(false);

  const isNumberTypeRegex = useMemo(() => {
    return /^\s*(let|var|const)\s+goldAmount\s*:\s*number\s*=\s*\d+\s*;?\s*$/;
  }, []);

  const handleEditorChange = (code: string | undefined) => {
    if (code) {
      setGoldAmount(code);
      setIsValid(validateCode(code, isNumberTypeRegex));
    }
  };

  useEffect(() => {
    setIsValid(validateCode(goldAmount, isNumberTypeRegex));
  }, [goldAmount, isNumberTypeRegex]);

  return (
    <>
      <header className="header center-text">
        <h1>Level 1: The Wizard's Spell</h1>
        <h2>Type Safety in the Kingdom of Variables</h2>
      </header>
      <img
        className="responsive-img"
        src={wizardsCurse}
        alt="a photo of a treasure chest overflowing with gold"
      />

      <section>
        <h3>Welcome to the Kingdom of Variables!</h3>
        <p>
          In this land, every treasure is guarded by a{" "}
          <span className="highlight-text">type</span>. Your journey starts by
          learning how to protect these treasures.
        </p>

        <h3>Problem:</h3>
        <p>
          Disaster has struck! An evil wizard has cursed the castle's gold,
          turning the number of gold coins into{" "}
          <span className="highlight-text">undefined</span>. The kingdom’s
          advisors are in disarray, the castle is falling apart, and the
          villagers are panicking!
        </p>

        <h3>Your Quest:</h3>
        <p>
          In the editor below break the curse by restoring the{" "}
          <code>goldAmount</code>'s type to a{" "}
          <span className="highlight-text">number</span>
          and save the Kingdom of Variables from ruin!
        </p>

        <Editor
          height="200px"
          language="typescript"
          theme="vs-dark"
          value={goldAmount}
          onChange={handleEditorChange}
          options={{
            selectOnLineNumbers: true,
            automaticLayout: true,
            minimap: { enabled: false },
          }}
        />

        <div className={`validation-message ${isValid ? "valid" : "invalid"}`}>
          {isValid
            ? "✅ Correct! You have successfully protected the gold!"
            : "❌ Incorrect! Please ensure that the goldAmount is a number."}
        </div>

        <p>
          If you try to enter anything other than a{" "}
          <span className="highlight-text">number</span>, it will not be
          accepted!
        </p>

        {isValid && (
          <>
            <h3>Concept Unlocked:</h3>
            <p>
              <strong>Basic Type Annotations:</strong> In TypeScript, you use
              <code>: type</code> to tell the language what type the variable
              should hold. This ensures that only values of the correct type are
              allowed.
            </p>
            <Link to="/level-one-pt-2">
              <button className="cta-button">Next Lesson</button>
            </Link>
          </>
        )}
      </section>
    </>
  );
}
