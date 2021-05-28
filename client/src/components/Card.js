// ✅ 
import React from "react";

function Card({ icon, title, children }) {
  return (
    <div className="card mt-3 mb-3">
      <div className="card-header">
        <h3>
          <strong>
             {title}
          </strong>
        </h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
