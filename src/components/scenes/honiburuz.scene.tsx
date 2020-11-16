import React from "react";
import { HoniBuruzPod } from "../pods/honiburuz.pod";

export const HoniBuruzScene: React.FC = () => {
  return (
    <>
      {/*       <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Hasiera</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Honi buruz</Breadcrumb.Item>
      </Breadcrumb> */}
      <div className="h1-class">
        <div className="h1-honi-buruz">
          <h1>Honi buruz</h1>
        </div>
      </div>
      
      <div className="aditzak">
        <div className="div-aditzak">
          <HoniBuruzPod />
        </div>
      </div>
    </>
  );
};
