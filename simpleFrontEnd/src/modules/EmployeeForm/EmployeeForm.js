import React, {useState} from "react";

const EmployeeForm= ({handleForm}) => {
    const [form, setForm] = useState({
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
    });



    return (
            <form role={"employee-form"} onSubmit={(event)=> {
                event.preventDefault()
                handleForm(form)
            }}>
                <input onChange={(event) => setForm({...form, reports:event.target.value})} type="text" defaultValue={""} role={"reports"} />
                <input onChange={(event) => setForm({...form, lastName:event.target.value})} type="text" defaultValue={""} role={"last-name"}/>
                <input onChange={(event) => setForm({...form, firstName:event.target.value})} type="text" defaultValue={""} role={"first-name"}/>
                <input onChange={(event) => setForm({...form, title:event.target.value})} type="text" defaultValue={""} role={"title"}/>
                <input onChange={(event) => setForm({...form, courtesyTitle:event.target.value})} type="text" defaultValue={""} role={"courtesy-title"}/>
                <input onChange={(event) => setForm({...form, birthdate:event.target.value})} type="text" defaultValue={""} role={"birthdate"} />
                <input onChange={(event) => setForm({...form, hireDate:event.target.value})} type="text" defaultValue={""} role={"hire-date"}/>
                <input onChange={(event) => setForm({...form, address:event.target.value})} type="text" defaultValue={""} role={"address"}/>
                <input onChange={(event) => setForm({...form, city:event.target.value})} type="text" defaultValue={""} role={"city"}/>
                <input onChange={(event) => setForm({...form, region:event.target.value})} type="text" defaultValue={""} role={"region"}/>
                <input onChange={(event) => setForm({...form, postalCode:event.target.value})} type="text" defaultValue={""} role={"postal-code"}/>
                <input onChange={(event) => setForm({...form, country:event.target.value})} type="text" defaultValue={""} role={"country"}/>
                <input onChange={(event) => setForm({...form, home:event.target.value})} type="text" defaultValue={""} role={"home-phone"}/>
                <input onChange={(event) => setForm({...form, extension:event.target.value})} type="text" defaultValue={""} role={"extension"}/>
                <input onChange={(event) => setForm({...form, photo:event.target.value})} type="text" defaultValue={""} role={"photo"}/>
                <input onChange={(event) => setForm({...form, notes:event.target.value})} type="text" defaultValue={""} role={"notes"}/>
                <button>Update</button>
            </form>
    )
};

export default EmployeeForm;