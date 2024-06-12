import React, { useState, useEffect, useCallback } from "react";
import api from "./api";
import Datepicker from "./components/Datepicker";
import Card from "./components/Card";
import AppLayout from "./layouts/AppLayout";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [date, setDate] = useState(new Date());
  const [selectedDate, setselectedDate] = useState(null);
  const [keys, setKeys] = useState([]);
  const [availableDates, setAvailableDates] = useState([]);

  const fetchData = useCallback(async () => {
    const params = {};
    if (date) {
      params.date = date;
      console.log(params);
    }
    const response = await api.get("/data", { params });
    console.log(response.data);
    if (response.data.length > 0) {
      setKeys(Object.keys(response.data[0].message));
    }
    setData(response.data);
    const responseAll = await api.get("/data/all", { params });
    const dates = responseAll.data.map((d) => new Date(d.timestamp));
    const formattedDates = dates.map((d) => d.toISOString().split("T")[0]);
    const uniqueDates = formattedDates.filter(
      (value, index, self) => self.indexOf(value) === index
    );
    setAvailableDates(uniqueDates);
  }, [date]);

  useEffect(() => {
    fetchData();
  }, [date, fetchData]);
  function onDateChange(selectedDates, dateStr, instance) {
    setDate(dateStr);
    setselectedDate(dateStr);
  }
  return (
    <>
      <AppLayout>
        <div className="container mx-auto p-4">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <div className="grid grid-flow-col sm:auto-cols-max justify-end sm:justify-end gap-2">
                <Datepicker
                  availableDates={availableDates}
                  onDateChange={onDateChange}
                  selectedDate={selectedDate}
                />
              </div>
            </div>

            <div className="grid grid-cols-12 gap-8">
              {keys.map((key, index) => (
                <Card key={index} title={key} data={data} />
              ))}
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  );
}

export default App;
