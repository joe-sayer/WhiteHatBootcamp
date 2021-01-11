const { william, charles, queen, duke, camila } = require('./person')

describe('person', () => {
    test('check name', () => {
        expect(william.name).toEqual('William');
    });
    test('check parents', () => {
        expect(charles.parents).toEqual([queen, duke])
    })
});