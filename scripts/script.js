var form = document.getElementById('resume-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (form.checkValidity()) {
        generateResume();
    }
    else {
        alert('Please fill all the required fields!');
    }
});
function generateResume() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var degree = document.getElementById('degree').value;
    var institution = document.getElementById('institution').value;
    var gradYear = document.getElementById('gradYear').value;
    var company = document.getElementById('company').value;
    var role = document.getElementById('role').value;
    var skills = document.getElementById('skills').value.split(',');
    var resumeContent = "\n        <h3>".concat(name, "</h3>\n        <p>Email: ").concat(email, "</p>\n        \n        <h4>Education</h4>\n        <p>").concat(degree, ", ").concat(institution, " (").concat(gradYear, ")</p>\n        \n        <h4>Work Experience</h4>\n        <p>").concat(role, ", ").concat(company, "</p>\n        \n        <h4>Skills</h4>\n        <ul>").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "</ul>\n    ");
    document.getElementById('resume-content').innerHTML = resumeContent;
}
