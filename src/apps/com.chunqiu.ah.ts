import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chunqiu.ah',
  name: 'AH视频',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.androlua.LuaActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13264383',
            'https://i.gkd.li/i/13852448',
          ],
        },
        {
          key: 1,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '[text="反馈"] -4 @View[visibleToUser=true] > Image[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/15258557',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.androlua.LuaActivity',
          matches: '[text="我已知晓"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13852430',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-卡片广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.androlua.LuaActivity',
          matches:
            '@FrameLayout[childCount=1] <3 FrameLayout[childCount=3] +2 * >2 [text="了解更多"]',
          snapshotUrls: 'https://i.gkd.li/i/13635499',
        },
        {
          key: 1,
          activityIds: 'com.androlua.LuaActivity',
          matches:
            '@TextView[visibleToUser=true][childCount=0] - View >4 [text="立即下载"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13852535',
            'https://i.gkd.li/i/15258570',
            'https://i.gkd.li/i/15258575',
          ],
        },
        {
          key: 2,
          activityIds: 'com.androlua.LuaActivity',
          matches:
            'WebView >3 View[childCount=6] > @View[visibleToUser=true] > Image[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/15258500',
        },
        {
          key: 3,
          activityIds: 'com.androlua.LuaActivity',
          matches:
            '[id="android:id/content"] FrameLayout[childCount<=5] > FrameLayout[childCount=1] > ImageView[visibleToUser=true][index=0]',
          snapshotUrls: [
            'https://i.gkd.li/i/13852695',
            'https://i.gkd.li/i/13852670',
            'https://i.gkd.li/i/13852669',
          ],
        },
      ],
    },
  ],
});
