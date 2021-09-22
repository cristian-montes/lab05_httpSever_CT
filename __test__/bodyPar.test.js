import bodyParser from '../lib/bodyPar.js';


describe(' testing the bodyparsin', () => {

  it('it should  return null if method is not the PPP', () => {
    const req = {
      method: 'GET',
    };
    const theParser = bodyParser(req);
    expect(null).toEqual(theParser);
  });

  //   it.skip('It should throw and error if content type is not application/json', () => {
  //     const req = {
  //       method:'POST',
  //       'Content-Type': 'plain/text'
  //     };

  //     const arser = bodyParser(req);
  //     expect('incorrent type').toEqual(arser);
  //   });

});
