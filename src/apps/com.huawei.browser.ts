import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.browser',
  name: '华为浏览器',
  groups: [
    {
      key: 2,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.huawei.browser.customtab.EmuiBrowserCustomTabActivity',
          matches:
            'View[id="root"] > View[index=1] > @View[visibleToUser=true][id="logo-close-btn"] <<n [vid="web_view_container"]',
          snapshotUrls: 'https://i.gkd.li/i/13997759',
        },
      ],
    },
  ],
});
