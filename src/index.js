import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { UserPage } from './user-page';

export const AppContext = createContext({ username: 'myles', age: 26 });

const App = () => 
    <AppContext.Provider value={{ username: 'mayo', age: 19 }}>
        <UserPage />
    </AppContext.Provider>

ReactDOM.render(<App />, document.getElementById("root"));