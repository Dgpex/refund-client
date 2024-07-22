import React from "react";

import Banner from "./Banner";
import Banner2 from "./Banner2";

function HomePage() {
  return (
    <div>
      <Banner />
      <div className="p-10">
        <Banner2 />
      </div>
    </div>
  );
}

export default HomePage;
