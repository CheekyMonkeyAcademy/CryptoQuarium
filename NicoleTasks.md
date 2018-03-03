**REACT** 

**Handle Multiple Inputs**
--Add a name attribute to each element
--Let the handler fxn choose what to do base on the value of event.target.name
    https://reactjs.org/docs/forms.html

**Uncontrolled Componenets** 

--File Input Tag- always an uncontrolled  component because it's value can only be set by a user, not programmatically
    <input type="file" />
    https://reactjs.org/docs/uncontrolled-components.html#the-file-input-tag

    Should use the File API to interact with the files
    Create a ref to the DOM node to access files in a submit handler

**Controlled Components** 

--Make React state the "single source of truth"
    React component that renders a form also controls what happens in that form on subsequent user input
    Controlled component- an input form element whose value is controlled by React 


Heroku:
    add startDev
    heroku-postbuild
    dev 
    heroku is going to run "npm start"

In production Heroku, it doesn't use the proxy