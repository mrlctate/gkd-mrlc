import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.contacts',
  name: '通讯录与拨号',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds:
            'com.mobile.businesshall.ui.common.RecommendPopupActivity',
          matches: '[vid="img_close_btn"][clickable=true][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/a3ad68fc-4a2e-45e2-87d3-97ece1fceaa4',
          snapshotUrls: 'https://i.gkd.li/i/14321032',
        },
      ],
    },
  ],
});
