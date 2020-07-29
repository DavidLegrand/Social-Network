import { useEffect } from 'react'

const useFetch = (endpoint, setter) => {
  async function fetchData() {
    if (endpoint) {
      await fetch(endpoint)
        .then(res => res.json())
        .then(res => {console.log(res); setter(res)})
        .catch(err => console.error(err))
    }
  }
  useEffect(() => {
    fetchData();
  }, [endpoint, setter])
}

const useGet = (endpoint) => {
  useEffect(() => {
    if (endpoint) {
      console.log(endpoint)
      fetch(endpoint)
        .then(res => res.json())
        .catch(err => console.error(err))
    }
  }, [endpoint])

}

export { useFetch, useGet }