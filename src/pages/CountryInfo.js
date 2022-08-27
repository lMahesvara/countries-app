import React from "react"
import { useParams } from "react-router-dom"
import CountryFullInfo from "../components/country-page/CountryFullInfo"
import Loader from "../components/Loader"
import Message from "../components/Message"
import { useFetch } from "../hooks/useFetch"

const url = "https://restcountries.com/v3.1/alpha/"
const filters =
  "?fields=name,capital,cca2,population,region,subregion,demonym,flags&fullText=true"

const secondUrl = "https://restcountries.com/v2/alpha/"
const secondFilters =
  "?fullText=true&fields=topLevelDomain,currencies,languages,borders,nativeName"

const CountryInfo = () => {
  const { country } = useParams()
  const { data, error, loading } = useFetch(url + country + filters)
  const { data: extraData } = useFetch(secondUrl + country + secondFilters)
  return (
    <>
      {loading && <Loader />}
      {error && !loading && <Message msg={error.message} bgColor="red" />}
      {extraData && data && !loading && !error && (
        <CountryFullInfo key={data.cca2} country={data} extraData={extraData} />
      )}
    </>
  )
}

export default CountryInfo
