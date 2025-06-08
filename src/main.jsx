import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App></App>
)


// When creating frontend application using "React" we have to worry about 3 things
// 1. Components -> represents the html on website with the state ( these are provided through functions )
// 2. State -> represents the data that we want to show inside the components
// 3. re-rendering / DOM manipulation -> this React will perform based on the difference between the new-state and old-state

// When making websites using react we only care about the creating the "components", providing "state" to the components and if there is any state that might gets changed (dynamic over time) then Using special syntax of React (useState) (just like the calculateDOMDifference in our code ) the previous state will be updated and it will be reflected over to the components (DOM manipulation)


// State ( current data that is reflected in the components / html )
// We provide the updated state to the React than based on the difference between the two state React lets know the ReactDOM (updation logic it inherits ) to do the DOM manipulation or not

// when the state is updated, React based on the difference between states intiates the re-render

// In react we only care about creating the components, providing state / data to the components and React provide us the logic to provide the updated state for the component, if there any difference will perform (ReactDOM) DOM manipulation

