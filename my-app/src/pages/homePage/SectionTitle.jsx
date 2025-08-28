import React from "react";

const sectionTitle = ({ sectionTitleContent }) => {
  if (!sectionTitleContent) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="section-title text-center capitalize mb-16 py-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          {sectionTitleContent.title}
        </h2>
        <h6 className="text-gray-600  md:text-lg lg:text-2xl">
          {sectionTitleContent.description}
        </h6>
      </div>
    </div>
  );
};

export default sectionTitle;
