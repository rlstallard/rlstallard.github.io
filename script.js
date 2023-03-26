document.addEventListener('DOMContentLoaded', () => {
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
	
});