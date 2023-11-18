import { useReducer } from "react";
import Context from "./Context";
import reducer, { init } from "./reducer";
function Provider({ children }) {
    var [state, dispatch] = useReducer(reducer, init);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}
export default Provider;