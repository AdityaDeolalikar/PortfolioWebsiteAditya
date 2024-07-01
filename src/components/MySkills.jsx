import React from "react";
import HorizontalLine from "./HorizontalLine";
import TImelineComponent from "./TImelineComponent";

const MySkills = () => {
  return (
    <div>
      <div className="mt-20 text-2xl font-semibold text-center xl:text-2xl">
        My Timeline
        <HorizontalLine width="w-1/4" />
      </div>

      <div className="mt-20">
        <TImelineComponent />
      </div>
    </div>
  );
};

export default MySkills;
