import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.speedtest.lite',
  name: '网速管家极速版',
  groups: [
    {
      key: 10,
      name: '全屏广告-新人专享优惠弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'cn.speedtest.lite.main.MainActivity',
          matches:
            '@[id="cn.speedtest.lite:id/iv_close"] - RelativeLayout >n [id="cn.speedtest.lite:id/ad_banner"]',
          snapshotUrls: 'https://i.gkd.li/i/12715511',
        },
      ],
    },
  ],
});
