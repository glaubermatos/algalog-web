import { IconSvg } from './styles'

interface IconProps {
    name: string;
    size?: number;
    color?: 'primary-light' | 'gray';
}

export function Icon(props: IconProps) {

    const { name: iconName, size, color } = props;

    return(
        renderIcon(iconName)
    );

    function renderIcon(iconName: string) {
        switch (iconName) {
            case 'home':
                return (<IconSvg width={size} height={size} color={color} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 13.2L18 2L34 13.2V30.8C34 31.6487 33.6254 32.4626 32.9586 33.0627C32.2918 33.6629 31.3874 34 30.4444 34H5.55556C4.61256 34 3.70819 33.6629 3.0414 33.0627C2.3746 32.4626 2 31.6487 2 30.8V13.2Z" stroke="#F0F2F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.6666 34V18H23.3333V34" stroke="#F0F2F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </IconSvg>)

            case 'entregas':
                return (<IconSvg width={size} height={size} color={color} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26 13.7907L10 5.51892" stroke="#F9FAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M34 24.3098V11.5595C33.9994 11.0005 33.8348 10.4515 33.5227 9.96754C33.2107 9.48359 32.7622 9.08171 32.2222 8.80222L19.7778 2.42705C19.2373 2.14729 18.6241 2 18 2C17.3759 2 16.7627 2.14729 16.2222 2.42705L3.77778 8.80222C3.2378 9.08171 2.7893 9.48359 2.47726 9.96754C2.16523 10.4515 2.00064 11.0005 2 11.5595V24.3098C2.00064 24.8688 2.16523 25.4178 2.47726 25.9017C2.7893 26.3857 3.2378 26.7876 3.77778 27.0671L16.2222 33.4422C16.7627 33.722 17.3759 33.8693 18 33.8693C18.6241 33.8693 19.2373 33.722 19.7778 33.4422L32.2222 27.0671C32.7622 26.7876 33.2107 26.3857 33.5227 25.9017C33.8348 25.4178 33.9994 24.8688 34 24.3098Z" stroke="#F9FAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.48004 9.90186L18 17.9505L33.52 9.90186" stroke="#F9FAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 34V17.9346" stroke="#F9FAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </IconSvg>)

            case 'clientes':
                return (<IconSvg width={size} height={size} color={color} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34 34V30.4445C34 28.5585 33.1571 26.7498 31.6569 25.4162C30.1566 24.0826 28.1217 23.3334 26 23.3334H10C7.87827 23.3334 5.84344 24.0826 4.34315 25.4162C2.84285 26.7498 2 28.5585 2 30.4445V34" stroke="#F9FAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 16.2222C22.4183 16.2222 26 13.0385 26 9.11111C26 5.18375 22.4183 2 18 2C13.5818 2 10 5.18375 10 9.11111C10 13.0385 13.5818 16.2222 18 16.2222Z" stroke="#F9FAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </IconSvg>)
        
            default:
                return <></>
        }
    }
}