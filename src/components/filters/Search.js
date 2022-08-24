import React from "react"

const Search = ({ setFilter, filter }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="form-filter">
      <input
        type="text"
        name="filter"
        placeholder="Search for a country..."
        onChange={(e) =>
          setFilter({ ...filter, [e.target.name]: e.target.value })
        }
      />
    </form>
  )
}

export default Search
