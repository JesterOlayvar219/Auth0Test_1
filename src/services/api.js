const API_URL = "http://localhost:5000/api";

export const fetchPublicData = async () => {
  const response = await fetch(`${API_URL}/public`);
  return response.json();
};

export const fetchPrivateData = async (token) => {
  const response = await fetch(`${API_URL}/private`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

export const fetchUserProfile = async (token) => {
  const response = await fetch(`${API_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};
