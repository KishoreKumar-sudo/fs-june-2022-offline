import React from "react";
import { Provider } from 'react-redux'
import { store } from './Redux/store'
import Message from "./Message/Message";
const App = () => {
return (
    <Provider store={store}>
    <div>
        <Message />
    </div>
    </Provider>
)
}
export default App