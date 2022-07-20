const InputField = ({
    id,
    name,
    placeholder,
    type,
    label,    
    onChange
}) => {
    return (
        <div className="input_wrap_div">
            <div>{label}</div>
            
            <input id={id} name={name} placeholder={placeholder}
                        type={type} label={label}
                         onChange={(event) => onChange(name, event.target.value)}
                        />

            {/* <input type={type} onChange={(event) => onChange(event.target.value)} /> */}
        </div>
    )
};

export default InputField;