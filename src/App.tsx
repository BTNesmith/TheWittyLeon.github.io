import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Are you positive???",
  "Pookie please",
  "Just think about it",
  "If you say no, I'll be very sad",
  "I'll be very very sad",
  "I'll be very very very sad",
  "I'll be very very very very sad",
  "Ok fine, I'll stop asking...",
  "Just kidding, PLEASE SAY YES",
  "I'll be very very very very very sad",
  "You're breaking my heart ;(",
  "Don't do this to me",
  "I'm gonna cry...",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="Valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kissing.gif"
          />
          <div className="text">Yay!!!!</div>
        </>
      ) : (
        <>
          <img
            alt="bear with hearts"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />

          <div>Will you be my valentine?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
export default App;
