import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.am7code.tools',
  name: '七点工具箱',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      activityIds:
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      rules: [
        {
          key: 1,
          matches: 'TextView[text="反馈"] + View > Image[visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18807551',
        },
        {
          key: 2,
          matches:
            'TextView[text="反馈"] < FrameLayout + LinearLayout > LinearLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/18807592',
        },
        {
          key: 3,
          action: 'clickCenter',
          matches: 'View[childCount=7] > View[index=0] > Image',
          snapshotUrls: 'https://i.gkd.li/i/18809427',
        },
        {
          key: 4,
          matches: '[text*="跳过"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/18807611',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      fastQuery: true,
      activityIds: [
        'tools.random_joke.RandomJokeActivity',
        'tools.alipay_effect.AlipayEffectActivity',
        'tools.random_earthy_love_story.RandomEarthyLoveStoryActivity',
      ],
      rules: [
        {
          key: 1,
          matches: '[desc="close"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/18809386',
            'https://i.gkd.li/i/18813669',
          ],
        },
        {
          preKeys: 1,
          key: 2,
          matches: '@LinearLayout[clickable=true] > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/18809388',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-弹窗提示',
      desc: '点击拒绝',
      fastQuery: true,
      rules: [
        {
          key: 1,
          activityIds: 'cn.am7code.toolbox.MainActivity',
          matches: '[text="残忍拒绝"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/18813658',
        },
      ],
    },
  ],
});
