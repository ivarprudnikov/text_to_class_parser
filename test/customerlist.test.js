const assert = require('assert');
const CustomerList = require('../CustomerList');
const path = require("path");

describe('Customer class', function () {
    describe('#constructor', function () {
        it('should set list', function () {
            assert.equal(new CustomerList([1,2,3]).list.length, 3);
            assert.equal(new CustomerList([]).list.length, 0);
            assert.equal(new CustomerList().list.length, 0);
        });
    });

    describe('#fromFile', function () {
        it('should read contents of file', function () {
            let C = CustomerList.fromFile(path.join(__dirname, 'test_list_customers.txt'));
            assert.equal(C.list.length, 2);
            assert.equal(C.list[0].user_id, 1);
        });
    });

    describe('#sortedAscendingBy', function () {
        it('should sort by id', function () {
            let C = CustomerList.fromFile(path.join(__dirname, 'test_list_customers.txt'));
            C.sortedAscendingBy('user_id')
            assert.equal(C.list[0].user_id, 1);
            assert.equal(C.list[1].user_id, 2);
        });
        it('should sort by name', function () {
            let C = CustomerList.fromFile(path.join(__dirname, 'test_list_customers.txt'));
            C.sortedAscendingBy('name')
            assert.equal(C.list[0].name, "Baz");
            assert.equal(C.list[1].name, "Foo Bar");
        });
    });

    describe('#within', function () {
        it('should find nobody', function () {
            let C = CustomerList.fromFile(path.join(__dirname, 'test_list_customers.txt'));
            assert.equal(C.within(0, 0, 100).size, 0);
        });
        it('should find one', function () {
            let C = CustomerList.fromFile(path.join(__dirname, 'test_list_customers.txt'));
            assert.equal(C.within(0, 0, 300).size, 1);
        });
        it('should find two', function () {
            let C = CustomerList.fromFile(path.join(__dirname, 'test_list_customers.txt'));
            assert.equal(C.within(0, 0, 500).size, 2);
        });
    });

    describe('#select', function () {
        it('should extract names', function () {
            let C = CustomerList.fromFile(path.join(__dirname, 'test_list_customers.txt'));
            C.sortedAscendingBy('name');
            let names = C.select('name');
            assert.deepEqual(names[0], {name: "Baz"});
            assert.deepEqual(names[1], {name: "Foo Bar"});
        });
    });

});
