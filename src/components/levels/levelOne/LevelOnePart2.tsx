import { Link } from "react-router-dom";

export function LevelOnePart2() {
  return (
    <div className="container">
      <header className="header center-text">
        <h1>Level 1 Pt. 2: More Types!</h1>
        <h2>The Kingdom of Variables: Secure the Castle</h2>
      </header>

      <section className="quest-section">
        <p>
          The King now requires you to guard the castle's variables, and they
          come in different forms! It’s time to protect values of type{" "}
          <span className="highlight-text">string</span>,{" "}
          <span className="highlight-text">boolean</span>, and more!
        </p>

        <h3>Your Next Task:</h3>
        <p>
          The first thing we need to do is secure the gates. Declare a variable
          called <code>isGateLocked</code> that holds a{" "}
          <span className="highlight-text">boolean</span> value. This will let
          us know if we need to send guards out to lock the gate. Hurry! A scout
          saw the neighboring kingdom coming to raid our lands.
        </p>

        <pre>
          <code>{`let isGateLocked: boolean = true; // ✅ Correct`}</code>
        </pre>

        <Link to="/level-three">
          <button className="next-btn">Start Next Task</button>
        </Link>
      </section>
    </div>
  );
}
