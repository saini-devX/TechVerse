import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../config";

const Dashboard = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/profile`, {
          credentials: "include",
        });

        const data = await res.json();
        console.log(data);

        setProfile(data);
      } catch (err) {
        console.error(err);
      }
    };

    getProfile();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      {profile ? (
        <pre>{JSON.stringify(profile, null, 2)}</pre>
      ) : (
        "Loading user..."
      )}
    </div>
  );
};

export default Dashboard;
