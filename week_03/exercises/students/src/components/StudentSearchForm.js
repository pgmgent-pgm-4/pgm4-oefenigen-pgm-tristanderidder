import React from 'react'

export default function StudentSearchForm({search, setSearch}) {
    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    // console.log(search);
  return (
    <div>
        <form>
            <input
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Search for a student"
            />
        </form>
    </div>
  )
}
