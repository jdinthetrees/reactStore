import React from "react";
import AdminNav from "../../components/nav/AdminNav"

const AdminDashboard = () => {

  return (
    <div className="container-fluid">
      <div class="row">
        <div class="col-md-2">
          <AdminNav />
        </div>

        <div class="col">

          <h4>Admin Dashboard</h4>
       
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
