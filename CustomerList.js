const fs = require("fs");
const Customer = require("./Customer");
const ENCODING = "utf8";
const SEPARATOR = "\n";

class CustomerList {
    constructor(customers) {
        if (customers != null && Array.isArray(customers))
            this.list = customers;
        else
            this.list = [];
    }

    static fromFile(pathToFile) {
        let fileContents = fs.readFileSync(pathToFile, {encoding: ENCODING});
        let customersRaw = fileContents.split(SEPARATOR);
        let customersJson = customersRaw.map(jsonString => JSON.parse(jsonString));
        let customerList = customersJson.map(customerJson => new Customer(customerJson));
        return new CustomerList(customerList);
    }

    get size(){
        return this.list.length;
    }

    sortedAscendingBy(prop){
        this.list.sort((a, b) => {
            let valA = a[prop];
            let valB = b[prop];
            if(!isNaN(valA) && !isNaN(valB))
                return valA - valB;

            if (valA < valB) return -1;
            if (valB < valA) return 1;
            return 0
        });

        return this;
    }

    within(lat, lon, distanceKm) {
        let results = this.list.filter(customer => {
            let distanceFromOrigin = customer.distanceFrom(lat, lon);
            return distanceFromOrigin < distanceKm && distanceFromOrigin > 0;
        })
        return new CustomerList(results);
    }

    select() {
        let args = [...arguments];
        return this.list.map(customer => {
            let subsetOfProps = {};
            args.forEach(arg => {
                subsetOfProps[arg] = customer[arg];
            })
            return subsetOfProps;
        })
    }
}

module.exports = CustomerList;