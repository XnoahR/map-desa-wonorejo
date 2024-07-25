import { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import Link from "next/link";

const Test = () => {
  const [data, setData] = useState({});
  const [selectedDusun, setSelectedDusun] = useState("");
  const [selectedRW, setSelectedRW] = useState("");
  const [selectedRT, setSelectedRT] = useState("");
  const [destination, setDestination] = useState("");

  useEffect(() => {
    fetch('/api/fetch')
      .then(response => response.json())
      .then(fetchedData => {
        const formattedData = formatData(fetchedData);
        setData(formattedData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const formatData = (fetchedData) => {
    const result = {};
    fetchedData.forEach(doc => {
      const { dusun, RW, RT, destination } = doc;
      if (!result[dusun]) {
        result[dusun] = { RW: {} };
      }
      if (!result[dusun].RW[RW]) {
        result[dusun].RW[RW] = {};
      }
      result[dusun].RW[RW][RT] = { destination : destination };
    });
    return result;
  };

  const handleDusunChange = (event) => {
    setSelectedDusun(event.target.value);
    setSelectedRW("");
    setSelectedRT("");
    setDestination("");
  };

  const handleRWChange = (event) => {
    setSelectedRW(event.target.value);
    setSelectedRT("");
    setDestination("");
  };

  const handleRTChange = (event) => {
    const rt = event.target.value;
    setSelectedRT(rt);
    setDestination(data[selectedDusun].RW[selectedRW][rt].destination);
  };

  return (
    <>
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
      </div>
      {destination && (
        <Link
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`}
          passHref
        >
          <button className="mt-4 w-16 h-8 bg-cyan-700 text-white rounded-md mx-auto border border-red-500">
            OK
          </button>
        </Link>
      )}
    </>
  );
};

export default Test;
