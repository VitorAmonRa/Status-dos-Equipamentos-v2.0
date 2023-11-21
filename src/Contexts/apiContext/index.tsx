import { createContext} from "react";



const ApiContext = createContext({});

const ApiProvider = ({children}: {children: React.ReactNode}) => {

    return (
        <ApiContext.Provider value={{ }}>
            <>
                {children}
            </>
        </ApiContext.Provider>
    )
}

export { ApiProvider,ApiContext}