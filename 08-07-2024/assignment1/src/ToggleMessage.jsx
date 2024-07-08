/* Create a functional component named "ToggleMessage" to conditionally display a message based on a state variable.
: Develop a functional component named "ToggleMessage.": Implement a state variable, "isToggled," using the useState hook and initialize it to false.: Display a message like "Message is visible" or "Message is hidden" based on the isToggled state.: Implement a button that toggles the isToggled state and consequently toggles the visibility of the message. */

import React from 'react'
import { useState } from 'react'



const ToggleMessage = () => {
    const [isToggled, setIsToggled] = useState(false)
  return (
      <>
        <h1 style={{color:isToggled ? "green" : "red"}}>{ isToggled ? "Message is visible" : "Message is hidden"}</h1>
        <button onClick={() => setIsToggled(!isToggled)}>Toggle Message</button>
      </>
  )
}

export default ToggleMessage