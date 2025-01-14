import "./Pages.css";
//Images
// import matstafettLogo from "../assets/Bilder/Stefettlogga.png";
import matstafettLogo from "../assets/Bilder/matstafettLogga.png";
import pay from "../assets/Bilder/Pay.png";
import kalender from "../assets/Bilder/Kalender.png";


//Feeds
import Instafeed from "../Feeds/InstaFeed";

export default function Home() {
  return (
    <div className="homeContainer">
      <div className="leftHomeContainer">
        <div className="leftHomeInfo">
          <h1> Anmäld dig här!</h1>
          <img src={kalender} alt="kalenderbild" className="KalenderIcon" />
          <h2>24 Maj!</h2>
          <p>Sista Anmälningsdag 11 Maj</p>
          <img src={pay} alt="" className="payIcon" />
          <h3>400kr/par</h3>
        </div>
        {/* <div className="leftHomeInputInfo">
          <div className="nameInfo">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Adress" />
        </div> */}
        <a href="https://docs.google.com/forms/d/10niU3YQjkVDIZOs8JYQjDhFsh6e86KwXFRXvWOPgWvo/viewform?ts=6748d2ad&edit_requested=true">
          <button>
            <h2>Skicka Anmälan!</h2>
          </button>
        </a>
      </div>

      <div className="rightHomeContainer">
        <img className="matstafett_logga" src={matstafettLogo} alt="" />

        <h2>Mat, gemenskap och glädje – välkommen till Kramfors matstafett!</h2>
        <p>
          Matstafetten är ett arrangemang där du äter förrätt, varmrätt och
          efterrätt tillsammans med olika par som du kanske inte känner till på
          förhand. Det är ett fantastiskt tillfälle att träffa nya människor och
          ha en riktigt rolig kväll. Anmälan sker parvis men innebär
          nödvändigtvis inte att ni är ett par. Det går lika bra att anmäla sig
          med en vän, familjemedlem eller kollega. Alla par får ansvar för en
          specifik rätt, vilket innebär att ni får nöjet äta två rätter hos
          några andra. Detta är ingen matlagningstävling utan snarare en
          upplevelse som handlar om att ha roligt tillsammans med nya människor.
        </p>
      </div>
      {/* <Instafeed /> */}
    </div>
  );
}
