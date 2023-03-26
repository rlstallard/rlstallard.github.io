function getData(selected_meal) {
		var request = new XMLHttpRequest();
    	request.open('GET', 'menu_items.json');     // open the request

    	request.onload = function() {

        	var data = JSON.parse(request.responseText);
			meal_items = data.filter(getMeal)   // filter data for selected meal
		
			function getMeal(item) {
            	return item.meal == selected_meal;
        	}

        	if (request.status == 200) {
              	var templateText = document.getElementById('tableTemplate').innerHTML;
             	var compiledTemplateText = Handlebars.compile(templateText);   // get and compile template code
              	
              	compiledHtml = compiledTemplateText({ rows: meal_items })      // apply data to template
              	document.getElementById('menuTable').innerHTML = compiledHtml; 	
       	 	}
        	else {
            	document.querySelector('#menuTable').innerHTML = "There was an error, or menu items not found";
        	}
		}

    request.send(null);
  }
