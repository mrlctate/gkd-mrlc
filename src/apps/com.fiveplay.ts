import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fiveplay',
  name: '5EPlay',
  groups: [
    {
      key: 2,
      name: '局部广告-首页右下角浮窗',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.sihp_homepage.module.main.Main2Activity',
          matches: '[id="com.fiveplay:id/iv_ad_float_close"]',
          snapshotUrls: 'https://i.gkd.li/i/16825082',
        },
      ],
    },
  ],
});
