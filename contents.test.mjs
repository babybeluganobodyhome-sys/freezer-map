import test from 'node:test';
import assert from 'node:assert/strict';
import {contentsLevels, getContentsLevel, withContentsLevel} from './src/contents.mjs';

const item = {id:'burger', region:'rear', name:'Cardinal veggie burger', qty:2, unit:'packs', detail:'Top shelf', custom:'preserved'};
test('legacy items have no selected contents level', () => {
  assert.equal(getContentsLevel(item), null);
  assert.equal(getContentsLevel({...item, contentsLevel:'invalid'}), null);
});
test('each allowed amount is stored on the item', () => {
  for (const level of contentsLevels) assert.equal(getContentsLevel(withContentsLevel(item, level)), level);
});
test('changing contents preserves item identity and all other fields', () => {
  const updated = withContentsLevel(item, 'Half');
  assert.deepEqual(updated, {...item, contentsLevel:'Half'});
  assert.equal(item.contentsLevel, undefined);
});
test('contents level can be cleared', () => {
  assert.equal(getContentsLevel(withContentsLevel({...item, contentsLevel:'Half'}, null)), null);
});
test('invalid choices are rejected', () => {
  assert.throws(() => withContentsLevel(item, 'Full'), /Invalid item contents level/);
});
test('editing one item does not alter another item', () => {
  const other = {...item, id:'peas', name:'Peas', contentsLevel:'More than half'};
  const items = [item, other].map(value => value.id === item.id ? withContentsLevel(value, 'Less than half') : value);
  assert.equal(items[1], other);
  assert.equal(items[1].contentsLevel, 'More than half');
});
