import "./CourseInfo.css";
import { Link } from "react-router-dom";
function CourseInfo({ data: course }) {
  if (!course) {
    return <p>Loading course info...</p>; // prevent crash
  }

  return (
    <>
      <section className="home-Section container mb-5">
        <div className="left">
          <h1>{course.title}</h1>
          <p>Mechanical Engineering / Power Engineering</p>
        </div>
        <figure className="right">
          <img src={course.image} alt="course image" />
        </figure>
      </section>
      <aside className="about-course mb-5 container">
        <div className=" content ">
          <h2>About this course</h2>
          <p id="course-description">{course.description}</p>
        </div>
        <div className="enroll-button">
          <button>Enroll Now</button>
        </div>
      </aside>
      <aside className="course-include container mb-5">
        <h2>Included in This Course</h2>
        <ul className="course-include-list">
          <li>
            <Link to="/lessons">
              <i>🤔</i>
              <span id="lessons-number">{course.numberLessons}</span>
              <span>lessons</span>
            </Link>
          </li>

          <li>
            <Link to="/quizzes">
              <i>🤔</i>
              <span>quizzes</span>
            </Link>
          </li>

          <li>
            <Link to="/certificate">
              <i>🤔</i>
              <span>certificate</span>
            </Link>
          </li>
        </ul>
      </aside>

      <aside className="course-info container mb-5">
        <h2>Course information</h2>
        <ul>
          <li>
            <span className="instructor">instructor</span>
            <span className="course-instructor">
              {course.courseInfo.instructor}
            </span>
          </li>
          <li>
            <span className="language">language</span>
            <span className="course-language">
              {course.courseInfo.language}
            </span>
          </li>
          <li>
            <span className="duration">duration</span>
            <span className="course-duration">
              {course.courseInfo.duration}
            </span>
          </li>
          <li>
            <span className="level">Level</span>
            <span className="course-level">{course.courseInfo.level}</span>
          </li>
          <li>
            <span className="access">Access</span>
            <span className="course-access">{course.courseInfo.access}</span>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default CourseInfo;
