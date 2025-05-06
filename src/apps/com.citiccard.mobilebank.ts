import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.citiccard.mobilebank',
  name: '动卡空间',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      rules: [
        {
          activityIds:
            'com.citiccard.mobilebank.card.activity.BillDetailHomeActivity',
          matches: '[id="com.citiccard.mobilebank:id/iv_bill_home_cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/13049284',
        },
      ],
    },
  ],
});
