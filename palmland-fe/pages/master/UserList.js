import { Box, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { getUserData } from "@/stores/User/UserList";

const UserList = () => {

  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserData(setUsers, setLoading);
  }, []);
  if (!loading && users && users.length > 0) {
    return (
      <div className="custom__container about__page">
        <div className="custom__row">
          <table border={2}>
              <thead>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Id</th>
              </thead>
              <tbody>
                  {users.map((user, index) => (
                      <tr key={index}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
        </div>
      </div>
    );
  }

};

export default UserList;
