import "./Pages.css";
import RT29 from "../assets/Bilder/RT29.png"

export default function Arrangörer() {
  return (
    <div >
        <div className="Arrangörer_Container">
      <h2>Arrangörer</h2>
      <br />
      <p>
        Kramfors Matstafett arrangeras av Round table 29 Kramfors. Vi är en
        ideell förening där överskottet av vår verksamhet skänks till välgörande
        ändamål.
      </p>
      <br />
      <p>Organisationsnummer: 802495-1173</p>
      <br />
      <p>Kontakt: <a href="mailto:info@kramforsmatstafett.se">info@kramforsmatstafett.se</a> </p>
        <br />
      <p>Facebook: <a href="https://www.facebook.com/rt29kramfors">Round Table 29 Kramfors</a></p>
       <br />
        <img src={RT29} alt="" />
        </div>
    </div>
  );
}
