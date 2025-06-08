import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// When creating frontend application using "React" we have to worry about 3 things
// 1. Components -> represents the html on website with the state
// 2. State -> represents the data that we want to show inside the components
// 3. re-rendering / DOM manipulation -> this React will perform based on the difference between the new-state and old-state

// When making websites using react we only care about the creating the "components", providing "state" to the components and if there is any state that might gets changed (dynamic over time) then Using special syntax of React (useState) (just like the calculateDifference in our code ) the previous state will be updated and it will be reflected over to the components (DOM manipulation)