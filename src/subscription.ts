import { defineGkdSubscription } from '@gkd-kit/define';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  // id: 2,
  id: 9,
  // name: 'Mrlc的订阅-不得转发和传播',
  name: 'Mrlc的订阅-Beta',
  version: 0,
  author: 'Mrlc',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/mrlctate/gkd-mrlc/issues/new/choose',
  categories,
  globalGroups,
});
