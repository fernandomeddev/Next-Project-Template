interface AuthInputProps {
    label: String
    value: any
    requiredField?: boolean
    notVisible?: boolean
    typeField?: string
    changeValue: (newValue: any) => void
}

export default function AuthInput(props: AuthInputProps) {
    
    return props.notVisible ? null : (
        <div className="flex flex-col mt-4">
            <label>{props.label}</label>
            {props.typeField === 'password' ? (
                <input
                type='password'
                value={props.value}
                onChange={ e => props.changeValue?.(e.target.value)}
                required={props.requiredField}
                className={`
                    px-4 py-3 rounded-lg bg-gray-200 mt-2
                    border focus:border-blue-500 focus:bg-white
                    focus:outline-node
                `}
            />
            ) : (
                <input
                type='email'
                value={props.value}
                onChange={ e => props.changeValue?.(e.target.value)}
                required={props.requiredField}
                className={`
                    px-4 py-3 rounded-lg bg-gray-200 mt-2
                    border focus:border-blue-500 focus:bg-white
                    focus:outline-node
                `}
            />
            )}
            
        </div>
    )
}