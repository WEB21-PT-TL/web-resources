import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

const AdminView = () => {
  const [submissions, setSubmissions] = useState();
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    axios
      .get("https://web-resources-api.herokuapp.com/api/submissions")
      .then((res) => {
        console.log(res.data);
        setSubmissions(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleLogout = () => {
    localStorage.setItem("loggedIn", false);
    history.push("/home");
  };

  if (loading) {
    return <h1>Loading..</h1>;
  }

  return (
    <div style={{ margin: "0 auto", fontSize: "1.5rem", color: "black" }}>
      <h1>Submissions</h1>
      <hr />
      {submissions.map((s) => (
        <div>
          <p>Email: {s.email}</p>
          <p>Reason: {s.reason}</p>
          <p>Comments: {s.comment}</p>
          <hr />
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      ))}
    </div>
  );
};

export default AdminView;
