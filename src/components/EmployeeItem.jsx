import { useDeleteEmployeeMutation } from "../services/employee_serv";

const EmployeeItem = ({
    emp_name,
    emp_id,
    joining_date,
    role,
    status,
    experience,
    handleIdClick
}) => {
    
    const [deleteEmployee] = useDeleteEmployeeMutation();
    return(
        <div className="employee_item_div">
            <p className="emp_name_emplist">{emp_name}</p>
            <p className="emp_id_emplist" >{emp_id}</p>
            <p className="joiningdate_emplist">{joining_date}</p>
            <p className="role_emplist">{role}</p>
            <p className="status_emplist">{status}</p>
            <p className="experience_emplist">{experience}</p>
            <p className="delete_icon_emplist"><i className="fa fa-trash" onClick={() => {
                deleteEmployee(emp_id);
            }}/></p>
            <div className="edit_icon_emplist" onClick={event=>{ console.log(emp_id); handleIdClick(emp_id)}}><i className="fa fa-pencil" /></div>

        </div>
    );
};

export default EmployeeItem;