import React, { useState, useEffect } from "react";
import axios from "axios";

function CountrySelector() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data))
      .catch((error) => console.log(error));
  }, []);

  const sortedCountries = [...countries].sort((a, b) => {
    const aName = a.name.common.toLowerCase();
    const bName = b.name.common.toLowerCase();
    if (sortOrder === "asc") {
      return aName.localeCompare(bName);
    } else {
      return bName.localeCompare(aName);
    }
  });

  return (
    <div className="relative">
      <div className="flex items-center">
        <button
          className="px-2 py-1 mr-2 border rounded text-gray-600 hover:bg-gray-200"
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          {sortOrder === "asc" ? "Sort A-Z" : "Sort Z-A"}
        </button>
        <div className="flex items-center">
          {selectedCountry && (
            <img
              className="w-8 h-8 mr-2 rounded-full border border-gray-400"
              src={`https://www.countryflags.io/${selectedCountry.toLowerCase()}/flat/64.png`}
              alt={`Flag of ${selectedCountry}`}
            />
          )}
          <span className="text-gray-800 font-semibold">
            {selectedCountry || "Select a country"}
          </span>
        </div>
      </div>
      <select
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        onChange={(event) => setSelectedCountry(event.target.value)}
        value={selectedCountry}
      >
        <option value="">Select a country</option>
        {sortedCountries.map((country) => (
          <option key={country.name.common} value={country.name.common}>
            {country.name.common}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M14.707 7.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 101.414-1.414L12.414 10l2.293-2.293z"
            clipRule="evenodd"
            fillRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

export default CountrySelector;
