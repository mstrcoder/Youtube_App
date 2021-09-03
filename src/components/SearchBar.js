import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");
  // state = { term: "" };
  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
    // console.log(this.state.term);
  };
  // render() {
  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
  // }
};

export default SearchBar;
