import { useState, useEffect } from 'react'

function Form({ addContact, contacts }) {

  const initialFormValues = { fullName: "", phoneNumber: "" }
  const [form, setForm] = useState(initialFormValues);


  useEffect(() => {
    setForm(initialFormValues)
  }, [contacts])

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })

  }

  const onSubmit = (e) => {

    e.preventDefault();
    if (form.fullName === "" || form.phoneNumber === "") {

      return false;

    }
    addContact([...contacts, form])
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            name="fullName"
            placeholder='Full Name'
            onChange={onChangeInput}
            value={form.fullName}
          />
        </div>
        <div>
          <input
            name="phoneNumber"
            placeholder='Phone Number'
            onChange={onChangeInput}
            value={form.phoneNumber}
          />
        </div>
        <div className='btn'>
          <button onClick={onSubmit}>ADD</button>
        </div>
      </form>
    </div>
  )
}

export default Form