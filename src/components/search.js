import React, {useState} from 'react';
import '../App.css';

const Search = (props) => {
  const [search, setSearch] = useState('')

 const handleChange = (e) => {
    setSearch(e.target.value)
  }

  props.seach(search);

    return(
        <div className="max-w-5xl mx-auto py-5 px-1 border-b border-gray-300 box-shadow my-8 bg-white rounded-md">
        <div className="flex justify-between">
          <div className="flex space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" className="focus:outline-none" placeholder="Search" onChange={e => handleChange(e)}/>
          </div>
          <div className="flex items-center space-x-5">
              <p className="text-sm searchResults text-gray-600 ">123 Results</p>
            <p className="hover:text-white bg-blue-600 py-1 px-2 text-sm text-white font-semibold rounded-md">Search</p>
          </div>
        </div>
      </div>
    )
}

export default Search;