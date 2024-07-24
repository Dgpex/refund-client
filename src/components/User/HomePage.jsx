import React from "react";

import Banner from "./Banner";
import Banner2 from "./Banner2";

function HomePage() {
  return (
    <div>
      <Banner />
      <div className="lg:p-10 p-5">
        <Banner2 />
      </div>
    </div>
  );
}

export default HomePage;
