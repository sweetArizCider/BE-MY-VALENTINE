import "./App.css";
import "../public/css/valentineCard.css";
import "../public/css/noButtonRandom.css";
import { useState} from "react";

const gifs = [
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2kxcnpqaW80cXdtNG94b2kyNzhjbjdnOG56ZGx4Mm9kbXVjaGU5ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/a1dN68HMcupzewmW5G/giphy.gif",
  "https://media.giphy.com/media/rEsnZOfmDlJKUOdoZ2/giphy.gif",
  "https://media.giphy.com/media/vPoRuviYf0Tu6OVx0L/giphy.gif",
  "https://media.giphy.com/media/5iYi1ghEL8FCckAeUq/giphy.gif",
  "https://media.giphy.com/media/oSatDN2WevJVhd9wOE/giphy.gif",
  "https://media.giphy.com/media/q4tkGbUiHc05KxqLT3/giphy.gif",
  "https://media.giphy.com/media/cA40Rb3Xia4RRVqm7o/giphy.gif",
  "https://media.giphy.com/media/UnlCUbpyhizJDbwZ2p/giphy.gif",
  "https://media.giphy.com/media/dUR62cwTf5aMGMOmwy/giphy.gif",
  "https://media.giphy.com/media/ZIdLWI26SMY0qjRKQT/giphy.gif",
];

const yesGifs = [
  "https://media.giphy.com/media/SL9esQ2xRZT5h6PB7w/giphy.gif",
  "https://media.giphy.com/media/wRK8VWsWRt53vaJo2V/giphy.gif",
  "https://media.giphy.com/media/wHUWuJWg6iRRQWTBd1/giphy.gif",
  "https://media.giphy.com/media/PLviF1w3nCBimzsBvh/giphy.gif",
  "https://media.giphy.com/media/RlhbpcHWRfN5pSAq8h/giphy.gif",
];

const noClickedNoMessages = [
  "💖Hehe, ¿y si le das que no para ver qué pasa? jiji💖",
];

const messages = [
  "💖Te gustaría ser mi San Valentín?💖",
  "😶‍🌫️...Hehe, creo que no viste bien...💖",
  "Oh...Te podría comprar algo lindo💖",
  "💔AH SI??...Te daré otra oportunidad 👍🏼",
  "OH...PIÉNSALO BIEN, TOMA TU TIEMPO❗",
  "...Por favorcito??💔",
  "Te lo ruego...💔",
  "¿...POR QUÉ NO???💔",
  "...Yo solo quería ser tu amor💔",
  "AH SÍ??..VAMOS DE NUEVO🔥",
];

const madMessages = [
  "🔥YA NO HABRÁN HAMBURGUESITAS🔥",
  "🔥TOMA TU TIEMPO...AQUÍ ESTARÉ🔥",
  "🔥TE GUSTARIA SER MI SAN VALENTIN?🔥",
  "🔥DI QUE SI...O SUFRIRAS LAS CONSECUENCIAS🔥",
  "🔥¿TE GUSTARÍA SER MI SAN VALENTIN???🔥",
  "🔥ME DEBES 20 PEPSI'S LIGHT🔥",
  "🔥YA DI QUE SI🔥",
];

let yesCounter = 0;
let noCounter = 0;
let madIndex = 0;

