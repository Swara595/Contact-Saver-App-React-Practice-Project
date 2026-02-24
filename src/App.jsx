import React, { useState } from 'react'

const App = () => {
  function submitHandler(e) {
    e.preventDefault();
    const newContact = [...contacts]
    newContact.push({ name: name, num: num, email: email })
    setContacts(newContact)
    setName('')
    setNum('')
    setEmail('')
  }
  const [name, setName] = useState('')
  const [num, setNum] = useState('')
  const [email, setEmail] = useState('')
  const [contacts, setContacts] = useState([])
  return (
    <div>
      <form className='p-2 flex items-center justify-center gap-2' onSubmit={(e) => {
        submitHandler(e);
      }}>
        <input className='rounded m-2 border-0.2 p-1' type="text" placeholder='Name' value={name} required onChange={(e) => setName(e.target.value)} />
        <input className='rounded m-2 border-0.2 p-1' type="text" placeholder='Phone Number' value={num} required onChange={(e) => setNum(e.target.value)} />
        <input className='rounded m-2 border-0.2 p-1' type="text" placeholder='Email Address' value={email} required onChange={(e) => setEmail(e.target.value)} />
        <button className='p-2 rounded bg-green-600 text-white'>Save Contact</button>
      </form>

      <div className='p-4 flex flex-wrap gap-4'>
        {contacts.map(function (contact, index) {
          return (
            <div key={index} className='p-3 m-2 border w-fit rounded-xl flex flex-col gap-2'>
              <p>Name: {contact.name}</p>
              <p>Phone: {contact.num}</p>
              <p>Email: {contact.email}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
