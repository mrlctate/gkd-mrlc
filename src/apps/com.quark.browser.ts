import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.quark.browser',
  name: '夸克浏览器',
  groups: [
    {
      key: 2,
      name: '其他-设置默认浏览器提示',
      desc: '点击取消',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.ucpro.BrowserActivity',
          matches: '@Button[text="取消"] + Button[text="去设置"]',
          snapshotUrls: 'https://i.gkd.li/i/13249469',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          fastQuery: true,
          actionMaximum: 1,
          activityIds: 'com.ucpro.BrowserActivity',
          matches:
            'ImageView[id="com.quark.browser:id/close_img"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13292571',
        },
      ],
    },
  ],
});
