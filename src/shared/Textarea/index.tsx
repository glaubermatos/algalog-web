import { FormGroup } from "../../styles/global";

interface InputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
}

export function Textarea({label, ...rest}: InputProps) {

    function formatLabel(): string | undefined{
        let labelFormated = label?.toLowerCase().replace(' ', '')
        return labelFormated || undefined;
    }

    return(
        <FormGroup>
            <label htmlFor={formatLabel()}>{label}</label>
            <textarea
                id={formatLabel()}
                {...rest}
            />
        </FormGroup>
    );
}