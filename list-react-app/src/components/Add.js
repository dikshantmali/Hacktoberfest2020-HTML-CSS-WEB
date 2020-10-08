import React, { useState } from 'react'

export default function Add(props) {
    const [text, setText] = useState('')

    const onFormSubmit = event => {
        event.preventDefault()
        if (!text) return
        props.add(text, new Date().toLocaleString())
        setText('')
    }

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label htmlFor="add">Add reminder</label>
                    <input type="text" id="add" value={text} onChange={e => setText(e.target.value)} />
                </div>
            </form>
        </div>
    )
}