const App = () => {
  const [showNoButton, setShowNoButton] = useState(true);
  const [showRandomNoButton, setShowRandomNoButton] = useState(false);
  const [position, setRandomPosition] = useState({ top: 0, left: 0 });
  const [message, setMessage] = useState(messages[0]);
  const [gif, setGif] = useState(gifs[0]);
  const [showButton, setShowButton] = useState(true);

  const changeMessage = () => {
    if (noCounter >= 19) {
      const messageIndex = madIndex;
      const nextIndex = (messageIndex + 1) % madMessages.length;
      setMessage(madMessages[nextIndex]);
      madIndex++;
      return;
    }
    if (messages.indexOf(message) === -1) {
      setMessage(messages[1]);
      return;
    }
    const messageIndex = messages.indexOf(message);
    const nextIndex = (messageIndex + 1) % messages.length;
    setMessage(messages[nextIndex]);
  };

  const changeGif = () => {
    if (noCounter >= 19) {
      setGif(gifs[9]);
      return;
    }
    if (gifs.indexOf(gif) === -1) {
      setGif(gifs[1]);
      return;
    }

    const gifIndex = gifs.indexOf(gif);
    const nextIndex = (gifIndex + 1) % gifs.length;
    setGif(gifs[nextIndex]);
  };

  const handleYesClick = () => {
    if (yesCounter === 1 && noCounter === 0) {
      setGif(yesGifs[2]);
      setMessage("💖Awwww,a la primera!...Te amo💖");
      setShowButton(false);
      setShowNoButton(false);
      setShowRandomNoButton(false);

      resetBackground();
      return;
    }
    if (noCounter === 0) {
      setGif(yesGifs[0]);
      setMessage(noClickedNoMessages[0]);
      yesCounter++;
      resetBackground();
 
      return;
    }
    setGif(yesGifs[2]);
    setMessage("💖Sabia que dirías que si!, Te amo💖");
    resetBackground();
    setShowButton(false);
    setShowNoButton(false);
    setShowRandomNoButton(false);
  };

  const handleNoClick = () => {
    setShowNoButton(false);
    setShowRandomNoButton(true);
    setRandomPosition(generateRandomPosition());
    changeGif();
    changeMessage();
    noCounter++;
  };

  function resetBackground() {
    const body = document.querySelector("body");
    body?.classList.remove(
      "backgroundChange1",
      "backgroundChange2",
      "backgroundChange3",
      "backgroundChange4",
      "backgroundChange5"
    );
    body?.classList.add("backgroundChange0");
  }

  function changeBackground() {
    const body = document.querySelector("body");
    body?.classList.remove(
      "backgroundChange0",
      "backgroundChange1",
      "backgroundChange2",
      "backgroundChange3",
      "backgroundChange4",
      "backgroundChange5"
    );
  
    if (noCounter > 20) {
      body?.classList.add("backgroundChange5");
    } else if (noCounter > 17) {
      body?.classList.add("backgroundChange4");
    } else if (noCounter > 11) {
      body?.classList.add("backgroundChange3");
    } else if (noCounter > 7) {
      body?.classList.add("backgroundChange2");
    } else if (noCounter > 3) {
      body?.classList.add("backgroundChange1");
    } else {
      body?.classList.add("backgroundChange0");
    }
  }

  const handleRandomNoClick = () => {
    setRandomPosition(generateRandomPosition());
    changeGif();
    changeMessage();
    changeBackground();
    noCounter++;
  };

  const generateRandomPosition = () => {
    const top = Math.floor(Math.random() * (window.innerHeight - 60));
    const left = Math.floor(Math.random() * (window.innerWidth - 120));
    return { top, left };
  };

  return (
    <>
      <main className="appMain">
        <article className="valentineArticle">
          <section className="valentineCard">
            <header>
              <h1>{message}</h1>
            </header>
            <main>
              <picture>
                <img className="gif" src={gif} alt="Gif" />
              </picture>
            </main>
            <footer className="footerResult">
              {showButton && (
                <button className="answerButton si" onClick={handleYesClick}>
                  💖Si💖
                </button>
              )}

              {showNoButton && (
                <button className="answerButton no" onClick={handleNoClick}>
                  No...💔
                </button>
              )}
            </footer>
          </section>
        </article>
      </main>
      {showRandomNoButton && (
        <button
          className="no answerButton random"
          onClick={handleRandomNoClick}
          style={{
            position: "absolute",
            top: position.top,
            left: position.left,
          }}
        >
          No...💔
        </button>
      )}
    </>
  );
};

export default App;