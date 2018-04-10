import React, {Component} from 'react';
import {MadeByBtn} from '../styles/--madeby';

let mbButtons = [
    {
        name: 'Made By',
        num: 1
    },
    {
        name: 'Vera Butler',
        num: 2
    },
    {
        name: 'Lucas B',
        num: 3
    },
    {
        name: 'Inna',
        num: 4
    },
];
class MadeBy extends Component {
    render() {
        return (
            <div className="c-menu">
                <ul className="c-list">
                    {mbButtons.map((page, index) => <MenuItem key={index} page={page} />)}
                </ul>
            </div>
        )
    };
};

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className={`c-list__item c-list__item--${this.props.page.num}`}>
                <a className="c-list__link" href="#">{this.props.page.name}</a>
            </li>
        )
    }
}
            
            


export default MadeBy;