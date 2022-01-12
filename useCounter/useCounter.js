import { useState } from 'react';

export const useCounter = (initialState = 10) => {

    const [stateCounter, setStateCounter] = useState(initialState)

    const increment = (  ) => {  
        setStateCounter(stateCounter + 1) 
        
    }

    const decrement = (  ) => {
        setStateCounter(stateCounter - 1)
    }

    const refresh = () => {
        setStateCounter(initialState)
    }


    return { stateCounter , increment , decrement ,refresh }


}
