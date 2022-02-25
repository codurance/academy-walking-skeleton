import React, {useState} from "react";

const EmployeeForm= ({handleForm, employee}) => {
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
        homePhone: "",
        extension:"",
        photo:"",
        notes:""
    }
    const [form, setForm] = useState(employee ? employee : {...initialState, employee});

    return (
            <form data-testid={employee ? `employee-form-${employee.firstName}` : "new-employee-form"}
                  role={"employee-form"} onSubmit={(event)=> {
                event.preventDefault()
                handleForm(form)
            }}>
                {Object.keys(form).map((field)=>{
                    return <input key={field} onChange={(event) => setForm({...form,
                        [field]:event.target.value})} type="text" placeholder={field.toUpperCase()} role={field} value={form[field]} />
                })}

                <button>Update</button>
            </form>
    )
};

export default EmployeeForm;