const Button = (props) => {

    const { label, id, handleClick, type} = props;

    return (
        <button id={id} onClick={handleClick} type={type}>
            {label}
        </button>
    );
}

export default Button;
<style>
    
</style>