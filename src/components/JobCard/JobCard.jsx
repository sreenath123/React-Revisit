import "./JobCard.css";

const JobCard = ({ jobTitle, companyName, location, date }) => {
  return (
    <section className="jobCardWrapper">
      <section className="companyLogo">
        <section className="logo"></section>
        <section className="saveJob"></section>
      </section>
      <h2 className="jobTitle">{jobTitle}</h2>
      <p className="companyName">{companyName}</p>
      <p className="jobLocation">{location}</p>
      <p className="postedDay">{date}</p>
    </section>
  );
};

export default JobCard;
