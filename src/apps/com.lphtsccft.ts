import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lphtsccft',
  name: '涨乐财富通',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            'com.lphtsccft.zhangle.startup.SplashScreenActivity',
            'com.lphtsccft.zhangle.main.MainActivity',
          ],
          matches: '[id="com.lphtsccft:id/tv_never"][text="不再提醒"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12646899',
            'https://i.gkd.li/i/12646925',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-右侧悬浮广告',
      rules: [
        {
          activityIds: 'com.lphtsccft.zhangle.main.MainActivity',
          matches: '[id="com.lphtsccft:id/home_float_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12892821',
        },
      ],
    },
  ],
});
