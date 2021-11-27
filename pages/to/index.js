import React from 'react'
import fetch from 'node-fetch'
import { useRouter } from 'next/router'
const queryString = require('query-string');

console.log(location.search);

export default function to(props) {
    const router = useRouter()
    let todo = {
        name: 'raghav'
    };

    fetch('/api/get/', {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
        .then(json => window.location.replace(json.url))

    return (<>
        you will be redirected shotly
        {location.search}
    </>)
}
