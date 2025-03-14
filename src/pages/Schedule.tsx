import React from "react";
import { Pencil, Calendar, CheckCircle, Send } from "lucide-react"; // 아이콘 사용
import "./../assets/styles/Guide.css";

const Guide: React.FC = () => {
  return (
    <div className="sub-container">
      <div className="rental-guide-container">
        <h1 className="title">Schedule</h1>
       <iframe
          src="https://calendar.google.com/calendar/embed?src=a76a76457b7a8288266bbf726b2299e622aefe4902f404835bb025a9cee124a1%40group.calendar.google.com&ctz=Asia%2FSeoul" 
          width="100%" 
          height="600px" 
          style={{ border: "none" }}
          title="Schedule"
        ></iframe>
      </div>
    </div>
  );
};

export default Guide;
