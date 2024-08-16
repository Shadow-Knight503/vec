import React, { useState, useEffect, useRef } from 'react';
import './StatsGrid.css';
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { GiAchievement } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";

const StatsGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const targetValues = {
    teachers: 286,
    phdHolders: 25,
    students: 34069,
    placement: 90,
  };

  const [counters, setCounters] = useState({
    teachers: 0,
    phdHolders: 0,
    students: 0,
    placement: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const animateCounters = () => {
        setCounters((prevCounters) => {
          const newCounters = { ...prevCounters };
          Object.keys(targetValues).forEach((key) => {
            if (newCounters[key] < targetValues[key]) {
              newCounters[key] += Math.ceil(targetValues[key] / 95); // Adjust the divisor for speed
              if (newCounters[key] > targetValues[key]) {
                newCounters[key] = targetValues[key];
              }
            }
          });
          return newCounters;
        });
      };

      const interval = setInterval(animateCounters, 30);

      return () => clearInterval(interval);
    }
  }, [isVisible]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="page-container">
      <div className="stats-grid-container">
        <div className="stats-grid" ref={statsRef}>
          <div className="stat-item">
          <FaChalkboardTeacher size={40} />
            <i className="fas fa-chalkboard-teacher stat-icon"></i>
            <h2 className="stat-number">{counters.teachers}</h2>
            <p className="stat-label">Teachers</p>
          </div>
          <div className="stat-item">
            <i className="fas fa-smile stat-icon"></i>
            <PiStudentBold  size={40}/>
            <h2 className="stat-number">{counters.phdHolders} INR</h2>
            <p className="stat-label">highest Salary (LPA)</p>
          </div>
          <div className="stat-item">
            <i className="fas fa-user-graduate stat-icon"></i>
            <IoIosPeople  size={40}/>
            <h2 className="stat-number">{counters.students}</h2>
            <p className="stat-label">Active Learners</p>
          </div>
          <div className="stat-item">
            <i className="fas fa-university stat-icon"></i>
            <GiAchievement  size={40}/>
            <h2 className="stat-number">{counters.placement}%</h2>
            <p className="stat-label">Placement</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsGrid;
