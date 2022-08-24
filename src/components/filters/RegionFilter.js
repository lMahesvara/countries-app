import React from "react"

const RegionFilter = ({ setFilter, filter }) => {
  return (
    <div className="select-bg">
      <select
        name="region"
        onChange={(e) =>
          setFilter({ ...filter, [e.target.name]: e.target.value })
        }
      >
        <option value="" disabled hidden>
          Filter by Region...
        </option>
        <option value="">All Regions</option>
        {["Africa", "Americas", "Asia", "Europe", "Oceania"].map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  )
}

export default RegionFilter
