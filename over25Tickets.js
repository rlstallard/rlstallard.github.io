 let app = Vue.createApp({
      data() {
          return {
              tickets: []	//holds 25 mph and over tickets
          }
      },
      created() {
          this.getData();
      },
      methods: {    // ajax request
          async getData() {
              const response = await fetch('tickets1.json');
              const allTickets = await response.json();
			  this.tickets = allTickets.filter( (ticket) => ((ticket.actual_speed - ticket.posted_speed) >= 25) );
			  console.log(this.tickets[0]);
          },
      }
    });

	app.mount('#over25TicketsApp');
