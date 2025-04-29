import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zuoyebang.knowledge',
  name: '作业帮家长版',
  groups: [
    {
      key: 3,
      name: '评价提示-赏好评弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.baidu.homework.activity.init.InitActivity',
          matches: 'TextView[id="com.zuoyebang.knowledge:id/btn_cancle"]',
          snapshotUrls: 'https://i.gkd.li/i/13043228',
        },
      ],
    },
  ],
});
