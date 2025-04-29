import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jianshu.haruki',
  name: '简书',
  groups: [
    {
      key: 1,
      name: '全屏广告-VIP弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.baiji.jianshu.ui.splash.SplashScreenActivity',
          matches: '[id="com.jianshu.haruki:id/dialog_lucky_prize_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13327286',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-首页信息流广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.baiji.jianshu.MainActivity',
          matches: 'ImageView[vid="nativeAdClose"]',
          snapshotUrls: 'https://i.gkd.li/i/16201541',
        },
      ],
    },
  ],
});
