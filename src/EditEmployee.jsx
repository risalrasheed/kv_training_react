import { useNavigate, useParams } from "react-router-dom";
import Image from "./components/Image";
import logo from "./kv logo.png";
import emp_logo from "./Group 18536.svg";
import { useGetAnEmployeeQuery } from "./services/employee_serv";
const ViewEmployee = () => {
    let passedEmpId = useParams().id;
    const navigate = useNavigate();
    const { data:data_an_employee, error:error_an_employee, isLoading:isLoading_an_employee } = useGetAnEmployeeQuery(passedEmpId);
    
    //console.log(passedEmpId);
    return (
        <>
            <section id="sec_emplist">
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <aside id="sidenav_emplist">
                    <div id="logo_div_emplist">
                        <Image src={logo} alt="KeyValue Logo" height="45" width="208" id="kvlogo_emplist"/>    
                    </div>
                    <div id="sidelink_div_emplist">
                        <div id="employeelist_blue_div">
                        <link href='https://fonts.googleapis.com/css?family=Nunito Sans' rel='stylesheet'/>
                            <p id="employeelist_text_emplist">Employee List</p>
                            <div id="employeelist_white_div">
                                <Image src={emp_logo} alt="Employee Logo" height="13" width="16" id="emplogo_emplist"/>
                            </div>

                        </div>
                    </div>
                    
                </aside>
                <div id="main_emplist">
                    <div id="main_blank_div"></div>
                    <div id="single_emp_main_container">
                    <div id="employee_details_heading_div">
                        <h1 id="employee_details_heading">Employee Details</h1>
                    </div>
                    <div id="button_edit_employee_div">
                        <button id="button_edit_employee"
                         onClick={()=>navigate(`/employee/edit/${data_an_employee.data.id}`)}
                        ><i className="fa fa-pencil"/></button>
                        <p id="button_edit_employee_text">Edit</p>
                    </div>
                    <div id="single_emp_container_div">
                        <div className="sing_emp_info_wrap">
                            <p>Employee Name</p>
                            <input id="anEmployeeName" type="text" value={data_an_employee.data.name} disabled></input>
                            
                        </div>
                        <div className="sing_emp_info_wrap">
                            <p>Department ID</p>
                            <input id="anEmployeeId" type="text" value={data_an_employee.data.departmentId} disabled></input>
                           
                        </div>
                        <div className="sing_emp_info_wrap">
                            <p>Joining Date</p>
                            <input id="anEmployeeJoiningDate" type="text" value={data_an_employee.data.joining_date} disabled></input>
                            
                        </div>
                        <div className="sing_emp_info_wrap">
                            <p>Role</p>
                            <input id="anEmployeeRole" type="text" value={data_an_employee.data.role} disabled></input>
                            
                        </div>
                        <div className="sing_emp_info_wrap">
                            <p>Status</p>
                            <input id="anEmplyeeStatus" type="text" value={data_an_employee.data.status} disabled></input>
                            
                        </div>
                        <div className="sing_emp_info_wrap">
                            <p>Experience</p>
                            <input id="anEmployeeExperience" type="text" value={data_an_employee.data.experience} disabled></input>
                        </div>
                        <div className="sing_emp_info_wrap">
                            <p>Address</p>
                            <p>samp address</p>
                        </div>
                    </div>

                </div>
        {
            
            //document.getElementById("anEmployeeName").value=data_an_employee.data[0].name;
            

        }
                </div>
            </section>
    </>
    // <div>
    //     <section id="left_section_login">
            
    //     </section>
    //     <section id="login_page">
    //         <Image src="./kv logo.png" alt="KeyValue Logo" height="45" width="208" id="kvlogo_login"/>
    //         <div id="login_info_div">
    //             <InputField id="name_login" name="name" placeholder="Name" 
    //                         type="text" label="Name" onChange={()=>{}}/>
    //             <InputField id="password_login" name="password" placeholder="Password" 
    //                         type="password" label="Password" onChange={()=>{}}/>
    //             <Button  label = "Log In" id="login_button" handleClick = {()=>navigate('/create')}/>
    //         </div>
            
    //     </section>
    // </div>
    )
    

    

};
export default ViewEmployee;