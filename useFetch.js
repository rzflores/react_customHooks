import { useState ,useEffect ,useRef } from 'react'
export const useFetch = (url) => {

    const isMountedRef = useRef(true)

    const [fetchState, setFetchState] = useState({data:null , loading : true , error:null})

    useEffect(() => {
        return () => {
            isMountedRef.current = false;
        }
    }, [])



    useEffect(() => {
        
        setFetchState({data:null , loading : true , error:null})


        fetch(url)
        .then( resp  => resp.json())
        .then( data => {
           
                // setTimeout(() => {
                    if( isMountedRef.current ){
                    setFetchState({data , loading : false , error:null}) 
                    }else{
                        // console.log('set state no se llamo')
                    }
                // }, 4000);
        })
        .catch(() => {
                setFetchState({
                    data: null,
                    loading:false,
                    error: 'no se puedo cargar la data'
                })
        })
        
    }, [url])


    return fetchState
}
