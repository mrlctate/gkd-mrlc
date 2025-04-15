import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mipay.wallet',
  name: '钱包',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.xiaomi.jr.app.MiFinanceActivity',
          matches:
            'FrameLayout >2 View[childCount=2] >2 View[childCount=2] > @ImageView[clickable=true][index=0][visibleToUser=true] <<n [vid="flutter_container"]',
          exampleUrls: 'https://e.gkd.li/9d8a1bb4-40ab-4312-8f5b-ef224e18720e',
          snapshotUrls: 'https://i.gkd.li/i/16828039',
        },
      ],
    },
  ],
});
