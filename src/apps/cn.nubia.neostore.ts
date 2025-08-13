import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.nubia.neostore',
  name: '应用中心',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '点击跳过',
      fastQuery: true,
      rules: [
        {
          key: 0,
          position: {
            left: 'width * 0.9169',
            top: 'width * 0.0798',
          },
          matches:
            'FrameLayout[childCount=2][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/21760226',
        },
      ],
    },
  ],
});
