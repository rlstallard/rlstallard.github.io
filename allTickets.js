 let app = Vue.createApp({
      data() {
          return {
              tickets: []	// holds all ticket data in array
          }
      },
      created() {
          this.getData();
      },
      methods: {
          async getData() {
              const response = await fetch('tickets1.json');
              this.tickets = await response.json();
          },
      }
    });

	app.mount('#allTicketsApp');
