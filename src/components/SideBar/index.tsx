import { Icon } from '../Icon'
import { Menu, MenuItem } from "./styles";

export function SideBar() {
    return(
        <Menu>
            <nav>
                <ul>
                    <MenuItem active>
                        <a href="#">
                            <Icon size={36} name="home" />
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#">
                            <Icon size={36} name="entregas" />
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#">
                            <Icon size={36} name="clientes" />
                        </a>
                    </MenuItem>
                </ul>
            </nav>
        </Menu>
    );
}