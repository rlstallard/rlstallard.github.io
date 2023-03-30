/* Script for adding click events to buttons and creating Ajax request for cit5students.json and handlebars template compiling*/
document.addEventListener('DOMContentLoaded', () => {
	// add click events to buttons
	document.getElementById('cit').addEventListener('click', getStudentsByMajor, false); 
	document.getElementById('bus').addEventListener('click', getStudentsByMajor, false);
	
	function getStudentsByMajor() {
		let studentTable = document.getElementById('studentTable');
		let selectedMajor = event.target.id.toUpperCase();
		let request = new XMLHttpRequest();
	  	request.open('GET', 'cit5students.json');     // open the request
	  	request.onload = () => {
	      		let data = JSON.parse(request.responseText);
			let students = data.filter( (student) => {
				return student.major == selectedMajor;
			});
			if (request.status == 200) {
				let templateText = document.getElementById('tableTemplate').innerHTML; //get template code
				let compiledTemplateText = Handlebars.compile(templateText); //compile template code
				let compiledHtml = compiledTemplateText({students:students}); //apply compiled template code to html
				studentTable.innerHTML = compiledHtml;
			} else {
				studentTable.innerHTML = "There was an error."
			}
		}
		request.send(null);
	}
});	
