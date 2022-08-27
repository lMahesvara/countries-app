import React, { useState } from "react"
import FormFilter from "./filters/FormFilter"
import { useFetch } from "../hooks/useFetch"
import Loader from "./Loader"
import Message from "./Message"
import Country from "./Country"

const url = "https://restcountries.com/v3.1/all"

const Countries = () => {
  const { data, error, loading } = useFetch(url)
  const [filter, setFilter] = useState(null)

  return (
    <>
      <FormFilter filter={filter} setFilter={setFilter} />
      {loading && <Loader />}
      {error && !loading && <Message msg={error.message} bgColor="red" />}
      {data && !loading && !error && (
        <section className="container grid">
          {data.map((country) => (
            <Country key={country.cca2} data={country} filter={filter} />
          ))}
        </section>
      )}
    </>
  )
}

export default Countries
