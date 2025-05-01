import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.unionpay',
  name: '云闪付',
  groups: [
    {
      key: 2,
      name: '分段广告-支付完成界面卡片广告',
      fastQuery: true,
      activityIds: 'com.unionpay.activity.react.UPActivityReactNative',
      rules: [
        {
          key: 0,
          matches: '[id="bannerBox"] > @View[clickable=true] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13070564',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[text="关闭广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13070974',
        },
      ],
    },
    {
      key: 9,
      name: '局部广告-右侧悬浮广告',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          position: {
            left: 'width * 0.8893',
            top: 'width * 0.4607',
          },
          activityIds: 'com.unionpay.activity.UPActivityMain',
          matches:
            '@[vid="frog_float"][visibleToUser=true] >2 [vid="close_view"]',
          exampleUrls:
            'https://m.gkd.li/57941037/0f4f6a7f-55ce-4f87-a4cb-97e9c7107359',
          snapshotUrls: 'https://i.gkd.li/i/14586427',
        },
      ],
    },
    {
      key: 13,
      name: '全屏广告-天天签到-获得新勋章提示',
      desc: '点击左上角返回',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.unionpay.cordova.UPActivityCordovaWeb',
          matches:
            'WebView[text="天天签到"] TextView[text="炫耀一下"] + TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13440341',
        },
      ],
    },
    {
      key: 15,
      name: '全屏广告-领取优惠弹窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.unionpay.cordova.UPActivityCordovaWeb',
          matches:
            '@View[clickable=true][text="关闭按钮"] <<n [vid="view_content_container"]',
          snapshotUrls: 'https://i.gkd.li/i/13848688',
        },
      ],
    },
  ],
});
