import React, {useState} from "react";

const EmployeeForm= ({handleForm}) => {
    const initialState = {
        reports: "",
        lastName: "",
        firstName: "",
        title: "",
        courtesyTitle: "",
        birthdate: "",
        hireDate:"",
        address: "",
        city: "",
        region: "",
        postalCode: "",
        country: "",
        home: "",
        extension:"",
        photo:"",
        notes:""
    }
    const [form, setForm] = useState(initialState);

    return (
            <form data-testid="new-employee-form" role={"employee-form"} onSubmit={(event)=> {
                event.preventDefault()
                handleForm(form)
            }}>
                {Object.keys(form).map((field)=>{
                    return <input key={field} onChange={(event) => setForm({...form,
                        [field]:event.target.value})} type="text" placeholder={field.toUpperCase()} role={field} />
                })}

                <button>Update</button>
            </form>
    )
};

export default EmployeeForm;