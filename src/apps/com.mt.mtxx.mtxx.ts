import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mt.mtxx.mtxx',
  name: '美图秀秀',
  groups: [
    {
      key: 2,
      name: '全屏广告-VIP弹窗',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.mt.mtxx.mtxx.MainActivity',
          matches: '[vid="iv_close"][clickable=true][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/d98355c6-1308-4ed1-bf29-56499e22446d',
          snapshotUrls: 'https://i.gkd.li/i/14368853',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.cosmos.album.album3.XXAlbumMainActivity',
          matches: '@ImageView[clickable=true] - * > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/15076408',
        },
      ],
    },
  ],
});
