import React from "react"
import { useNavigate } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"

const URL = "https://restcountries.com/v2/alpha?codes="
const FILTERS = "&fields=nativeName,alpha2Code"

const CountryFullInfo = ({ country, extraData }) => {
  const navigate = useNavigate()
  const { borders } = extraData
  const { data: bordersName } = useFetch(URL + borders.join(",") + FILTERS)

  const handleClick = (code) => {
    navigate(`/countries/${code}`)
  }

  return (
    <div>
      <section className="container spacer-double">
        <button
          onClick={() => {
            navigate("/")
          }}
        >
          Back
        </button>
      </section>
      <section className="container flex">
        <div className="country-flag">
          <img src={country.flags.png} alt={`flag of ${country.name.common}`} />
        </div>
        <div className="country-info">
          <h2>{country.name.common}</h2>
          <div className="flex">
            <div>
              <p>
                <b>Native Name: </b>
                {extraData.nativeName}
              </p>
              <p>
                <b>Population: </b>
                {country.population}
              </p>
              <p>
                <b>Region: </b>
                {country.region}
              </p>
              <p>
                <b>Sub Region: </b>
                {country.subregion}
              </p>
              <p>
                <b>Capital: </b>
                {country.capital[0]}
              </p>
            </div>
            <div>
              <p>
                <b>Top Level Domain: </b>
                {extraData.topLevelDomain}
              </p>
              <p>
                <b>Currencies: </b>
                {extraData.currencies?.map((el) => el.name)}
              </p>
              <p>
                <b>Languages: </b>
                {new Intl.ListFormat("en").format(
                  extraData.languages?.map((el) => el.name)
                )}
              </p>
            </div>
          </div>
          <div className="borders-container">
            <p>
              <b>Border Countries:</b>
            </p>
            {bordersName?.map((el) => (
              <button
                className="border"
                key={el.nativeName}
                onClick={() => handleClick(el.alpha2Code)}
              >
                {el.nativeName}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CountryFullInfo
