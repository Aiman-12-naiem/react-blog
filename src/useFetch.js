import { useState, useEffect } from 'react';
const useFetch = (uri) => {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const abortErr = new AbortController();
    useEffect(() => {
        setTimeout(() => {
            fetch(uri, { signal: abortErr.signal })
                .then((res) => {
                    if (!res.ok) {
                        throw Error('Something went wrong with Server :( ');
                    }
                    return res.json();
                })
                .then((data) => {
                    setPosts(data);
                    setLoading(false);
                    setError(null);
                })
                .catch((err) => {
                    if(err.name === 'AbortError') {
                        console.log('Abort error');
                    } else{
                        setLoading(false);
                        setError(err.message);
                    }
                })
        }, 3000)
        return () => abortErr.abort(); 
    }, [uri]);
    return { posts, loading, error }
}
export default useFetch;