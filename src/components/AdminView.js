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
    <div style={{ width:"100vw", textAlign:"center", marginTop:"1%"}} >
    <h1>Submissions</h1>
    <div style={{ display: "flex", justifyContent:"center", flexWrap: "wrap", textAlign: "left", fontSize: "1rem", color: "#4E4E4E" }}>
      {submissions.map((s) => (
        <div style={{ width: "30%", border:"1px solid grey", padding:"1%"}}>
          <p>Email: {s.email}</p>
          <p>Reason: {s.reason}</p>
          <p>Message: {s.message}</p>
        </div>
      ))}
      <div style={{width: "100%", textAlign:"center", padding: "1%"}}>
      <Button onClick={handleLogout} >Logout</Button>
      </div>
    </div>
    </div>
    
  );
};

export default AdminView;
