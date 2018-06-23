const CustomerList = require("./CustomerList");

const fileCustomers = "customers.txt";
const ORIGIN = {lat: 53.339428, lon: -6.257664};
const DISTANCE_MAX = 100;

let result = CustomerList.fromFile(fileCustomers)
    .within(ORIGIN.lat, ORIGIN.lon, DISTANCE_MAX)
    .sortedAscendingBy("user_id")
    .select("user_id", "name");

console.log(result);
