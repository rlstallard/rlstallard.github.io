document.addEventListener('DOMContentLoaded', () => {
	document.getElementsByClassName('majorsbtn').onclick = (event) => {
		let selectedMajor = event.target.id.toUpperCase();
		console.log(selectedMajor);
		let studentTable = document.getElementById('studentTable');
		let request = new XMLHttpRequest();
	  	request.open('GET', 'cit5students.json');     // open the request
	  	request.onload = () => {
	      	let data = JSON.parse(request.responseText);
			students = data.filter( (student) => {
				return student.major == selectedMajor;
			});
			if (request.status == 200) {
				let templateText = document.getElementById('tableTemplate').innerHTML; //get template code
				let compiledTemplateText = Handlebars.compile(templateText); //compile template code
				let compiledHtml = compiledTemplateText({rows:students}); //apply compiled template code to html
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
