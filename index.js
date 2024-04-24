const baseurl = "https://carrestapi20240417213626.azurewebsites.net/api/cars";

Vue.createApp({
    data() {
        return {
            cars:[],
            car : null,


        }
    },
    methods: {
        async helperGetAndShow(baseurl) {
            try {
                const response = await axios.get(baseurl);
                this.cars = response.data;
            } catch (ex) {
                alert(ex.message);
            }
        },
        async getAllCars() {
            await this.helperGetAndShow(baseurl);
        }


    },
}).mount('#app')