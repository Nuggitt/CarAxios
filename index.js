const baseurl = "https://carrestapi20240417213626.azurewebsites.net/api/cars";

Vue.createApp({
    data() {
        return {
            cars: [],
            singleCar: null,
            addCarData: { id: 0, brand: "", model: "", horsePower: 0 },
            addMessage: "",

        }
    },
    methods: {
        async getAllCars() {
            await this.helperGetAndShow(baseurl);
        },

        async helperGetAndShow(url) {
            try {
                const response = await axios.get(url);
                this.cars = response.data;
            } catch (ex) {
                alert(ex.message);
            }
        },
        
        async addCar() {
            try {
              response = await axios.post(baseurl, this.addCarData);
              this.addMessage = "response " + response.status + " " + response.statusText;
              this.getAllCars();
            } catch (ex) {
              alert(ex.message);
            }
          },
    }
}).mount('#app');
