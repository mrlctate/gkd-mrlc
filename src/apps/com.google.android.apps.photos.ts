import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.google.android.apps.photos',
  name: '谷歌相册',
  groups: [
    {
      key: 1,
      name: '全屏广告-优惠提示',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.google.android.apps.photos.cloudstorage.paidfeatures.PaidFeaturesActivity',
          matches:
            '@[desc="转到上一层级"] < ViewGroup[id="com.google.android.apps.photos:id/toolbar"]',
          snapshotUrls: 'https://i.gkd.li/i/13774247',
        },
      ],
    },
  ],
});
