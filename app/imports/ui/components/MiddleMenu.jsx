import React from 'react';

import { Menu, Dropdown } from 'semantic-ui-react';


export default class MiddleMenu extends React.Component {
    state = { activeItem: '' };
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    render() {
        const { activeItem } = this.state;
        return (
            <Menu
                borderless
                fluid widths={5}
                style={{ backgroundColor: '#ffffff'}}>
                <Menu.Item
                    name='men'
                    active={activeItem === 'men'}
                    onClick={this.handleItemClick}
                >
                    <Dropdown text='MEN'>
                        <Dropdown.Menu>
                            <Dropdown.Item text='TANK TOPS' centered/>
                            <Dropdown.Item text='SHIRTS' centered/>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>

                <Menu.Item
                    name='women'
                    active={activeItem === 'women'}
                    onClick={this.handleItemClick}
                >
                    <Dropdown text='WOMEN'>
                        <Dropdown.Menu>
                            <Dropdown.Item text='TANK TOPS' centered/>
                            <Dropdown.Item text='SHIRTS' centered/>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>

                <Menu.Item
                    name='kids'
                    active={activeItem === 'kids'}
                    onClick={this.handleItemClick}
                >
                    <Dropdown text='KIDS'>
                        <Dropdown.Menu>
                            <Dropdown.Item text='ONESIES' centered/>
                            <Dropdown.Item text='SHIRTS' centered/>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>

                <Menu.Item
                    name='brand'
                    active={activeItem === 'brand'}
                    onClick={this.handleItemClick}
                >
                    <Dropdown text='BRAND'>
                        <Dropdown.Menu>
                            <Dropdown.Item text='ALOHA SHIRT SOCIETY' centered/>
                            <Dropdown.Item text='AMUSE SOCIETY' centered/>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>

                <Menu.Item
                    name='cart'
                    active={activeItem === 'cart'}
                    onClick={this.handleItemClick}
                    text = 'SEARCH'
                >
                </Menu.Item>
            </Menu>
        )
    }
}
