import React, { useState } from 'react'
import './CounterApp.css'

const CounterApp = () => {
    const [count, setCount] = useState(0)

    return (
        <div className="app-container">
            <div className="counter_container">
                <h1>Counter App</h1>

                <div className="count_display">
                    {count}
                </div>

                <div className="button-group">
                    <button
                        onClick={() => setCount(count - 1)}
                        className="btn decrement"
                    >
                        Decrement
                    </button>

                    <button
                        onClick={() => setCount(0)}
                        className="btn reset"
                    >
                        Reset
                    </button>

                    <button
                        onClick={() => setCount(count + 1)}
                        className="btn increment"
                    >
                        Increment
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CounterApp