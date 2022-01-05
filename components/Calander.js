import React from 'react'
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
    },
];

function Calendarx() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <div className="App w-11/12 mx-auto mt-4 border-1 px-4 py-2 shadow">
            
            <div className=''>

            <h1 className='mb-3 text-center text-violet-800'>Calendar</h1>
            <hr />
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />

            <h2>Add New Event</h2>
            <div className="col-span-6 sm:col-span-3 mb-4">
                <input className="border-1 border-violet-600 mt-1 block w-1/3 shadow-sm sm:text-ms py-1 pl-5 rounded-md" type="text" placeholder="Add Title" style={{ marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker className="z-50 border-1 border-violet-600 mt-1 block w-1/3 shadow-sm sm:text-ms py-1 pl-5 rounded-md" placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker className="border-1 border-violet-600 mt-1 block w-1/3 shadow-sm sm:text-ms py-1 pl-5 rounded-md" placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button stlye={{ marginTop: "10px" }} className='bg-yellow-400 w-1/12 rounded-md mt-1 border-1 border-black ml-[250px]' onClick={handleAddEvent}>
                    Add Event
                </button>
            </div>
        
            </div>
        </div>
    );
}

export default Calendarx