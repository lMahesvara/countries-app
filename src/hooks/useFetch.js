import { useState, useEffect } from "react"

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch(url, { signal })
        if (!res.ok) {
          let err = new Error("Error en la petición Fetch")
          err.status = res.status || "000"
          err.statusText = res.statusText || "Ocurrió un error"
          throw err
        }
        const json = await res.json()
        //verify json is an array
        if (Array.isArray(json)) {
          json.sort(function (a, b) {
            if (a.name?.common && b.name?.common)
              return a.name.common.localeCompare(b.name.common)
            if (a.nativeName && b.nativeName)
              return a.nativeName.localeCompare(b.nativeName)
          })
        }
        if (!signal.aborted) {
          setData(json)
          setError(null)
        }
      } catch (error) {
        setError(error)
        setData(null)
      } finally {
        if (!signal.aborted) setLoading(false)
      }
    }
    fetchData()

    return () => abortController.abort()
  }, [url])

  return { data, error, loading }
}
