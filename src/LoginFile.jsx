import { useNavigate } from "react-router-dom";
import Button from "./components/Button";
import InputField from "./components/InputField";
import './components/LoginStyle.css';
import Image from "./components/Image";
const LoginFile = () => {
    const navigate = useNavigate();
    return (
    <div>
        <section id="left_section_login">
            
        </section>
        <section id="login_page">
            <Image src="./kv logo.png" alt="KeyValue Logo" height="45" width="208" id="kvlogo_login"/>
            <div id="login_info_div">
                <InputField id="name_login" name="name" placeholder="Name" 
                            type="text" label="Name" onChange={()=>{}}/>
                <InputField id="password_login" name="password" placeholder="Password" 
                            type="password" label="Password" onChange={()=>{}}/>
                <Button  label = "Log In" id="login_button" handleClick = {()=>navigate('/create')}/>
            </div>
            
        </section>
    </div>
    )
    

    

};

export default LoginFile;