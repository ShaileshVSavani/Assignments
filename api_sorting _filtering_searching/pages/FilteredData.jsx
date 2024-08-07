

import React from 'react'
import { useSearchParams } from 'react-router-dom'

const FilteredData = () => {
  let [query, setQuery] = useSearchParams()

  const handleSearch = (e) => {
    setQuery({ search: e.target.value })
  }

  return (
    <div>
        <button className="btn btn-outline btn-info mx-1 mt-2" onClick={() => setQuery({})}>ALL</button>
        <button className="btn btn-outline mx-1 mt-2" onClick={() => setQuery({ sort: "LTH" })}>LTH</button>
        <button className="btn btn-outline btn-primary mx-1 mt-2" onClick={() => setQuery({ sort: "HTL" })}>HTL</button>
        <button className="btn btn-outline btn-secondary mx-1 mt-2" onClick={() => setQuery({ category: "electronics" })}>Electronics</button>
        <button className="btn btn-outline btn-accent mx-1 mt-2" onClick={() => setQuery({ category: "jewelery" })}>Jewelery</button>
        <button className="btn btn-info mx-1 mt-2" onClick={() => setQuery({ category: "women's clothing" })}>Women's clothing</button>
      <button className="btn btn-warning mx-1 mt-2" onClick={() => setQuery({ category: "men's clothing" })}>Men's clothing</button>
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered mx-1 mt-2"
        onChange={handleSearch}
      />
    </div>
  )
}

export default FilteredData
