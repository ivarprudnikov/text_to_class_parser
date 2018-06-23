const assert = require('assert');
const Customer = require('../Customer');

describe('Customer class', function () {
    describe('#constructor', function () {
        it('should set properties', function () {
            let C = new Customer({latitude: "0.54", longitude: "-1.44", name: "foo", user_id: "bar"})
            assert.equal(C.name, "foo");
            assert.equal(C.user_id, "bar");
            assert.equal(C.latitude, 0.54);
            assert.equal(C.longitude, -1.44);
        });
    });

    describe('#parseStringToNumber', function () {
        it('should parse number', function () {
            assert.equal(Customer.parseStringToNumber("0"), 0);
            assert.equal(Customer.parseStringToNumber("0.1"), 0.1);
            assert.equal(Customer.parseStringToNumber("-3"), -3);
            assert.equal(Customer.parseStringToNumber(55), 55);
            assert.equal(Customer.parseStringToNumber(""), null);
        });
    });

    describe('#distanceFrom', function () {
        it('should calculate great-circle distance', function () {
            let C = new Customer({latitude: "1", longitude: "-1"});
            assert.equal(C.distanceFrom(2, -2), 157.2256541427485);
        });
    });
});
