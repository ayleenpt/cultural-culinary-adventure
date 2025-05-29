import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import countries from 'world-countries';
import '../../styles/search/Countries.css';

export default function Countries() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedCountries, setSelectedCountries] = useState([]);

  const toggleVisibility = () => setIsOpen(!isOpen);

  const handleCheckboxChange = (cca3) => {
    setSelectedCountries((prev) =>
      prev.includes(cca3)
        ? prev.filter((code) => code !== cca3)
        : [...prev, cca3]
    );
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="countries-container">
      <div className="countries-header" onClick={toggleVisibility}>
        <div className="countries-title">Countries</div>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>

      {selectedCountries.length > 0 && (
        <div className="selected-tags">
          {selectedCountries.map((code) => {
            const country = countries.find((c) => c.cca3 === code);
            return (
              <div key={code} className="tag">
                {country?.name.common}
                <button
                  className="remove-tag"
                  onClick={() => handleCheckboxChange(code)}
                  aria-label={`Remove ${country?.name.common}`}
                >
                  ×
                </button>
              </div>
            );
          })}
        </div>
      )}


      {isOpen && (
        <div className="dropdown">
          <input
            type="text"
            placeholder="Search countries..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          <div className="list">
            {filteredCountries.map((country) => (
              <div key={country.cca3} className="list-item">
                <input
                  type="checkbox"
                  checked={selectedCountries.includes(country.cca3)}
                  onChange={() => handleCheckboxChange(country.cca3)}
                  id={country.cca3}
                />
                <label htmlFor={country.cca3}>{country.name.common}</label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
