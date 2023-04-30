 let app = Vue.createApp({
      data() {
          return {
              tickets: [],	//holds all tickets
			  over25Tickets: [],	//holds over 25 mph tickets
			  
          }
      },
      created() {
          this.getData();
      },
      methods: {    // ajax request
          async getData() {
              const response = await fetch('tickets1.json');
              this.tickets = await response.json();
			  this.over25tickets = data.tickets.filter( (ticket) => (ticket.mph_over - ticket.posted_speed) >= 25 );
          },
      }
    });

	app.mount('#over25TicketsApp');