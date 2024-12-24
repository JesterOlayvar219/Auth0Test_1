import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { fetchUserProfile } from "../services/api";

function Profile() {
  const { user, isLoading, getAccessTokenSilently } = useAuth0();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const loadProfileData = async () => {
      try {
        const token = await getAccessTokenSilently();
        const data = await fetchUserProfile(token);
        setProfileData(data);
      } catch (error) {
        console.error("Error loading profile data:", error);
      }
    };

    if (user) {
      loadProfileData();
    }
  }, [user, getAccessTokenSilently]);

  if (isLoading || !profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile">
      <h2>Profile Dashboard</h2>
      <div className="profile-content">
        <img src={user.picture} alt={user.name} />
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <div className="profile-details">
          <h4>User Details</h4>
          <pre>{JSON.stringify(profileData, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}

export default Profile;
