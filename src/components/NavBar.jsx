import React from 'react'
import CartWidget from './HijoNavBar/CartWidget'
import logoPage from '.././assets/img/upc.png'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'

const NavBar = () => {
    return (
        <>
            <div className='navBar'>
                <div className='imgTitle'>
                    <img 
                        src={ logoPage } 
                        alt="Logotipo Pagina" 
                        className='imgLogo'
                        />
                    <h2>Shop SL</h2>
                </div>
                <Menu>
                    <MenuButton>
                        Categories
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Category A</MenuItem>
                        <MenuItem>Category B</MenuItem>
                        <MenuItem>Category C</MenuItem>
                    </MenuList>
                </Menu>
                <CartWidget />
            </div>
        </>
    )
}

export default NavBar