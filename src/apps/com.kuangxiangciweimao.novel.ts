import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kuangxiangciweimao.novel',
  name: '刺猬猫阅读',
  groups: [
    {
      key: 2,
      name: '功能类-自动签到',
      desc: '点击[签到]',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.frame.MainFrameActivity',
          matches: 'Button[text="签到"]',
          snapshotUrls: 'https://i.gkd.li/i/16897712',
        },
      ],
    },
  ],
});
