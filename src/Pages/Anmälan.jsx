import "./Pages.css";

export default function Anmälan() {
  return (
    <div className="Anmälan_Container">
      <h1>Anmälan</h1>
      <p>
        Via formuläret nedan går det att anmäla sig till Kramfors Matstafett,
        som går av stapeln den 24/5 2025. Priset är 400 kr per par. Alla priser
        angivna på webbplatsen är inklusive moms och erläggs till <strong>Bankgiro:
        202-2804</strong>  samband med anmälan. Märk betalning med namn (förnamn och
        efternamn).
      </p>
      <a href="https://docs.google.com/forms/d/10niU3YQjkVDIZOs8JYQjDhFsh6e86KwXFRXvWOPgWvo/viewform?ts=6748d2ad&edit_requested=true">
      <button><h3>Anmäl dig här</h3></button>
      </a>
    </div>
  );
}
