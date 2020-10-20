import React from 'react';
import { Menu, Icon, Dropdown } from 'semantic-ui-react';



export default class TopMenu extends React.Component {
    state = { activeItem: '' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <Menu borderless icon>
                <Menu.Item
                    name='facebook'
                    active={activeItem === 'facebook'}
                    onClick={this.handleItemClick}
                >
                    <Icon name='facebook f' />
                </Menu.Item>

                <Menu.Item
                    name='instagram'
                    active={activeItem === 'instagram'}
                    onClick={this.handleItemClick}
                >
                    <Icon name='instagram' />
                </Menu.Item>

                <Menu.Item
                    name='twitter'
                    active={activeItem === 'twitter'}
                    onClick={this.handleItemClick}
                >
                    <Icon name='twitter' />
                </Menu.Item>

                <Menu.Item
                    name='pinterest'
                    active={activeItem === 'pinterest'}
                    onClick={this.handleItemClick}
                >
                    <Icon name='pinterest' />
                </Menu.Item>

                <Menu.Item
                    position='right'
                    name='search'
                    active={activeItem === 'search'}
                    onClick={this.handleItemClick}
                >
                    <Icon name='search' />
                </Menu.Item>

                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                >
                    <Icon name='home' />
                </Menu.Item>

                <Menu.Item
                    name='user'
                    active={activeItem === 'user'}
                    onClick={this.handleItemClick}
                >
                    <Icon name='user' />
                </Menu.Item>

                <Menu.Item
                    name='cart'
                    active={activeItem === 'cart'}
                    onClick={this.handleItemClick}
                >
                    <Icon name='cart' />
                    <Dropdown text=' My Cart 0'>
                        <Dropdown.Menu>
                            <Dropdown.Item text='No items are in your cart' centered/>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Menu>

        )
    }
}