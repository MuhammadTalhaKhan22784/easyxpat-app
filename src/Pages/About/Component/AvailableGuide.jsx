import React from "react";

const AvailableGuide = () => {
  return (
    <React.Fragment>
      <div className="available_guide_section">
        <h2>Available Guides</h2>
        <p>At the moment we only support the following cities and guides:</p>
        <ul>
          <li>Frankfurt</li>
          <li className="ms-3">Blue Card</li>
        </ul>
        <p>The following cities will be supported in the coming months:</p>
        <ul>
          <li>Berlin</li>
          <li>Cologne</li>
          <li>Düsseldorf</li>
          <li>Frankfurt</li>
          <li>Hamburg</li>
          <li>Munich</li>
          <li>Stuttgart</li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default AvailableGuide;
