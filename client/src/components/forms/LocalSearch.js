import React from "react";

const LocalSearch = ({keyword, setKeyword}) => {

      //step 3 handle search function
  const handleSearchChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };

    return (
      
        // {/* step2  create input field for search query*/}
          <input 
            type ="search"
            placeholder="Filter"
            value={keyword}
            onChange={handleSearchChange}
            className="form-control mb-4"
          />

        
    )
}

export default LocalSearch;