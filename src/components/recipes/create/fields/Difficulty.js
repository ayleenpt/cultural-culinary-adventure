import Select from 'react-select';

const options = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' }
];

function Difficulty({ difficulty, setDifficulty }) {
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#a40000' : 'white',
      color: state.isFocused ? 'white' : 'black',
    }),
    control: (provided) => ({
      ...provided,
      minHeight: '29px',
      height: '29px',
      borderColor: '#ccc',
      boxShadow: 'none',
      borderRadius: '7px',
      '&:hover': {
        boxShadow: '0 0 0 2px #a40000;',
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: '0 8px',
      height: '29px',
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      height: '29px',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: '4px',
    }),
  };

  return (
    <div style={{ width: '100%', margin: '0' }}>
      <Select
        options={options}
        value={options.find(opt => opt.value === difficulty)}
        onChange={(selectedOption) => setDifficulty(selectedOption.value)}
        styles={customStyles}
        isSearchable={false}
      />
    </div>
  );
}

export default Difficulty;