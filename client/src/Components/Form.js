// ✅ 
import React from "react";
//import styles 
import "../App.css"


function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="Search for books"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-sm btn-primary mt-3"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;
