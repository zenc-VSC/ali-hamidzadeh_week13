import React, { useState } from "react";
import "./Tab.css";

function Tab() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container">
      <div className="tabs-container">
        <div className="tab active" onClick={() => setActiveTab(0)}>
          Tab 1
        </div>
        <div className="tab" onClick={() => setActiveTab(1)}>
          Tab 2
        </div>
        <div className="tab" onClick={() => setActiveTab(2)}>
          Tab 3
        </div>
        <div className="tab" onClick={() => setActiveTab(3)}>
          Tab 4
        </div>
        <div className="tab" onClick={() => setActiveTab(4)}>
          Tab 5
        </div>
      </div>
      <div className="tabs-content">
        {activeTab === 0 && (
          <div className="content">
            <h2>Content 1</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              ducimus quibusdam dolore expedita cumque iste iusto laboriosam,
              quaerat quo eaque voluptates consequatur? Accusantium cumque culpa
              maxime quibusdam qui ipsa nihil!
            </p>
          </div>
        )}

        {activeTab === 1 && (
          <div className="content">
            <h2>Content 2</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              ducimus quibusdam dolore expedita cumque iste iusto laboriosam,
              quaerat quo eaque voluptates consequatur? Accusantium cumque culpa
              maxime quibusdam qui ipsa nihil!
            </p>
          </div>
        )}

        {activeTab === 2 && (
          <div className="content">
            <h2>Content 3</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              ducimus quibusdam dolore expedita cumque iste iusto laboriosam,
              quaerat quo eaque voluptates consequatur? Accusantium cumque culpa
              maxime quibusdam qui ipsa nihil!
            </p>
          </div>
        )}

        {activeTab === 3 && (
          <div className="content">
            <h2>Content 4</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              ducimus quibusdam dolore expedita cumque iste iusto laboriosam,
              quaerat quo eaque voluptates consequatur? Accusantium cumque culpa
              maxime quibusdam qui ipsa nihil!
            </p>
          </div>
        )}

        {activeTab === 4 && (
          <div className="content">
            <h2>Content 5</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              ducimus quibusdam dolore expedita cumque iste iusto laboriosam,
              quaerat quo eaque voluptates consequatur? Accusantium cumque culpa
              maxime quibusdam qui ipsa nihil!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tab;
