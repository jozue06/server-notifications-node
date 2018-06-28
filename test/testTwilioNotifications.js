import { expect } from 'chai';
import supertest from 'supertest';
import { enable, registerMock, deregisterAll, disable } from 'mockery';
import { stub } from 'sinon';

import app from '../webapp';
import config from '../config';

describe('Twilio notifications on error', function() {
  var agent = supertest(app);
  var msgCreateStub;

  before(() => {
    // mockery.deregisterAll();
    enable({
      useCleanCache: true,
      warnOnReplace: false,
      warnOnUnregistered: false,
    });

    msgCreateStub = stub().returns(Promise.resolve({}));

    function TwilioMock() {
      return {
        api: {
          messages: {
            create: msgCreateStub,
          },
        },
      };
    }

    registerMock('twilio', TwilioMock);
  });

  after(function () {
    deregisterAll();
    disable();
  });

  describe('GET /error', function() {
    it('should return an error', function() {
      return agent
        .get('/error')
        .expect(function(res) {
          expect(res.status).to.equal(500);
          expect(msgCreateStub.calledTwice).to.be.true;
        });
    });
  });
});
