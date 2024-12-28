import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import './index.css'
import { App } from './app'
import { store } from "./app/store";


createRoot(document.getElementById('root')!).render(
    <Provider store={ store }>
        <StrictMode>
            <App />
        </StrictMode>
    </Provider>
)
