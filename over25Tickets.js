 let app = Vue.createApp({
      data() {
          return {
          	tickets: [],	//holds all tickets
	  	over25Tickets: []	//holds over 25 mph tickets
			  
          }
      },
      created() {
          this.getData();
      },
      methods: {    // ajax request
          async getData() {
              const response = await fetch('tickets1.json');
              this.tickets = await response.json();
			  console.log(this.tickets[0]);
			  this.over25tickets = this.tickets.filter( (ticket) => (ticket.actual_speed - ticket.posted_speed) >= 25 );
			  console.log(this.over25Tickets[0]);
          },
      }
    });

	app.mount('#over25TicketsApp');
