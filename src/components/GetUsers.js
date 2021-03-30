import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Query";

function GetUsers() {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (data) {
      setUsers(data.findAllUsers);
    }
  }, [data]);

  return (
    <div>
      {users.map((val) => {
        return <h1>{val.email}</h1>;
      })}
    </div>
  );
}

export default GetUsers;
