import React from 'react'
import fetch from 'node-fetch';

export default function to() {
    let todo = {
        name: 'raghav'
    };

    fetch('/api/get/', {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
        .then(json => window.location.replace(json.url))

    return (<></>)
}
