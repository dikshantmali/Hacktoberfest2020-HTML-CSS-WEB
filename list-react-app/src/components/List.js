import React, { useState } from 'react'
import Add from './Add'
import Item from './Item'

export default function List() {

    const [reminders, setReminders] = useState([])
    const [query, setQuery] = useState('')

    const addReminder = (query, timestamp) => {
        setReminders(reminders => [...reminders, {title: query, timestamp: timestamp}])
    }

    // Do not mutate state array
    // Copy array & mutate then set state
    const removeReminder = index => {
        let temp = [...reminders]
        temp.splice(index, 1)
        setReminders(temp)
    }

    const showReminders = reminders.map((reminder, index) => {
        return (
            <Item key={index} number={index} timestamp={reminder.timestamp} title={reminder.title} remove={removeReminder} />
        )
    })

    return (
        <div className="ui container">
            <h1>Add a new reminder</h1>
            <Add add={addReminder} query={setQuery} />
            <div className="ui relaxed divided list">
                {showReminders}
            </div>
        </div>
    )
}
