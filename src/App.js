import React from 'react';
import Select from './components/Select'
import './App.sass';
import Input from "./components/Input";


function App() {
    let select1 = [
        {key: "o1", value: "Option 1"},
        {key: "o2", value: "Option 2"},
        {key: "o3", value: "Option 3"}
    ];

    let select2 = [
        {key: "o1", value: "Option 1", img: 'https://i.picsum.photos/id/1011/5472/3648.jpg'},
        {key: "o2", value: "Option 2", img: 'https://i.picsum.photos/id/1025/4951/3301.jpg'},
        {key: "o3", value: "Option 3", img: 'https://i.picsum.photos/id/1027/2848/4272.jpg'},
        {key: "o4", value: "Option 4", img: 'https://i.picsum.photos/id/103/2592/1936.jpg'},
        {key: "o5", value: "Option 5", img: 'https://i.picsum.photos/id/1035/5854/3903.jpg'}
    ];


    return (
        <div className="App">
            <section className="dropdown-menu">
                <div className="container">
                    <div className="row">
                        <div className="dropdown-wrapper">
                            <Select data={select1} search={true}/>
                            <Select data={select2} search={false}/>
                        </div>
                        <div className='inputs-wrapper'>
                            <Input/>
                            <Input/>
                            <Input/>
                        </div>
                        <div className="buttons-wrapper">
                            <button className='button button-reset'>Reset</button>
                            <button className='button button-submit'>Filter</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
