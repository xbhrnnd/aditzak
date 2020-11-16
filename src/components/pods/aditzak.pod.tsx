import React, { useState, useEffect, useCallback } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Container from "react-bootstrap/Container";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import {
  batua,
  bizkaiera,
  zuberera,
  indikatiboaBatua,
  ahaleraBatua,
  subjuntiboaBatua,
  aginteraBatua,
  indikatiboaBizkaiera,
  ahaleraBizkaiera,
  subjuntiboaBizkaiera,
  aginteraBizkaiera,
  indikatiboaZuberera,
  ahaleraZuberera,
  subjuntiboaZuberera,
  aginteraZuberera,
  orain,
  lehen,
  baldintza,
  etorkizunekoa,
  iraganekoa,
  nor,
  nor_nori,
  nor_nork,
  nor_nori_nork,
  ezDaTopatu,
  bilatuAditza,
} from "../constants/aditzak.constants";

export const AditzakPod: React.FC = () => {
  const [indikatiboa, setIndikatiboa] = useState<any>(indikatiboaBatua);
  const [ahalera, setAhalera] = useState<any>(ahaleraBatua);
  const [subjuntiboa, setSubjuntiboa] = useState<any>(subjuntiboaBatua);
  const [agintera, setAgintera] = useState<any>(aginteraBatua);
  const [aditzEredua, setAditzEredua] = useState<any>("");
  const [aditzModua, setAditzModua] = useState<any>("");
  const [aditzAldia, setAditzAldia] = useState<any>("");
  const [aditzMota, setAditzMota] = useState<any>("");
  const [norkIz, setNorkIz] = useState<any>("");
  const [noriIz, setNoriIz] = useState<any>("");
  const [norIz, setNorIz] = useState<any>("");
  const [emaitza, setEmaitza] = useState<any>("");

  const norkDesgaitu = aditzMota !== nor_nork && aditzMota !== nor_nori_nork;
  const noriDesgaitu = aditzMota !== nor_nori && aditzMota !== nor_nori_nork;
  const norDesgaitu = !aditzMota || aditzMota === nor_nori_nork;
  const norDesgaituHuraHaiek = !aditzMota;

  const aditzEreduAldaketa = (value: string) => {
    if (value === batua) {
      setIndikatiboa(indikatiboaBatua);
      setAhalera(ahaleraBatua);
      setSubjuntiboa(subjuntiboaBatua);
      setAgintera(aginteraBatua);
    } else if (value === bizkaiera) {
      setIndikatiboa(indikatiboaBizkaiera);
      setAhalera(ahaleraBizkaiera);
      setSubjuntiboa(subjuntiboaBizkaiera);
      setAgintera(aginteraBizkaiera);
    } else if (value === zuberera) {
      setIndikatiboa(indikatiboaZuberera);
      setAhalera(ahaleraZuberera);
      setSubjuntiboa(subjuntiboaZuberera);
      setAgintera(aginteraZuberera);
    }
    setAditzEredua(value);
    setAditzModua("");
    setAditzAldia("");
    setAditzMota("");
    setNorkIz("");
    setNoriIz("");
    setNorIz("");
  };

  const aditzMotaAldaketa = (value: any) => {
    setAditzMota(value);
    setNorkIz("");
    setNoriIz("");
    setNorIz("");
  };

  const emaitzaBilatu = useCallback(() => {
    if (aditzEredua && aditzMota && aditzAldia && aditzModua === indikatiboa) {
      if (norIz && aditzMota === nor) {
        setEmaitza(
          aditzModua?.[aditzAldia]?.[aditzMota]?.[norIz]
            ? aditzModua?.[aditzAldia]?.[aditzMota]?.[norIz]
            : ezDaTopatu
        );
      } else if (norIz && noriIz && aditzMota === nor_nori) {
        setEmaitza(
          aditzModua?.[aditzAldia]?.[aditzMota]?.[norIz]?.[noriIz]
            ? aditzModua?.[aditzAldia]?.[aditzMota]?.[norIz]?.[noriIz]
            : ezDaTopatu
        );
      } else if (norIz && norkIz && aditzMota === nor_nork) {
        setEmaitza(
          aditzModua?.[aditzAldia]?.[aditzMota]?.[norkIz]?.[norIz]
            ? aditzModua?.[aditzAldia]?.[aditzMota]?.[norkIz]?.[norIz]
            : ezDaTopatu
        );
      } else if (norIz && noriIz && norkIz && aditzMota === nor_nori_nork) {
        if (norIz === "haiek" || norIz === "eurak") {
          setEmaitza(
            aditzModua?.[aditzAldia]?.[aditzMota]?.plurala?.[norkIz]?.[noriIz]
              ? aditzModua?.[aditzAldia]?.[aditzMota]?.plurala?.[norkIz]?.[
                  noriIz
                ]
              : ezDaTopatu
          );
        } else if (norIz === "hura" || norIz === "bera") {
          setEmaitza(
            aditzModua?.[aditzAldia]?.[aditzMota]?.singularra?.[norkIz]?.[
              noriIz
            ]
              ? aditzModua?.[aditzAldia]?.[aditzMota]?.singularra?.[norkIz]?.[
                  noriIz
                ]
              : ezDaTopatu
          );
        }
      }
    } else {
      setEmaitza("");
    }
    // eslint-disable-next-line
  },[aditzEredua, aditzModua, aditzAldia, aditzMota, norkIz, noriIz, norIz]);

  const filtroakGarbitu = () => {
    setAditzEredua("");
    setAditzModua("");
    setAditzAldia("");
    setAditzMota("");
    setNorkIz("");
    setNoriIz("");
    setNorIz("");
  };

  useEffect(() => {
    emaitzaBilatu();
    // eslint-disable-next-line
  }, [aditzModua, aditzAldia, aditzMota, norkIz, noriIz, norIz]);

  return (
    <>
      <Container>
        <div className="row justify-content-between align-items-center">
          <div className="col-8">
            <div className="row">
              <Container>
                <div className="row justify-content-start aditzak-label">
                  <label htmlFor="aditz-modua">ADITZ EREDUA</label>
                </div>
                <div className="row justify-content-start">
                  <ToggleButtonGroup
                    type="radio"
                    name="aditz-eredua"
                    value={aditzEredua}
                    onChange={(e: string) => aditzEreduAldaketa(e)}
                  >
                    <ToggleButton variant="primary" value={batua}>
                      Batua
                    </ToggleButton>
                    <ToggleButton variant="primary" value={bizkaiera}>
                      Bizkaiera
                    </ToggleButton>
                    <ToggleButton variant="primary" value={zuberera}>
                      Zuberera
                    </ToggleButton>
                  </ToggleButtonGroup>
                </div>
              </Container>
            </div>

            <div className="row">
              <Container>
                <div className="row justify-content-start aditzak-label">
                  <label htmlFor="aditz-modua">MODUA</label>
                </div>
                <div className="row justify-content-start">
                  <ToggleButtonGroup
                    type="radio"
                    name="aditz-modua"
                    value={aditzModua}
                    onChange={(e: any) => setAditzModua(e)}
                  >
                    <ToggleButton
                      variant="primary"
                      value={indikatiboa}
                      defaultChecked
                    >
                      Indikatiboa
                    </ToggleButton>
                    <ToggleButton variant="primary" value={ahalera} disabled>
                      Ahalera
                    </ToggleButton>
                    <ToggleButton
                      variant="primary"
                      value={subjuntiboa}
                      disabled
                    >
                      Subjuntiboa
                    </ToggleButton>
                    <ToggleButton variant="primary" value={agintera} disabled>
                      Agintera
                    </ToggleButton>
                  </ToggleButtonGroup>
                </div>
              </Container>
            </div>

            <div className="row">
              <Container>
                <div className="row justify-content-start aditzak-label">
                  <label htmlFor="aditz-mota">MOTA</label>
                </div>
                <div className="row justify-start-center">
                  <ToggleButtonGroup
                    type="radio"
                    name="aditz-mota"
                    value={aditzMota}
                    onChange={(e: any) => aditzMotaAldaketa(e)}
                  >
                    <ToggleButton variant="primary" value={nor}>
                      Nor
                    </ToggleButton>
                    <ToggleButton variant="primary" value={nor_nori}>
                      Nor-Nori
                    </ToggleButton>
                    <ToggleButton variant="primary" value={nor_nork}>
                      Nor-Nork
                    </ToggleButton>
                    <ToggleButton variant="primary" value={nor_nori_nork}>
                      Nor-Nori-Nork
                    </ToggleButton>
                  </ToggleButtonGroup>
                </div>
              </Container>
            </div>

            <div className="row">
              <Container>
                <div className="row justify-content-start aditzak-label">
                  <label htmlFor="aditz-aldia">ALDIA</label>
                </div>
                <div className="row justify-content-start">
                  <ToggleButtonGroup
                    type="radio"
                    name="aditz-aldia"
                    value={aditzAldia}
                    onChange={(e: any) => setAditzAldia(e)}
                  >
                    <ToggleButton variant="primary" value={orain}>
                      Orain (Erreala)
                    </ToggleButton>
                    <ToggleButton variant="primary" value={lehen}>
                      Lehen
                    </ToggleButton>
                    <ToggleButton variant="primary" value={baldintza}>
                      Baldintza
                    </ToggleButton>
                    <ToggleButton variant="primary" value={etorkizunekoa}>
                      Etorkizunekoa{/*  (Litekeena) */}
                    </ToggleButton>
                    <ToggleButton variant="primary" value={iraganekoa}>
                      Iraganekoa{/*  (Ezinezkoa) */}
                    </ToggleButton>
                  </ToggleButtonGroup>
                </div>
              </Container>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <Container>
                <div className="row">
                  <div className="col">
                    <div className="row justify-content-center align-items-center aditzak-label">
                      <label htmlFor="norkIz">Nork</label>
                    </div>
                    <div className="row justify-content-center align-items-center">
                      <ToggleButtonGroup
                        vertical
                        type="radio"
                        name="norkIz"
                        value={norkIz}
                        onChange={(e: any) => setNorkIz(e)}
                      >
                        <ToggleButton
                          variant="secondary"
                          value={"nik"}
                          disabled={norkDesgaitu}
                        >
                          nik
                        </ToggleButton>
                        <ToggleButton
                          variant="secondary"
                          value={"hik"}
                          disabled={norkDesgaitu}
                        >
                          hik
                        </ToggleButton>
                        <ToggleButton
                          variant="secondary"
                          value={aditzEredua === bizkaiera ? "berak" : "hark"}
                          disabled={norkDesgaitu}
                        >
                          {aditzEredua === bizkaiera ? "berak" : "hark"}
                        </ToggleButton>
                        <ToggleButton
                          variant="secondary"
                          value={"guk"}
                          disabled={norkDesgaitu}
                        >
                          guk
                        </ToggleButton>
                        <ToggleButton
                          variant="secondary"
                          value={"zuk"}
                          disabled={norkDesgaitu}
                        >
                          zuk
                        </ToggleButton>
                        <ToggleButton
                          variant="secondary"
                          value={"zuek"}
                          disabled={norkDesgaitu}
                        >
                          zuek
                        </ToggleButton>
                        <ToggleButton
                          variant="secondary"
                          value={aditzEredua === bizkaiera ? "eurek" : "haiek"}
                          disabled={norkDesgaitu}
                        >
                          {aditzEredua === bizkaiera ? "eurek" : "haiek"}
                        </ToggleButton>
                      </ToggleButtonGroup>
                    </div>
                  </div>

                  <div className="col">
                    <div className="row justify-content-center align-items-center aditzak-label">
                      <label htmlFor="noriIz">Nori</label>
                    </div>
                    <div className="row justify-content-center align-items-center">
                      <ToggleButtonGroup
                        vertical
                        type="radio"
                        name="noriIz"
                        value={noriIz}
                        onChange={(e: any) => setNoriIz(e)}
                      >
                        <ToggleButton
                          variant="secondary"
                          value={"niri"}
                          disabled={noriDesgaitu}
                        >
                          niri
                        </ToggleButton>
                        <ToggleButton
                          variant="secondary"
                          value={"hiri"}
                          disabled={noriDesgaitu}
                        >
                          hiri
                        </ToggleButton>
                        <ToggleButton
                          variant="secondary"
                          value={aditzEredua === bizkaiera ? "berari" : "hari"}
                          disabled={noriDesgaitu}
                        >
                          {aditzEredua === bizkaiera ? "berari" : "hari"}
                        </ToggleButton>
                        <ToggleButton
                          variant="secondary"
                          value={"guri"}
                          disabled={noriDesgaitu}
                        >
                          guri
                        </ToggleButton>
                        <ToggleButton
                          variant="secondary"
                          value={"zuri"}
                          disabled={noriDesgaitu}
                        >
                          zuri
                        </ToggleButton>
                        <ToggleButton
                          variant="secondary"
                          value={"zuei"}
                          disabled={noriDesgaitu}
                        >
                          zuei
                        </ToggleButton>
                        <ToggleButton
                          variant="secondary"
                          value={aditzEredua === bizkaiera ? "eurei" : "haiei"}
                          disabled={noriDesgaitu}
                        >
                          {aditzEredua === bizkaiera ? "eurei" : "haiei"}
                        </ToggleButton>
                      </ToggleButtonGroup>
                    </div>
                  </div>

                  <div className="col">
                    <div className="row justify-content-center align-items-center aditzak-label">
                      <label htmlFor="norIz">Nor</label>
                    </div>
                    <div className="row justify-content-center align-items-center">
                      <ToggleButtonGroup
                        vertical
                        type="radio"
                        name="norIz"
                        value={norIz}
                        onChange={(e: any) => setNorIz(e)}
                      >
                        <ToggleButton
                          variant="secondary"
                          value={"ni"}
                          disabled={norDesgaitu}
                        >
                          ni
                        </ToggleButton>
                        <ToggleButton
                          variant="secondary"
                          value={"hi"}
                          disabled={norDesgaitu}
                        >
                          hi
                        </ToggleButton>
                        <ToggleButton
                          variant="secondary"
                          value={aditzEredua === bizkaiera ? "bera" : "hura"}
                          disabled={norDesgaituHuraHaiek}
                        >
                          {aditzEredua === bizkaiera ? "bera" : "hura"}
                        </ToggleButton>
                        <ToggleButton
                          variant="secondary"
                          value={"gu"}
                          disabled={norDesgaitu}
                        >
                          gu
                        </ToggleButton>
                        <ToggleButton
                          variant="secondary"
                          value={"zu"}
                          disabled={norDesgaitu}
                        >
                          zu
                        </ToggleButton>
                        <ToggleButton
                          variant="secondary"
                          value={"zuek"}
                          disabled={norDesgaitu}
                        >
                          zuek
                        </ToggleButton>
                        <ToggleButton
                          variant="secondary"
                          value={aditzEredua === bizkaiera ? "eurak" : "haiek"}
                          disabled={norDesgaituHuraHaiek}
                        >
                          {aditzEredua === bizkaiera ? "eurak" : "haiek"}
                        </ToggleButton>
                      </ToggleButtonGroup>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </div>

        <div className="row">
          <Container>
            <div className="row justify-content-center align-items-center">
              <div className="col-2 center">
                <div className="row justify-content-center align-items-center">
                  <div className="col right">
                    <OverlayTrigger
                      key={"top"}
                      placement={"top"}
                      overlay={
                        <Tooltip id={`tooltip-${"top"}`}>
                          Bilatu aditz berri bat
                        </Tooltip>
                      }
                    >
                      <img
                        className="ikonoa"
                        src="assets/bilatu.png"
                        onClick={filtroakGarbitu}
                        alt="Bilaketa berria"
                        /* title="Bilatu berriro" */
                      />
                    </OverlayTrigger>
                  </div>
                  <div className="col etiketa left">Bilatu berriro</div>
                </div>
              </div>
              <div className="col-2 center">
                <div className="row">
                  <div className="col right">
                    <OverlayTrigger
                      key={"top"}
                      placement={"top"}
                      overlay={
                        <Tooltip id={`tooltip-${"top"}`}>
                          Kopiatu aditza
                        </Tooltip>
                      }
                    >
                      <CopyToClipboard text={emaitza}>
                        <img
                          className="ikonoa"
                          src="assets/kopiatu.png"
                          alt="Emaitza kopiatu"
                          /* title="Bilatutako aditza kopiatu" */
                        />
                      </CopyToClipboard>
                    </OverlayTrigger>
                  </div>
                  <div className="col etiketa left">Kopiatu emaitza</div>
                </div>
              </div>
              <div className="col-8 center">
                <input
                  className="aditzak-input"
                  placeholder={bilatuAditza}
                  value={emaitza}
                  disabled
                />
              </div>
            </div>
          </Container>
        </div>
      </Container>
    </>
  );
};
