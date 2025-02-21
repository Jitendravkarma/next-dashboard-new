import React, { memo } from "react";

const ContentHeader = ({img, heading, description, sideImg}) => {
  return (
    <div className="flex flex-wrap gap-2 border-b border-gray-300 mb-2 pb-4">
      <div className="">
        <div className="flex items-center gap-2">
          <img src={img} alt={heading} className="w-7"/>
          <h3 className="text-3xl font-extrabold leading-tight">{heading}</h3>
        </div>
        <p className="my-3 font-light leading-normal">
          {description}
        </p>
      </div>

      <div>
        <img src={sideImg} className="w-full border"/>
      </div>
    </div>
  );
};

export default memo(ContentHeader);
