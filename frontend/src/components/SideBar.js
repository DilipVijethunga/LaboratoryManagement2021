import React from "react";


export default function SideBar() {
    return (
        <div>
            {/* body */}
            
                <div >
                <a href="/admin/add"><button className="btn btn-primary p-2 m-2 w-50">Add New Report</button></a><br />
                <a href="/admin"><button className="btn btn-primary p-2 m-2 w-50">View Reports</button></a><br />
                </div>

        </div>
    );
}

