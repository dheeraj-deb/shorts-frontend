import React, { useState, useEffect } from "react";

import { getSuggestedUsers } from "../../../services/api/UserRequestes.js";

import SuggestionCard from "./SuggestionCard";
import Spinner from "../../Spinner";

function Suggestion() {
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const { data } = await getSuggestedUsers();
    console.log(data)
    setSuggestions(data.suggestion);
  };

  useEffect(() => {
    fetchUsers();
    setLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="mt-6">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="bg-white p-4">
      <h3 className="font-poppins text-center font-medium mb-2">
        People you may know
      </h3>

      {suggestions?.map((user) => {
        return (
          <div className="mb-2">
            <SuggestionCard user={user} />
          </div>
        );
      })}
    </div>
  );
}

export default Suggestion;
