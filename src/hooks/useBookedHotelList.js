import { useEffect, useState } from "react";
import { getBookedHotelList } from "../utils";

function useBookedHotelList(hotelId) {
  const [details, setDetails] = useState();
  const [error, setError] = useState(null);
  useEffect(() => {
    try {
      if (!hotelId) {
        throw new Error("Hotel Id is required");
      }
      getBookedHotelList(hotelId)
        .then((res) => {
          setDetails(res);
        })
        .catch((err) => setError(err));
      return () => {};
    } catch (error) {
      console.log("error", error);
    }
  }, [hotelId]);
  return { details, error };
}
export default useBookedHotelList;
