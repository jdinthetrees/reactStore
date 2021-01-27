import React from 'react'
import AdminNav from '../../components/nav/AdminNav';

const AdminDashboard = () => {
    return (
        <div className="container-fluid">
        <div class="row">
            <div class="col-md-2">
                <AdminNav />
            </div>
            <div class="col">admin dashboard page</div>
        </div>
    </div>
)
    
}

export default AdminDashboard;