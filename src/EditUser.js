import React, { useEffect } from "react";
import { useState } from "react";

function EditUser({ currentUser, updateUser, setEditing, props }) {
  const [user, setUser] = useState(currentUser);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(currentUser);
  }, [props]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        updateUser(user.id, user);
      }}
    >
      <label htmlFor="">First Name</label>
      <input
        type="text"
        name="firstName"
        value={user.firstName}
        onChange={handleInputChange}
      />
      <label htmlFor="">Last Name</label>
      <input
        type="text"
        name="lastName"
        value={user.lastName}
        onChange={handleInputChange}
      />
      <label htmlFor="">Email</label>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleInputChange}
      />
      <label htmlFor="">Telephone</label>
      <input
        type="text"
        name="telephone"
        value={user.telephone}
        onChange={handleInputChange}
      />
      <button>Update user</button>
      <button onClick={() => setEditing(false)}>Cancel</button>
    </form>
  );
}

export default EditUser;
