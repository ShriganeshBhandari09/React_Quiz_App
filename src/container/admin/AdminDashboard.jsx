import "./admin.css";
import { useState } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import SideBar from "../../components/SideBar";

const AdminDashboard = () => {
  const [sidebar, setSideBar] = useState(true);
  return (
    <div>
      <AdminNavbar sidebar={sidebar} setSideBar={setSideBar}/>
      <main className="main-container">
        {sidebar && (
          <SideBar/>
        )}
        <section className="main-section">
          <h1>Welcome to Admin Page</h1>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
