import Image from "./components/Image";
import "./components/EmployeeListStyle.css";
import EmployeeItem from "./components/EmployeeItem";
import Button from "./components/Button";
import { useState } from "react";
import InputField from "./components/InputField";
import InputSelect from "./components/InputSelect";
import "./components/CreateEmployeeStyle.css"
import { createEmployee, useDeleteEmployeeMutation, useGetAllEmployeeQuery, useGetAnEmployeeQuery } from "./services/employee_serv";
import { useCreateEmployeeMutation } from "./services/employee_serv";

const EmployeeList = () => {
    const [empState, setEmpState] = useState();
    const[tempState, setTempState] = useState(1);
    const [create, setCreate] = useState("list") //singleuser
    
    const [formvalues, setValues] = useState({
        employee_name: "",
        dept_id: "",
        employee_email: "",
        joining_date: "",
        experience: "",
        address: "",
        role: "",
        status: ""
      });

    const { data, error, isLoading } = useGetAllEmployeeQuery();
    const getListHTML = () => {
        const handleClick = () => {
            setCreate("create");
        }
        
        return (
                    
            <div id="employee_list_containerdiv">
                <div className="main_heading_emplist">
                    <h1 id="text_employeelist_emplist">Employee List</h1>
                    <div id="create_employee_button_div">
                        <Button  label = "+" id="create_employee_button" handleClick = {()=>{handleClick()}}/>
                    
                        <p id="create_employee_text_emplist">Create Employee</p>
                    </div>
                    
                </div>
                <div id="emplist_heading_emplist">
                    <p className="emp_name_emplist">Employee Name</p>
                    <p className="emp_id_emplist">Employee ID</p>
                    <p className="joiningdate_emplist">Joining Date</p>
                    <p className="role_emplist">Role</p>
                    <p className="status_emplist">Status</p>
                    <p className="experience_emplist">Experience</p>
                    <p className="action_heading_emplist">Action</p>
                </div>
                
                <div id="listing_div_emplist">
                    {employee_entry.map(items => 
                    <EmployeeItem emp_name={items.name} 
                                    emp_id={items.id} 
                                    joining_date={items.joining_date}
                                    role={items.role} 
                                    status={items.status} 
                                    experience={items.experience} 
                                    handleIdClick = {handleIdClick}/>)
                        }
                </div>
            </div>
            
            
        
        )
    } 

    const { data:data_an_employee, error:error_an_employee, isLoading:isLoading_an_employee } = useGetAnEmployeeQuery(empState);
    console.log(data_an_employee);
    //const data_an_employee = useGetAnEmployeeQuery(empIdState);
    const handleIdClick=(emp_id)=>{
        
        
        setEmpState(emp_id, () => {console.log("empState ",empState)});
        setTempState(2);
        console.log("checking here",empState);
        console.log(tempState)
        
        // const an_emp_data = data_an_employee.data;
        // document.getElementById("anEmployeeName").innerHTML = an_emp_data.name;
        // document.getElementById("anEmployeeId").innerHTML = an_emp_data.id;
        // document.getElementById("anEmployeeJoiningDate").innerHTML = an_emp_data.joining_date;
        // document.getElementById("anEmployeeRole").innerHTML = an_emp_data.role;
        // document.getElementById("anEmployeeStatus").innerHTML = an_emp_data.status;
        // document.getElementById("anEmployeeExperience").innerHTML = an_emp_data.experience;
        
        
    
    }
    const getCreateHTML = () => {
        return (
            <>
                <div id="create_employee_containerdiv">
                    <div className="main_heading_emplist">
                        <h1>Create Employee</h1>
                    </div>
                    <div id="create_employee_input_div">
                        <form id="form1">
                            <div id="formdetails">
                                {inputfields.map(items => <InputField id={items.id} name={items.name} placeholder={items.placeholder}
                                type={items.type} label={items.label} onChange={(name, value) => set(name,value)}/>)
                                }

                                <div className="formpadding">
                
                                    <InputSelect id = "role" name="role" label="Role" onChange={(name, value) => set(name,value)}options={[
                                    {key: 'Role', value: '', label: 'Role'},
                                    {key: 'Dev', value: 'Dev', label: 'Dev'},
                                    {key: 'HR', value: 'HR', label: 'HR'},
                                    {key: 'QA', value: 'QA', label: 'QA'},
                                    ]}/>
                                </div>


                                <div className="formpadding">
                                <InputSelect id="status" name="status" label="Status" onChange={(name, value) => set(name,value)} options={[
                                    {key: 'Status', value: '', label: 'Status'},
                                    {key: 'Active', value: 'Active', label: 'Active'},
                                    {key: 'Inactive', value: 'Inactive', label: 'Inactive'},
                                    {key: 'Intern', value: 'Intern', label: 'Intern'},
                                    ]}/>
                                </div>
                                
                                <div className="formpadding">
                                    
                                    {/* <div id="choosefilediv">
                                        <div>Choose File</div>
                                        <div id="upload_buttondiv">
                                            <button id="upload_button" type="button">Browse</button>
                                        </div>
                                        
                                    </div> */}
                                </div>

                                
                

                            </div>

                            <div id="formbuttons">
                                <Button  label = "Submit" type = "button" handleClick = {()=>{submitHandleClick()}}/>
                                <Button  label = "Cancel" type = "reset" handleClick = {()=>{}}/>
                                
                            </div>
                            
            
            
            
                        </form>
                    </div>
                </div>
                
            </>  
        )
    }
    const [createEmployee] = useCreateEmployeeMutation();
    
    
    //Delete
    

    //Delete-end

    
      const set = (name, value) => {
        
        // return ({ target: { value } }) => {
        //   setValues((oldValues) => ({ ...oldValues, [name]: value }));
        // };
        setValues((oldValues) => ({ ...oldValues, [name]: value }));
        
      };

      

      const submitHandleClick = async() => {
        //changing here
        
        const new_employee_data = {
            "name":formvalues.employee_name,
            "departmentId":formvalues.dept_id,
            "password":"password",
            "joining_date":formvalues.joining_date,
            "status":formvalues.status,
            "role":formvalues.role,
            "experience":formvalues.experience,
            "address": {
                "address_line1":"line1",
                "address_line2":"line2",
                "city":"city",
                "state":"state"
            }
        }
        


        await createEmployee(new_employee_data);
    }

    
    

    if(error) {
        return (
            <div>Error</div>
        )
    } else {
        if(isLoading) {
            return (
                <div>Loading....</div>
            )
        }else {
            
            var employee_entry=data.data;
            console.log(employee_entry, "checking");
            
        }

    }
    
    var inputfields = [
        {type: 'text', id: 'employee_name', name: 'employee_name', 
        label: 'Employee Name', placeholder: 'Employee Name'},

        {type: 'text', id: 'dept_id', name: 'dept_id', value: formvalues.id,
        label: 'Department ID', placeholder: 'Department ID'},

        {type: 'text', id: 'employee_email', name: 'employee_email', value: formvalues.email, 
        label: 'Employee Email', placeholder: 'Employee Email'},

        {type: 'text', id: 'joining_date', name: 'joining_date', value: formvalues.jdate,
        label: 'Joining Date', placeholder: 'Joniing Date'},

        {type: 'text', id: 'experience', name: 'experience', value: formvalues.experience,
        label: 'Experience', placeholder: 'Experience'},

        {type: 'text', id: 'address', name: 'address', value: formvalues.address,
        label: 'Address', placeholder: 'Address'},

        {type: 'file', id: 'upload_id_proof', name: 'upload_id_proof', 
        label: 'Upload ID Proof', placeholder: ''},
    ]
    
    
    return (
        <>
            <section id="sec_emplist">
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <aside id="sidenav_emplist">
                    <div id="logo_div_emplist">
                        <Image src="./kv logo.png" alt="KeyValue Logo" height="45" width="208" id="kvlogo_emplist"/>    
                    </div>
                    <div id="sidelink_div_emplist">
                        <div id="employeelist_blue_div">
                        <link href='https://fonts.googleapis.com/css?family=Nunito Sans' rel='stylesheet'/>
                            <p id="employeelist_text_emplist">Employee List</p>
                            <div id="employeelist_white_div">
                                <Image src="./Group 18536.svg" alt="Employee Logo" height="13" width="16" id="emplogo_emplist"/>
                            </div>

                        </div>
                    </div>
                    
                </aside>
                <div id="main_emplist">
                    <div id="main_blank_div"></div>
        {
            
            (create==="list")?getListHTML()
            : (create=="create")?getCreateHTML()
            : (
                <div id="single_emp_main_container">
                    <div id="employee_details_heading_div">
                        <h1 id="employee_details_heading">Employee Details</h1>
                    </div>
                    <div id="single_emp_container_div">
                        <div className="sing_emp_info_wrap">
                            <p>Employee Name</p>
                            <p id="anEmployeeName">Sample Name</p>
                        </div>
                        <div className="sing_emp_info_wrap">
                            <p>Employee ID</p>
                            <p id="anEmployeeId">Sample ID</p>
                        </div>
                        <div className="sing_emp_info_wrap">
                            <p>Joining Date</p>
                            <p id="anEmployeeJoiningDate">0000-00-00</p>
                        </div>
                        <div className="sing_emp_info_wrap">
                            <p>Role</p>
                            <p id="anEmployeeRole">samp</p>
                        </div>
                        <div className="sing_emp_info_wrap">
                            <p>Status</p>
                            <p id="anEmplyeeStatus">Sample</p>
                        </div>
                        <div className="sing_emp_info_wrap">
                            <p>Experience</p>
                            <p id="anEmployeeExperience">99 exp</p>
                        </div>
                        <div className="sing_emp_info_wrap">
                            <p>Address</p>
                            <p>samp address</p>
                        </div>
                    </div>

                </div>
                                
            )
            

        }
                </div>
            </section>
    </>
        
    );

    
    
};
export const AddEmployee = () => {
    
    
}

export default EmployeeList;