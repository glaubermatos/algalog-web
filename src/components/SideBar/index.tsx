import { Link } from 'react-router-dom'

import { Icon } from '../Icon'
import { NavLink } from '../NavLink';
import { Menu, MenuItem } from "./styles";

export function SideBar() {
    return(
        <Menu>
            <nav>
                <ul>
                    <MenuItem>
                        <NavLink to="/" activeOnlyWhenExact={true}>
                            <Icon size={36} name="home" />
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to="/deliveries">
                            <Icon size={36} name="entregas" />
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to="/customers">
                            <Icon size={36} name="clientes" />
                        </NavLink>
                    </MenuItem>
                </ul>
            </nav>
        </Menu>
    );
}