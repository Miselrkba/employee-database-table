import React from "react";

function AddUSer({ user, setUser, addUser, initialFormState }) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    //setting value of first name, last name, email and telephone to
    //input value
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.firstName || !user.lastName) return;
        addUser(user);
        setUser(initialFormState);
      }}
    >
      <input
        placeholder="First Name"
        type="text"
        name="firstName"
        value={user.firstName}
        onChange={handleInputChange}
      />
      <input
        placeholder="Last Name"
        type="text"
        name="lastName"
        value={user.lastName}
        onChange={handleInputChange}
      />
      <input
        placeholder="Email"
        type="text"
        name="email"
        value={user.email}
        onChange={handleInputChange}
      />
      <input
        placeholder="Telephone"
        type="text"
        name="telephone"
        value={user.telephone}
        onChange={handleInputChange}
      />
      <button className="btn btn-primary">
        Add new user
      </button>
    </form>
  );
}

export default AddUSer;
