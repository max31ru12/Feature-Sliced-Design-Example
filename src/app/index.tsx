import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./routing";

import { store } from "./store";

export const App = () => {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
        )
}
