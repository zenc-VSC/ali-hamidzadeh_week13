import React, { useState } from "react";
import "./Tab.css";

const tabData = [
  { id: 0, title: "Tab 1", content: "Content 1" },
  { id: 1, title: "Tab 2", content: "Content 2" },
  { id: 2, title: "Tab 3", content: "Content 3" },
  { id: 3, title: "Tab 4", content: "Content 4" },
  { id: 4, title: "Tab 5", content: "Content 5" },
];

function Tab() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container">
      <div className="tabs-container">
        {tabData.map((tab, index) => (
          <div
            key={tab.id}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>

      <div className="tabs-content">
        <div className="content">
          <h2>{tabData[activeTab].content}</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ducimus
            quibusdam dolore expedita cumque iste iusto laboriosam, quaerat quo
            eaque voluptates consequatur? Accusantium cumque culpa maxime
            quibusdam qui ipsa nihil!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tab;
