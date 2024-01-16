import { createContext, useState } from "react";

export const UserConnectedContext = createContext()

const UserProvider = ({children}) => {

    const [userConnected, setUserConnected] = useState(
        {
            connected: false,
            email: ""
        }
    )

    return (
        <UserConnectedContext.Provider value={{userConnected, setUserConnected}}>
            {children}
        </UserConnectedContext.Provider>
    )

}

export default UserProvider
