import React from "react";
import { AditzakPod } from "../pods/aditzak.pod";

export const AditzakScene: React.FC = () => {
  return (
    <>
      {/*       <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Hasiera</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Aditz laguntzailea</Breadcrumb.Item>
      </Breadcrumb> */}
      <div className="h1-class">
        <div className="h1-aditzak">
          <h1>Aditz laguntzailea</h1>
        </div>
      </div>
      <div className="aditzak">
        <div className="div-aditzak">
          <AditzakPod />
        </div>
      </div>
    </>
  );
};
