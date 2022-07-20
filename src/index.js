import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginFile from './LoginFile';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import EmployeeList from './EmployeeList';
import ViewEmployee from './ViewEmployee';
import {store} from './store'
import { Provider } from 'react-redux';
import { Counter } from './features/counter/Counter';
import Employee from './GetAllEmployeeDetails';
import EditEmployee from './EditEmployee'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      {/* <CreateEmployee />  */}
      {/* <LoginFile /> */}
      <Provider store={store}>
        <Routes>
          <Route path="/login" element={<LoginFile />} />
          {/* <Route path="/create" element ={<CreateEmployee />}/> */}
          <Route path='/employeelist' element={<EmployeeList />}/>
          <Route path="/counter" element={<Counter />}/>
          <Route path="/employee" element={<Employee />}/>
          <Route path="/employee/view/:id" element={<ViewEmployee />}/>
          <Route path="/employee/edit/:id" element={<EditEmployee />}/>
        </Routes>
      </Provider>
      
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
