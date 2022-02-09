import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './css/style.css';

const App = () => {
  //const [value, onChange] = useState(new Date());
  return(
    <>
    <div className="calendar-cont">
    <Calendar />
    </div>
    </>
  );
};

export default App;
