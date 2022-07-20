const InputSelect = ({

    label, options, id, name, onChange
}) => {
    return (
        <div className="input_wrap_div">
            <div>
                {label}
            </div>
            <select id={id} name={name} onChange={(event) => onChange(name, event.target.value)}>
                {options.map((item) => (<option key={item.key} value={item.value}>{item.label}</option>))}
            </select>
        </div>
       
    );
}

export default InputSelect;