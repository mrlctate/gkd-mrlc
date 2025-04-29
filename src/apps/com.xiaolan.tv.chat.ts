import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaolan.tv.chat',
  name: '真不卡',
  groups: [
    {
      key: 2,
      name: '分段广告-看视频领奖励广告',
      desc: '点击关闭-点击[放弃奖励离开]',
      fastQuery: true,
      activityIds: 'com.qq.e.ads.PortraitADActivity',
      rules: [
        {
          key: 0,
          matches:
            '@ImageView[visibleToUser=true] < FrameLayout -2 * > [text*="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/15484070',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[text="放弃奖励离开"]',
          snapshotUrls: 'https://i.gkd.li/i/15484521',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.xiaolan.tv.chat.MainActivity',
          matches:
            '@[desc$="dislike"][clickable=true] <2 FrameLayout +4 [text="立即下载"]',
          exampleUrls: 'https://e.gkd.li/ff11b8f3-16d8-4613-a113-827f6389c30e',
          snapshotUrls: 'https://i.gkd.li/i/16476931',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '[text="反馈"] + @View[childCount=1] > Image[childCount=0][text=""]',
          exampleUrls: 'https://e.gkd.li/bbb19188-567d-4e5c-8ffd-f9576b5e1188',
          snapshotUrls: 'https://i.gkd.li/i/16476933',
        },
      ],
    },
  ],
});
