import React, { useContext, useState, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localstorage'
import { AuthContext } from './context/Authprovider'

const App = () => {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  })

  useEffect(() => {
    if (!localStorage.getItem('employees') || !localStorage.getItem('admin')) {
      console.log("Setting up localStorage...");
      setLocalStorage();
      window.location.reload();
    }
  }, []);

  if (!authData || !authData.userdata) {
    return <p>Loading Data...</p>
  }

  const { employees, admin } = authData.userdata;

  const handleLogin = (email, password) => {
    const adminUser = admin?.find((e) => email === e.email && password === e.password);
    const employeeUser = employees?.find((e) => email === e.email && password === e.password);

    if (adminUser) {
      setUser("admin");
      setLoggedInUserData(adminUser);
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', user: adminUser }));
    } else if (employeeUser) {
      setUser("employee");
      setLoggedInUserData(employeeUser);
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', user: employeeUser }));
    } else {
      alert("Invalid Credentials");
    }
  }

  return (
    <>
      {!user ? <Login onLogin={handleLogin} /> : ''}
      {user === 'employee' && <EmployeeDashboard data={loggedInUserData} />}
      {user === 'admin' && <AdminDashboard data={loggedInUserData} />}
    </>
  )
}

export default App;
