import React, { createContext, useState } from 'react'

const CountContext = createContext({
    counter: 0,
    incrementCount: ()=>{}
});

export const CountContextProvider = (props) => {

    const [count, setCount] = useState(10);

    const incrementCount = () => {
        setCount((prevState) => prevState + 1);
    }

    const context = {
        count: count,
        incrementCount: incrementCount
    }

    return <CountContext.Provider value={context}>
        {props.children}
    </CountContext.Provider>
}

export default CountContext;