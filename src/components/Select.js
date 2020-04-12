import React, {Component} from 'react'
import './Select.sass'
import Search from "./Search";


class Select extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            opened: false,
            data: this.props.data,
        };
    }


    onOpen = (e) => {
        this.setState({
            opened: !this.state.opened
        });
    };

    onSelect = (option) => {
        this.setState({
                selected: option,
                opened: false
            }
        );
    };
    search = (data) => {
        let resultArray = [];
        if (this.state.inputState !== '') {
            resultArray = this.props.data.filter(
                (item) => {
                    return (item.value).toLowerCase().indexOf(data.toLowerCase()) > -1
                }
            )

        }
        this.setState({
            data: [...resultArray]
        })

    };

    render() {

        let {data} = this.state;
        let {search} = this.props
        let items = data.map(
            (option) => (
                <li className='options__item' onClick={() => this.onSelect(option)} key={option.key}>{option.img &&
                <img className='avatar' src={option.img} alt="option.img"/>}{option.value}</li>
            )
        );

        let selected = this.state.selected ?
            <span className='selected'>
                {this.state.selected.img && <img className='avatar' src={this.state.selected.img} alt="option.img"/>}
                {this.state.selected.value}
            </span> : 'Select';
        let cssClass = this.state.opened ? 'show' : 'hide';

        return (
            <div className={`select ${cssClass}`} onClick={this.onOpen}>
                <span className='select__header'>
                  {selected}
                </span>
                {this.state.opened ? <div className="options">
                    {search ? <Search search={this.search}/> : null}
                    <ul className="options__list">{items}</ul>
                </div> : null}

            </div>
        )
    }
}

export default Select