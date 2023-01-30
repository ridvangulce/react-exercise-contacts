import "./style.css"
import { useState, useEffect } from 'react'
import List from './List'
import Form from './Form'
import { Link } from "react-router-dom";


function Contacts() {

    const [contacts, setContacts] = useState([
        {
            fullName: "John",
            phoneNumber: 111,
        },
        {
            fullName: "Danny",
            phoneNumber: 222,
        },
        {
            fullName: "Lucy",
            phoneNumber: 333,
        }
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts])
    return (
        <div >
            <div id="container">

                <h1>Contacts</h1>
                <List contacts={contacts} />
                <Form addContact={setContacts} contacts={contacts} />
            </div>
            <Link to="/">Home</Link>
        </div>
    )
}

export default Contacts