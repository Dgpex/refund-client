import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchUserClaims = (api, token) => {
  const [hasClaims, setHasClaims] = useState(true);

  useEffect(() => {
    const fetchUserClaims = async () => {
      try {
        const response = await axios.get(`${api}/api/claim/get-user-claims`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const claimsArray = response.data.claims;
        setHasClaims(Array.isArray(claimsArray) && claimsArray.length < 3);
      } catch (error) {
        console.error("Error fetching user claims:", error);
        setHasClaims(true); 
      }
    };

    fetchUserClaims();
  }, [api, token]);

  return hasClaims;
};

export default useFetchUserClaims;
