import React, { useState } from "react";
import JobCard from "../JobCard/JobCard";
import "./JobSlider.css";

const jobs = [
  {
    jobTitle: "React Application developer",
    companyName: "Accenture in India",
    location: "Bengaluru in Karnataka",
    date: "5 days ago",
  },
  {
    jobTitle: "React Application developer",
    companyName: "Accenture in India",
    location: "Bengaluru in Karnataka",
    date: "2 days ago",
  },
  {
    jobTitle: "Python developer",
    companyName: "Accenture in India",
    location: "Bengaluru in Karnataka",
    date: "5 days ago",
  },
  {
    jobTitle: "Java developer",
    companyName: "Accenture in India",
    location: "Bengaluru in Karnataka",
    date: "3 days ago",
  },
  {
    jobTitle: "JavaScript developer",
    companyName: "Accenture in India",
    location: "Bengaluru in Karnataka",
    date: "2 days ago",
  },
];

const JobSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentTransform = -activeIndex * 100;

  function handleNext() {
    setActiveIndex((pIndex) => (pIndex + 1) % jobs.length);
  }
  function handlePrev() {
    setActiveIndex((pIndex) => (pIndex - 1 + jobs.length) % jobs.length);
  }

  const handlekeyDown = (e) => {
    if (e.key === "ArrowRight") {
      handleNext();
    } else if (e.key === "ArrowLeft") {
      handlePrev();
    }
  };

  return (
    <section className="sliderWrapper" onKeyDown={handlekeyDown} tabIndex={0}>
      <section
        className="carousel-items"
        style={{ transform: `translateX(${currentTransform}%)` }}
      >
        {jobs.map((job, index) => {
          const { jobTitle, companyName, location, date } = job;
          const props = { jobTitle, companyName, location, date };
          return (
            <React.Fragment key={index}>
              <JobCard {...props} />
            </React.Fragment>
          );
        })}
      </section>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </section>
  );
};

export default JobSlider;
