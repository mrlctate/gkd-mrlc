import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.greenpoint.android.mc10086.activity',
  name: '中国移动',
  groups: [
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
          matches:
            '[id="com.greenpoint.android.mc10086.activity:id/ad_image"] < RelativeLayout + [id="com.greenpoint.android.mc10086.activity:id/close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/12662361',
        },
      ],
    },
    {
      key: 12,
      name: '局部广告-右侧悬浮小图标',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
          matches:
            '[id="com.greenpoint.android.mc10086.activity:id/close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/12662265',
        },
        {
          key: 1,
          activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
          matches: '[vid="close_btn_bottom"]',
          exampleUrls:
            'https://m.gkd.li/57941037/276c7811-52f7-4379-8782-f9fb0b6cec1c',
          snapshotUrls: 'https://i.gkd.li/i/14570369',
        },
        {
          key: 2,
          activityIds: 'com.cmccit.webview.ac.CommonHtml5Activity',
          matches:
            '[text="余量查询"] > View > View > @Image[clickable=true][text!=null] <<n [vid="patmentwebview"]',
          exampleUrls:
            'https://m.gkd.li/57941037/69c6bf73-d901-4816-a9da-e4bcb0f4b9c6',
          snapshotUrls: 'https://i.gkd.li/i/14738550',
        },
      ],
    },
  ],
});
