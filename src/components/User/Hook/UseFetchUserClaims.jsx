import { useState, useEffect } from "react";
import axios from "axios";

const useFetchUserClaims = () => {
  const [hasClaims, setHasClaims] = useState(false);
  const [claimCount, setClaimCount] = useState(0);
  const token = localStorage.getItem("token");
  const api = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchUserClaims = async () => {
      if (!token) {
        setHasClaims(false);
        return;
      }

      try {
        const response = await axios.get(`${api}/api/claim/get-user-claims`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const claimsArray = response.data.claims || [];
        setClaimCount(claimsArray.length);
        setHasClaims(claimsArray.length == 3); // Example condition: adjust as needed
      } catch (error) {
        console.error("Error fetching user claims:", error.response?.data || error.message);
        setHasClaims(false);
      }
    };

    fetchUserClaims();
  }, [api, token]);

  return { hasClaims, claimCount };
};

export default useFetchUserClaims;
