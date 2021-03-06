import React from "react";
import { useState } from "react";
import EditUser from "./EditUser";
import { nanoid } from "nanoid";
import AddUser from "./AddUser";
import { usersData } from "./usersData";

function Table() {
  const initialFormState = {
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
  };
  const [users, setUsers] = useState(usersData);
  const [user, setUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [showAddForm, setShowAddForm] = useState(false);

  const headers = [
    "First Name",
    "Last Name",
    "Email",
    "Telephone",
    "Employee Code",
    "Actions",
  ];

  const generateHeaders = headers.map((header) => (
    <th key={header}>{header}</th>
  ));
  const generateUserData = users.map((user) => (
    <tr key={user.id}>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>{user.telephone}</td>
      <td>{user.id}</td>
      <td>
        <a href="/#" onClick={() => editRow(user)}>
          Edit
        </a>
        <br />
        <a href="/#" onClick={() => deleteUser(user.id)}>
          Delete
        </a>
      </td>
    </tr>
  ));

  const addUser = (user) => {
    user.id = nanoid();
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    setEditing(false);
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      telephone: user.telephone,
    });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container-fluid">
      <div className="header-container">
        <h1>Employee Table</h1>
      </div>
      {editing ? (
        <div>
          <p>Edit user:</p>
          <EditUser
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}
          />
        </div>
      ) : (
        <div>
          <div className="add-button-container">
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              type="button"
              className="btn btn-light"
            >
              Add new user
            </button>
          </div>
          {showAddForm ? (
            <AddUser
              addUser={addUser}
              setUser={setUser}
              user={user}
              initialFormState={initialFormState}
            />
          ) : null}
        </div>
      )}
      <div className="table-responsive table-container">
        <table className="table table-hover table-dark ">
          <thead>
            <tr>{generateHeaders}</tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              generateUserData
            ) : (
              <tr>
                <td colSpan={6}>No users</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
