document.addEventListener('DOMContentLoaded', () => {
	console.log('DOM Content Loaded');
	document.getElementById('cit').addEventListener('click', getStudentsByMajor, false);
	document.getElementById('bus').addEventListener('click', getStudentsByMajor, false);
	
	function getStudentsByMajor() {
		let studentTable = document.getElementById('studentTable');
		let selectedMajor = event.target.id.toUpperCase();
		console.log(selectedMajor);
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
/*
	async () => {
		var res = await fetch('cit5students.json');
		if(response.ok) {
			var students = await res.json();
			document.getElementById('cit').onclick = () => {
				alert('cit clicked');
			}
			document.getElementById('bus').onclick = () => {
				alert('bus clicked');
			}
		}
	}
*/
