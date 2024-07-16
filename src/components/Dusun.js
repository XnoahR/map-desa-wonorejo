import { useState } from "react";
import Search from "./Search";

const Dropdown = ({ name, data, onChange }) => {
  return (
    <div className="relative inline-block w-full mt-3">
      <select
        className="w-full appearance-none text-justify ps-5 bg-gray-300 py-3 rounded-md font-thin text-lg pr-10"
        onChange={onChange}
      >
        <option value="">{name}</option>
        {Object.keys(data).map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-700"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

const Test = () => {
  const data = {
    Krajan: {
      RW: {
        "01": {
          "01": { coordinates: "-7.6221348,110.8891758" },
          "02": { coordinates: "23.456,78.901" },
        },
        "02": {
          "03": { coordinates: "34.567,89.012" },
          "04": { coordinates: "45.678,90.123" },
        },
      },
    },
    "Krajan Kidul": {
      RW: {
        "01": {
          "05": { coordinates: "56.789,01.234" },
          "06": { coordinates: "67.890,12.345" },
        },
        "02": {
          "07": { coordinates: "78.901,23.456" },
          "08": { coordinates: "89.012,34.567" },
        },
      },
    },
    // Add more Dusun as needed
  };

  const [selectedDusun, setSelectedDusun] = useState("");
  const [selectedRW, setSelectedRW] = useState("");
  const [selectedRT, setSelectedRT] = useState("");
  const [coordinates, setCoordinates] = useState("");

  const handleDusunChange = (event) => {
    setSelectedDusun(event.target.value);
    setSelectedRW("");
    setSelectedRT("");
    setCoordinates("");
  };

  const handleRWChange = (event) => {
    setSelectedRW(event.target.value);
    setSelectedRT("");
    setCoordinates("");
  };

  const handleRTChange = (event) => {
    const rt = event.target.value;
    setSelectedRT(rt);
    setCoordinates(data[selectedDusun].RW[selectedRW][rt].coordinates);
  };

  return (
    <div className="w-4/5 mx-auto">
      <Dropdown name="Pilih Dusun" data={data} onChange={handleDusunChange} />

      {selectedDusun && (
        <Dropdown
          name="Pilih RW"
          data={data[selectedDusun].RW}
          onChange={handleRWChange}
        />
      )}

      {selectedRW && (
        <Dropdown
          name="Pilih RT"
          data={data[selectedDusun].RW[selectedRW]}
          onChange={handleRTChange}
        />
      )}

      {coordinates && <Search destination={coordinates} />}
    </div>
  );
};

export default Test;
