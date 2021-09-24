var { FetchCity } = require('../app/javascript/components/Exo3/FetchCity.js');

describe("FetchCity", function () {

  it("gets a json of the objects corresponding withe the city_id you entered", () => {
      expect(FetchCity(1)).toBe('Qui est tu ?');
  });
  
});