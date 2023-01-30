import { useState } from 'react'

function List({ contacts }) {

    const [filterText, setFilterText] = useState('');


    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key]
                .toString()
                .toLocaleLowerCase()
                .includes(filterText.toLocaleLowerCase())
        );
    })

    console.log(filtered);

    return (
        <div>
            <input
                placeholder='Filter Contact'
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
            />

            <ul className='list'>
                {filtered.map((contact, id) =>
                    <li key={id}>
                        <span>{contact.fullName}</span>
                        <span>{contact.phoneNumber}</span>
                    </li>
                )}
            </ul>

            <p>Total Contacts ({filtered.length})</p>
        </div>
    )
}

export default List