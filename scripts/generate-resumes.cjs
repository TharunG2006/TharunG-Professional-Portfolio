const fs = require("fs");
const path = require("path");

const resumeDir = path.join(__dirname, "..", "public", "resumes");
if (!fs.existsSync(resumeDir)) {
  fs.mkdirSync(resumeDir, { recursive: true });
}

const titles = [
  { file: "Tharun_G_Cybersecurity_Resume.pdf", title: "Tharun G - Cybersecurity Specialist Resume" },
  { file: "Tharun_G_AIML_Resume.pdf", title: "Tharun G - AI and Machine Learning Resume" },
  { file: "Tharun_G_Geospatial_Resume.pdf", title: "Tharun G - Geospatial and GIS Resume" },
  { file: "Tharun_G_FullStack_Resume.pdf", title: "Tharun G - Full-Stack Engineering Resume" },
  { file: "Tharun_G_Space_Cyber_Resume.pdf", title: "Tharun G - Space and Cyber Systems Resume" },
  { file: "Tharun_G_Resume.pdf", title: "Tharun G - General Engineering Resume" }
];

function generatePdf(title) {
  const content = `BT
/F1 20 Tf
50 730 Td
(${title}) Tj
/F1 12 Tf
0 -35 Td
(Candidate: Tharun G | Email: tarun.ganapathi2007@gmail.com) Tj
0 -20 Td
(Institution: National Engineering College | B.E. Computer Science and Engineering) Tj
0 -30 Td
(Focus: Cybersecurity, AI/ML Anomaly Detection, Geospatial Intelligence) Tj
0 -40 Td
([Official PDF Placeholder - Replace with your exported final resume in /public/resumes/]) Tj
ET`;

  const streamLength = Buffer.byteLength(content);
  return `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length ${streamLength} >>
stream
${content}
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000244 00000 n 
0000000350 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
450
%%EOF
`;
}

titles.forEach(({ file, title }) => {
  fs.writeFileSync(path.join(resumeDir, file), generatePdf(title));
  console.log(`Generated: ${file}`);
});
