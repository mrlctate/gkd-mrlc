import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jd.app.reader',
  name: '京东读书',
  groups: [
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.jingdong.app.reader.main.ui.JdMainActivity',
          matches: '[vid="mCloseBtn"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/ac85ef54-5180-4740-b12d-608b37ad5502',
          snapshotUrls: 'https://i.gkd.li/i/16486458',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-阅读页面弹窗广告',
      rules: [
        {
          activityIds: 'com.jd.read.engine.activity.EngineReaderActivity',
          matches: '[id$="ad_read_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12881810',
            'https://i.gkd.li/i/12893631',
          ],
        },
      ],
    },
  ],
});
