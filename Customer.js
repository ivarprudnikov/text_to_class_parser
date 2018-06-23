const GreatCircle = require('great-circle');

class Customer {
    constructor(props) {
        // "latitude": "52.986375",
        // "user_id": 12,
        // "name": "Christina McArdle",
        // "longitude": "-6.043701"
        this.latitude = Customer.parseStringToNumber(props.latitude);
        this.longitude = Customer.parseStringToNumber(props.longitude);
        this.name = props.name;
        this.user_id = props.user_id;
    }

    static parseStringToNumber(input) {
        let stringInput = input + "";
        let parsed = parseFloat(stringInput);
        if (!isNaN(parsed))
            return parsed;

        return null;
    }

    /**
     * Users Vincenty formula for an ellipsoid with equal major and minor axes
     * https://en.wikipedia.org/wiki/Vincenty%27s_formulae
     * @param lat
     * @param lon
     * @returns {Number} distance between two points in KM
     */
    distanceFrom(lat, lon) {
        if (this.latitude != null && this.longitude != null)
            return GreatCircle.distance(lat, lon, this.latitude, this.longitude);

        return -1;
    }
}

module.exports = Customer;