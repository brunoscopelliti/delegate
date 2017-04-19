
import delegate from 'index';
import sinon from 'sinon';

QUnit.module('delegate', {

  beforeEach() {

    const root = document.createElement('div');
    root.id = 'testRootContainer';
    root.innerHTML = `
      <div id='box'>
        <p>Foobar bang <a href='#ref' id='ref-link'>boom</a>!</p>
        <ul id='list'>
          <li>
            <a class='entry-link' href='#ref1' id='link-1'>link one</a>
          </li>
          <li>
            <a class='entry-link' href='#ref2' id='link-2'>link one</a>
          </li>
          <li>
            <div id='final'>
              <p>Strunken bangi goo!</p>
              <button id='btn'>Click me!</button>
            </div>
          </li>
        </ul>
      </div>
    `;

    document.body.appendChild(root);
  },

  afterEach() {
    const root = document.getElementById('testRootContainer');
    root.parentNode.removeChild(root);
  }

});

const $ = (elementId) => document.getElementById(elementId);

QUnit.test('delegate', function(assert) {
  const spy = sinon.spy();

  document.body.addEventListener('click', delegate(spy, '.entry-link'));

  $('ref-link').click();
  sinon.assert.notCalled(spy);

  $('btn').click();
  sinon.assert.notCalled(spy);

  const matchingLink = $('link-2');
  matchingLink.click();
  sinon.assert.calledOnce(spy);
  sinon.assert.calledOn(spy, matchingLink);
  assert.ok(spy.getCall(0).args[0] instanceof Event);
});