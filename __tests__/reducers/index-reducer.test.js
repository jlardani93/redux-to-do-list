import rootReducer from './../../src/reducers/index';

describe("rootReducer", () => {

  test('Shouild return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({}); 
  })
})
