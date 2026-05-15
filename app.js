// =========================
// STUDENT DATABASE
// =========================

const students = {
  672231: {
    image: "images/student1.PNG",

    name: " AMIR KHAN",

    father: "MUHAMMAD HAFEEZ KHAN",

    institute: "J.M.T PUBLIC HIGHER SECONDARY SCHOOL",

    enrollment: "ZUEB/M-H.S.C/2024/165095",

    group: "COMMERCE PRIVATE",

    dob: "15-APR-1991",

    venue: "THE EDUCAREER SCHOOLING SYSTEM (HIGHER SECONDARY)",
  },

  682299: {
    image: "images/student2.jpeg",

    name: "AHMAD AAYAN ARSHAD",

    father: "MUHAMMAD ARSHAD",

    institute: "J.M.T PUBLIC HIGHER SECONDARY SCHOOL",

    enrollment: "ZUEB/M-H.S.C/2024/152832",

    group: "PRIVATE PRE-ENGINEERING",

    dob: "24-JUL-2007",

    venue: "THE EDUCAREER SCHOOLING SYSTEM (HIGHER SECONDARY)",
  },

  678779: {
    image: "images/student3.jpeg",

    name: "MUHAMMAD DANIYAL",

    father: "ABDUL HAFEEZ",

    institute: " J.M.T PUBLIC HIGHER SECONDARY SCHOOL",

    enrollment: "ZUEB/H.S.C/2025/150090",

    group: "PRE-ENGINEERING",

    dob: "15-JUL-2008",

    venue: "THE EDUCAREER SCHOOLING SYSTEM (HIGHER SECONDARY)",
  },
  682314: {
    image: "images/student4.jpeg",

    name: "  SAMAMA SIDDIQUI",

    father: "NASAR MOHIUDDIN",

    institute: " J.M.T PUBLIC HIGHER SECONDARY SCHOOL",

    enrollment: "ZUEB/H.S.C/2025/149698",

    group: "PRE-ENGINEERING",

    dob: "04-JUN-2010",

    venue: "THE EDUCAREER SCHOOLING SYSTEM (HIGHER SECONDARY)",
  },
  678777: {
    image: "images/student1.jpeg",

    name: "  MUHAMMAD ALIYAN AHMED",

    father: "KAMRAN AHMED SHAIKH",

    institute: " J.M.T PUBLIC HIGHER SECONDARY SCHOOL",

    enrollment: "ZUEB/H.S.C/2025/150093",

    group: "GENERAL SCIENCE",

    dob: "26-MAR-2008",

    venue: "THE EDUCAREER SCHOOLING SYSTEM (HIGHER SECONDARY)",
  },
  698583: {
    image: "images/student6.jpeg",

    name: "  RIMSHA BIBI",

    father: "SYED RASHEED SHAH",

    institute: " J.M.T PUBLIC HIGHER SECONDARY SCHOOL",

    enrollment: "ZUEB/M-H.S.C/2024/161793",

    group: "PRIVATE PRE-MEDICAL",

    dob: "19-OCT-2006",

    venue: "THE EDUCAREER SCHOOLING SYSTEM (HIGHER SECONDARY)",
  },
};

// =========================
// GET ROLL NUMBER FROM URL
// =========================

const params = new URLSearchParams(window.location.search);

const rolno = params.get("rolno");

const student = students[rolno];

// =========================
// SHOW DATA
// =========================

if (student) {
  document.getElementById("studentImage").src = student.image;

  document.getElementById("rollno").innerText = rolno;

  document.getElementById("name").innerText = student.name;

  document.getElementById("father").innerText = student.father;

  document.getElementById("institute").innerText = student.institute;

  document.getElementById("enrollment").innerText = student.enrollment;

  document.getElementById("group").innerText = student.group;

  document.getElementById("dob").innerText = student.dob;

  document.getElementById("venue").innerText = student.venue;
} else {
  document.body.innerHTML = `

        <div style="
          width:100%;
          height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          font-size:35px;
          font-weight:bold;
          color:red;
          font-family:Arial;
        ">
          INVALID ROLL NUMBER
        </div>

      `;
}
