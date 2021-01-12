const { test, expect } = require('@jest/globals');
const { william, charles, queen, duke, camila } = require('./royalFamily')

describe('person', () => {
    test('check name', () => {
        expect(william.name).toEqual('William');
    });
    test('check parents', () => {
        expect(charles.parents).toEqual([queen, duke])
    })
    test('check childOf', () => {
        expect(william.childOf()).toEqual('Charles & Diana')
    })
});