import React, { useState } from "react"

const Country = ({ data, filter }) => {
  const [selected, setSelected] = useState(false)

  const handleClick = () => {
    setSelected(!selected)
  }
  const handleFilter = () => {
    if (!filter) return ""
    if (
      filter.filter &&
      !data.name.common.toLowerCase().startsWith(filter.filter.toLowerCase())
    )
      return "hidden"
    if (filter.region && filter.region !== data.region) return "hidden"
    return ""
  }

  return (
    <div className={`flip-card card ${handleFilter()}`} onClick={handleClick}>
      <div className="flip-card-inner">
        <div className="front">
          <div className="front-img">
            <img src={data.flags.png} alt={data.name} />
          </div>
          <div className="front-content">
            <h2>{data.name.common}</h2>
          </div>
        </div>
        <div className="back">
          <p>
            <b>Capital: </b>
            {data.capital}
          </p>
          <p>
            <b>Population: </b>
            {data.population}
          </p>
          <p>
            <b>Region: </b>
            {data.region}
          </p>
          <p>
            <b>Demonym: </b>
            {data.demonyms && data.demonyms.eng.f}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Country
