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
                <img 
                    src={ logoPage } 
                    alt="Logotipo Pagina" 
                    className='imgLogo'
                />
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