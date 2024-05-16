// Role.jsx
import React, { useState } from "react";

const Role = () => {
    const [roleName, setRoleName] = useState('');
    const [roleDescription, setRoleDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const role = {
            name: roleName,
            description: roleDescription
        };
        localStorage.setItem('role', JSON.stringify(role));
        setRoleName('');
        setRoleDescription('');
    };

    return (
        <div>
            <h1>Add Role</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="name" className="form-label">Role Name:</label>
                    <input type="text" className="form-control" id="name" value={roleName} onChange={(e) => setRoleName(e.target.value)} aria-describedby="name" />
                </div>
                <div className="mb-3">
                    <label for="description" className="form-label">Role Description:</label>
                    <input type="text" className="form-control" id="description" value={roleDescription} onChange={(e) => setRoleDescription(e.target.value)} aria-describedby="description" />
                </div>
                <button type="submit" className="btn btn-primary">Add Role</button>
            </form>
        </div>
    );
};

export default Role;

