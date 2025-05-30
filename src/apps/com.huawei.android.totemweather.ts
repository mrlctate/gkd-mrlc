import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.android.totemweather',
  name: '华为天气',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      fastQuery: true,
      rules: [
        {
          key: 2,
          activityIds: [
            'com.huawei.android.totemweather.WeatherMainActivity',
            'com.huawei.android.totemweather.WeatherHome',
          ],
          matches:
            '[id="com.huawei.android.totemweather:id/ad_cancel"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13521221',
            'https://i.gkd.li/i/13787501',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-卡片广告',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: 'com.huawei.android.totemweather.WeatherMainActivity',
          matches: '[vid="rl_close_pps"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13800100',
            'https://i.gkd.li/i/14278462', // 使用visibleToUser=true防止在此页面误触
            'https://i.gkd.li/i/15831584',
          ],
        },
        {
          key: 1,
          activityIds:
            'com.huawei.android.totemweather.composite.MarketCompositeActivity',
          matches:
            '[id="com.huawei.android.totemweather:id/promote_ad_cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/13218197',
        },
        {
          preKeys: [0, 1],
          key: 99,
          activityIds: 'com.huawei.openalliance.ad.activity.FeedbackActivity',
          matches: '[text="直接关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13259434',
            'https://i.gkd.li/i/15831539',
          ],
        },
      ],
    },
  ],
});
