import React from "react";
import { LehenHitzaPod } from "../pods/lehen-hitza.pod";

export const LehenHitzaScene: React.FC = () => {
  return (
    <>
      {/*       <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Hasiera</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Lehen hitza euskaraz</Breadcrumb.Item>
      </Breadcrumb> */}
      <div className="h1-class">
        <div className="h1-lehen-hitza">
          <h1>Lehen hitza euskaraz</h1>
        </div>
      </div>

      <div className="aditzak">
        <div className="div-aditzak">
          <LehenHitzaPod />
        </div>
      </div>
    </>
  );
};
