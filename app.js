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

  480124: {
    image: "images/student2.jpg",

    name: "AHMED ALI",

    father: "SAJID ALI",

    institute: "CITY COLLEGE",

    enrollment: "ZUEB/H.S.C/2024/999111",

    group: "COMPUTER SCIENCE",

    dob: "10-Jan-2006",

    venue: "CITY EXAM CENTER",
  },

  480125: {
    image: "images/student3.jpg",

    name: "SARA NOOR",

    father: "IMRAN NOOR",

    institute: "THE EDUCATORS",

    enrollment: "ZUEB/H.S.C/2024/777444",

    group: "PRE-MEDICAL",

    dob: "02-Feb-2007",

    venue: "MAIN BOARD OFFICE",
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
