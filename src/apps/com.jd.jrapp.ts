import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jd.jrapp',
  name: '京东金融',
  groups: [
    {
      key: 3,
      name: '评价提示-满意度打分弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.dy.api.JRDynamicPickerActivity',
          matches: '@ImageView[clickable=true] - [text$="满意度打几分？"]',
          snapshotUrls: 'https://i.gkd.li/i/13804561',
        },
      ],
    },
  ],
});
