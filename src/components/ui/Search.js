// every input in the form is going to have 
// its own piece of state
import {useState} from 'react'


const Search = ({getQuery}) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
        <section className='search'>
            <form action=''>
                <input type='text' className='form-control'
                placeholder='Search characters'
                value={text}
                // every time we type something into this input,
                // it's gonna run onChange
                onChange={(e) => onChange(e.target.value)}
                autoFocus />
            </form>
        </section>
    )
}

export default Search
