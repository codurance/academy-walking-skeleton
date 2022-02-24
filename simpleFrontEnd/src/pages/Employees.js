const Employees = () => {
    const [formView, setFormView] = useState(false);

    function showForm(event){
        event.preventDefault();
        setFormView(true)
    }

    return (<>
        <h1>Employee</h1>
        <button onClick={showForm}>New</button>
            {formView &&
                <form data-testid="new-employee-form"></form>
            }
    </>
)
};

import React, {useState} from "react";

export default Employees;