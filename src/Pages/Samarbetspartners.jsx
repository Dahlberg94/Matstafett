import "./Pages.css";
import React, { useState } from "react";
import CoopKramfors from "../assets/SponsorBilder/CoopKramfors.jpg";
import KarosseriAB from "../assets/SponsorBilder/KramforsKarosseri.jpg";
import Intersport from "../assets/SponsorBilder/Intersport.jpg";
import Handelsbanken from "../assets/SponsorBilder/Handelsbanken.jpg";
import LEBygg from "../assets/SponsorBilder/LeBygg.jpg";
import Sun4Energy from "../assets/SponsorBilder/Sun4Energy.jpg";

export default function Samarbetspartners() {
  const [openSections, setOpenSections] = useState({
    huvudSponsor: false,
    guldSponsor: false,
    silverSponsor: false,
    bronsSponsor: false,
  });

  const [hoveredSponsor, setHoveredSponsor] = useState(null);

  const sponsor = {
    "Coop Kramfors": CoopKramfors,
    "Kramfors Karosseri AB": KarosseriAB,
    "Intersport": Intersport,
    "Handelsbanken": Handelsbanken,
    "LE Bygg": LEBygg,
    "Sun4Energy": Sun4Energy,
  };

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="Sponro_container">
      <div className="Samarbetspartners">
        <h2>Samarbetspartners</h2>
        <p>
          Här är våra kära samarbetspartners som bidrar till att Matstafetten i
          Kramfors går av stapeln.
        </p>
        <p>
          Vill även du synas och vara en del i att bygga upp Kramfors matstafett
          till sin maximala potential? Kontakta oss så berättar vi hur du och
          ditt företag kan bli delaktig.
        </p>
      </div>

      <hr />
      <div className="HuvudSponsor">
        <h1
          className="sponsorDropDown"
          onClick={() => toggleSection("huvudSponsor")}
        >
          HuvudSponsor {openSections.huvudSponsor ? "-" : "+"}{" "}
        </h1>

        {openSections.huvudSponsor && (
          <div className="SponsorItem">
            <h2
              onMouseEnter={() => setHoveredSponsor("Coop Kramfors")}
              onMouseLeave={() => setHoveredSponsor(null)}
            >
              Coop Kramfors
            </h2>
            {hoveredSponsor === "Coop Kramfors" && (
              <div className="SponsorImage">
                <img src={sponsor[hoveredSponsor]} alt={CoopKramfors} />
              </div>
            )}
          </div>
        )}
      </div>

      <hr />
      <div className="GuldSponsor">
        <h1
          className="sponsorDropDown"
          onClick={() => toggleSection("guldSponsor")}
        >
          GuldSponsorer {openSections.guldSponsor ? "-" : "+"}{" "}
        </h1>
        {openSections.guldSponsor && (
          <div>
            <div className="SponsorItem">
              <h2
                onMouseEnter={() => setHoveredSponsor("Kramfors Karosseri AB")}
                onMouseLeave={() => setHoveredSponsor(null)}
              >
                Kramfors Karosseri AB
              </h2>
              {hoveredSponsor === "Kramfors Karosseri AB" && (
                <div className="SponsorImage">
                  <img src={sponsor[hoveredSponsor]} alt={KarosseriAB} />
                </div>
              )}
            </div>
            <h2>Kramforsbladet</h2>
            <h2>HotellKramm</h2>
          </div>
        )}
      </div>
      <hr />
      <div className="Silversponsor">
        <h2
          className="sponsorDropDown"
          onClick={() => toggleSection("silverSponsor")}
        >
          Sivlersponsorer {openSections.silverSponsor ? "-" : "+"}{" "}
        </h2>
        {openSections.silverSponsor && (
          <div>
            <div className="SponsorItem">
            <h3
                onMouseEnter={() => setHoveredSponsor("Intersport")}
                onMouseLeave={() => setHoveredSponsor(null)}
              >
                Intersport
              </h3>
              {hoveredSponsor === "Intersport" && (
                <div className="SponsorImage">
                  <img src={sponsor[hoveredSponsor]} alt={Intersport} />
                </div>
              )}
            </div>

            <div className="SponsorItem">
            <h3
                onMouseEnter={() => setHoveredSponsor("Handelsbanken")}
                onMouseLeave={() => setHoveredSponsor(null)}
              >
                Handeslbanken
              </h3>
              {hoveredSponsor === "Handelsbanken" && (
                <div className="SponsorImage">
                  <img src={sponsor[hoveredSponsor]} alt={Handelsbanken} />
                </div>
              )}
            </div>

            <div className="SponsorItem">
            <h3
                onMouseEnter={() => setHoveredSponsor("LE Bygg")}
                onMouseLeave={() => setHoveredSponsor(null)}
              >
                LE Bygg
              </h3>
              {hoveredSponsor === "LE Bygg" && (
                <div className="SponsorImage">
                  <img src={sponsor[hoveredSponsor]} alt={LEBygg} />
                </div>
              )}
            </div>

            <div className="SponsorItem">
            <h3
                onMouseEnter={() => setHoveredSponsor("Sun4Energy")}
                onMouseLeave={() => setHoveredSponsor(null)}
              >
                Sun4Energy
              </h3>
              {hoveredSponsor === "Sun4Energy" && (
                <div className="SponsorImage">
                  <img src={sponsor[hoveredSponsor]} alt={Sun4Energy} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <hr />
      <div className="Bronssponsor">
        <h3
          className="sponsorDropDown"
          onClick={() => toggleSection("bronsSponsor")}
        >
          Bronssponsorer {openSections.bronsSponsor ? "-" : "+"}{" "}
        </h3>
        {openSections.bronsSponsor && (
          <div>
            <p>BN:s Motor</p>
          </div>
        )}
      </div>
    </div>
  );
}
