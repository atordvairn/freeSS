import React from 'react'
import fetch from 'node-fetch'
import { useRouter } from 'next/router'
import router from 'next/router'

export default function To() {
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
        {JSON.stringify(router.query)}
    </>)
}
