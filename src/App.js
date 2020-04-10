import React from 'react';
import DropDownWithSearch from './components/DropDownWithSearch'
import './App.css';

function App() {
    return (
        <div className="App">
            <section className="dropdown-menu">
                <div className="container">
                    <div className="row">
                        <div className="dropdown-menu-wrapper">
                            <DropDownWithSearch/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
