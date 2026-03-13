import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zte.beautify',
  name: 'nubia主题',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '点击跳过',
      fastQuery: true,
      rules: [
        {
          key: 0,
          matches:
            '[vid="roundProgressBar"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/21759709',
        },
      ],
    },
  ],
});
