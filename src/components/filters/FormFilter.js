import React from "react"
import RegionFilter from "./RegionFilter"
import Search from "./Search"

const FormFilter = ({ filter, setFilter }) => {
  return (
    <div className="container spacer filter-content">
      <Search setFilter={setFilter} filter={filter} />
      <RegionFilter setFilter={setFilter} filter={filter} />
    </div>
  )
}

export default FormFilter
