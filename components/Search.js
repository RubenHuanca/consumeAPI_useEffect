// npm install axios

import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Search() {

    const [repos, setRepos] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        axios.get(`https://api.github.com/users/${search}/repos`)
        .then(result => {
            console.log(result.data)
            setRepos(result.data)
        })
        .catch(error => console.log(error))
    }, [search])

    return (
        <div>
            <h1>Find Repositories</h1>
            <input type="text" placeholder="username" value = {search} onChange = {e => setSearch(e.target.value)} />            
            {repos.map(item => (
                <h3 key = {item.id}> <a href={item.html_url}>{item.name}</a> </h3>
            ))}            
        </div>
    )
}

export default Search
