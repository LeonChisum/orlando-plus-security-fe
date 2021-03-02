import React from "react";
import { Link, Route } from 'react-router-dom'
import "../Courses/Courses.css";
import CoursesForm from "./CoursesForm";

const Courses = () => {
  return (
    <div>
    <div className="course-section">
      <section className="hero-section">
        <div>
          <h3>
            Security Officer <span id="D">“D” </span>License Training
          </h3>
        </div>
      </section>
      <section className="course-cta">
        <div className="cta-hero">
          <h3>Looking to become a new licensed professional?</h3>
          <hr></hr>
          <p>
            We are offering the State of Florida Class “D” Unarmed Security
            License. The class is instructed by State of Florida licensed Class DI
            Instructors with multiple years of Class D Security Officer
            experience.
          </p>
          <Link to='/contact'><button className="cta-button">Learn More &rarr;</button></Link>
        </div>
      </section>
      <section className="course-desc">
        <h3>Course Description</h3>
        <p>
          During this 42 hour training coarse the following material will be
          covered: Chapter 493 Florida Statute, Chapter 5N-1 Florida
          Administrative Code, Chapter 790 Florida Statute Weapon and Firearms,
          Chapter 316 Florida Statute Vehicles Used by Security Agencies;
          Lights, Chapter 843 Florida Statute Unlawful Symbols of Authority,
          Legal Liability Issues, Basic Emergency First Aid, and Emergency
          Procedures
        </p>
        <h3>Requirements</h3>
        <p>
          <ol>
            <li>Must be 18 years of age.</li>
            <li>
              Have no disqualifying criminal history. (A background check will
              run as part of the application by the Division of Licensing.)
            </li>
            <li>Be legally allowed to work in the United States.</li>
            <li>
              A student must achieve a score of 75% on both (2) written
              examinations to successfully pass this training course.
            </li>
          </ol>
          Cost: <span>$125.00</span> paid prior to <strong>or</strong> on the first day of class. No exceptions regarding late payment. (*Price inclundes the option of <strong>1</strong> provided lunch meal per class day <strong>or</strong> bring your own lunch.)
        </p>
      </section>
      <section className="course-contact d-flex flex-column align-content-center align-items-center">
            <h3>Please contact us at <a href="tel:4078015323">(407)-801-5323</a> to schedule your class today. </h3>
            <button className="cta-button"><Link to='/contact'>Schedule <span>&rarr;</span></Link></button>
      </section>
      <Route exact path='/securitydtraining/scheduleaclass' component={CoursesForm} />
    </div>
    </div>              
    // insert route to schedule student info
  );
};

export default Courses;