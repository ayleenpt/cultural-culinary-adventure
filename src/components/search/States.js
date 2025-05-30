import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import '../../styles/search/Countries.css';

const usStates = [
  { code: 'AL', name: 'Alabama' }, { code: 'AK', name: 'Alaska' },
  { code: 'AZ', name: 'Arizona' }, { code: 'AR', name: 'Arkansas' },
  { code: 'CA', name: 'California' }, { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' }, { code: 'DE', name: 'Delaware' },
  { code: 'FL', name: 'Florida' }, { code: 'GA', name: 'Georgia' },
  { code: 'HI', name: 'Hawaii' }, { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' }, { code: 'IN', name: 'Indiana' },
  { code: 'IA', name: 'Iowa' }, { code: 'KS', name: 'Kansas' },
  { code: 'KY', name: 'Kentucky' }, { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' }, { code: 'MD', name: 'Maryland' },
  { code: 'MA', name: 'Massachusetts' }, { code: 'MI', name: 'Michigan' },
  { code: 'MN', name: 'Minnesota' }, { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' }, { code: 'MT', name: 'Montana' },
  { code: 'NE', name: 'Nebraska' }, { code: 'NV', name: 'Nevada' },
  { code: 'NH', name: 'New Hampshire' }, { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' }, { code: 'NY', name: 'New York' },
  { code: 'NC', name: 'North Carolina' }, { code: 'ND', name: 'North Dakota' },
  { code: 'OH', name: 'Ohio' }, { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' }, { code: 'PA', name: 'Pennsylvania' },
  { code: 'RI', name: 'Rhode Island' }, { code: 'SC', name: 'South Carolina' },
  { code: 'SD', name: 'South Dakota' }, { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' }, { code: 'UT', name: 'Utah' },
  { code: 'VT', name: 'Vermont' }, { code: 'VA', name: 'Virginia' },
  { code: 'WA', name: 'Washington' }, { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' }, { code: 'WY', name: 'Wyoming' },
];

export default function States({ selectedStates, setSelectedStates }) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  const toggleVisibility = () => setIsOpen(!isOpen);

  const handleCheckboxChange = (code) => {
    setSelectedStates((prev) =>
      prev.includes(code)
        ? prev.filter((c) => c !== code)
        : [...prev, code]
    );
  };

  const filteredStates = usStates.filter((state) =>
    state.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="states-container">
      <div className="countries-header" onClick={toggleVisibility}>
        <div className="countries-title">States</div>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>

      {selectedStates.length > 0 && (
        <div className="selected-tags">
          {selectedStates.map((code) => {
            const state = usStates.find((s) => s.code === code);
            return (
              <div key={code} className="tag">
                {state?.name}
                <button
                  className="remove-tag"
                  onClick={() => handleCheckboxChange(code)}
                  aria-label={`Remove ${state?.name}`}
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
            placeholder="Search states..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          <div className="list">
            {filteredStates.map((state) => (
              <div key={state.code} className="list-item">
                <input
                  type="checkbox"
                  checked={selectedStates.includes(state.code)}
                  onChange={() => handleCheckboxChange(state.code)}
                  id={state.code}
                />
                <label className="country-label" htmlFor={state.code}>{state.name}</label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
