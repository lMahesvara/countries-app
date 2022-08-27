import React from "react"
import RegionFilter from "./RegionFilter"
import Search from "./Search"

const FormFilter = ({ filter, setFilter }) => {
  return (
    <section className="container spacer filter-content">
      <Search setFilter={setFilter} filter={filter} />
      <RegionFilter setFilter={setFilter} filter={filter} />
    </section>
  )
}

export default FormFilter
