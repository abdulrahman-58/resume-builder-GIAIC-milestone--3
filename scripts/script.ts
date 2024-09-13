const form = document.getElementById('resume-form') as HTMLFormElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    if (form.checkValidity()) {
        generateResume();
    } else {
        alert('Please fill all the required fields!');
    }
});

function generateResume() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const institution = (document.getElementById('institution') as HTMLInputElement).value;
    const gradYear = (document.getElementById('gradYear') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const role = (document.getElementById('role') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    const resumeContent = `
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        
        <h4>Education</h4>
        <p>${degree}, ${institution} (${gradYear})</p>
        
        <h4>Work Experience</h4>
        <p>${role}, ${company}</p>
        
        <h4>Skills</h4>
        <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
    `;

    document.getElementById('resume-content')!.innerHTML = resumeContent;
}
