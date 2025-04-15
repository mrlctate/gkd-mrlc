import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.veding.vesendv2',
  name: '微送宝',
  groups: [
    {
      key: 1,
      name: '功能类-切换页面',
      desc: '用来刷新数据',
      fastQuery: true,
      resetMatch: 'app',
      activityIds: 'com.lt.app.MainActivity',
      rules: [
        {
          key: 1,
          actionDelay: 3000,
          action: 'clickCenter',
          matches:
            '@View <3 View < View < View < WebView < WebView < [vid="swipe_layout"]',
          snapshotUrls: 'https://i.gkd.li/i/19226771',
        },
        {
          preKeys: [1],
          key: 2,
          actionDelay: 300,
          action: 'clickCenter',
          matches:
            '@View <2 View < View < View < WebView < WebView < [vid="swipe_layout"]',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-接单',
      desc: '立即抢单',
      fastQuery: true,
      resetMatch: 'app',
      activityIds: 'com.lt.app.MainActivity',
      rules: [
        {
          key: 1,
          matches:
            '@TextView <2 View <3 View < View <4 View < View <5 View < View < View < WebView < WebView < [vid="swipe_layout"]',
        },
        {
          key: 2,
          matches:
            '@View < View <2 View <2 View <3 View < WebView < WebView < [vid="swipe_layout"]',
          snapshotUrls: 'https://i.gkd.li/i/19226771',
        },
      ],
    },
  ],
});
