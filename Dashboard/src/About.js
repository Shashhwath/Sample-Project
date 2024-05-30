import React, { useEffect, useState } from 'react'

const About = () => {

    const [value,setValue] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setValue(json))
    }, [])
    return (
        <div className='table'>
            <table>
            <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            </tr>
            {
              value.map(c => <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.title}</td>
                <td>{c.body}</td>
              </tr>)
            }
           </table>
        </div>
    )
}

export default About
