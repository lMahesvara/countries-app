import React from "react"

const RegionFilter = ({ setFilter, filter }) => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]

  const handleChange = (e) => {
    setFilter({ ...filter, region: e.target.value })
    if (e.target.value === "" && e.target.selectedIndex === 0) return

    //make the option Filter by region hidden when the user selects another option
    e.target.options[0].hidden = true
    e.target.options[0].disabled = true

    //make the option All regions visible
    e.target.options[1].hidden = false
    e.target.options[1].disabled = false
  }

  return (
    <div className="select-bg">
      <select name="region" onChange={(e) => handleChange(e)}>
        <option value="">Filter by Region...</option>
        <option value="" hidden disabled>
          All Regions
        </option>
        {regions.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  )
}

export default RegionFilter
