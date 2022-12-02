import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchPosts } from "../../../services/reducres/post/postSlice"

function Search({ placeholder }) {
    const dispatch = useDispatch()
    const [query, setQuery] = useState("")

    useEffect(() => {
        dispatch(searchPosts(query ? query : ""))
    }, [query])

    return (
        <div>
            <input
                className="px-2 py-1 bg-transparent outline-none text-white"
                type="search"
                onChange={(e) => setQuery(e.target.value)}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Search