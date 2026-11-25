
import StudentProfileCard from "./StudentProfileCard";
import "./index.css";

function App() {
  return (
    <div className="app">
      <header className="page-header">
        <p className="eyebrow">WEEK 11 · REACT COMPONENTS & PROPS</p>
        <h1>Student Directory</h1>
        <p className="subtitle">
          Meet our students and explore their academic profiles.
        </p>
      </header>

      <main>
        <div className="student-grid">
          <StudentProfileCard
            name="Rai Prashna"
            studentId="202539489"
            major="Computer Engineering"
            year={2}
            gpa="4.3"
          />

          <StudentProfileCard
            name="Sabhyata Chhetri"
            studentId="202539478"
            major="Computer Engineering"
            year={2}
            gpa="4.3"
          />

          <StudentProfileCard
            name="Vision Prajuli"
            studentId="202539446"
            major="Computer Engineering"
            year={2}
            gpa="4.3"
          />
        </div>
      </main>

      <footer className="page-footer">
        <p>STUDENT DIRECTORY · 2026</p>
      </footer>
    </div>
  );
}

export default App;
