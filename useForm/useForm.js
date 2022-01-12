import { useState } from 'react';

export const useForm = (
   initialState = {}
) => {

    const [formValueState, setFormValueState] = useState(initialState)


    const resetForm  = () => {
        setFormValueState( initialState )
    }


    const handleInputChange = ({ target }) => {
        setFormValueState({
            ...formValueState ,
            [ target.name ] :target.value              
        })
        
    }
    return [ formValueState , handleInputChange , resetForm]

}
