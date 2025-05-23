import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miaoying.appmy.cs',
  name: '新小财神影视',
  groups: [
    {
      key: 0,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionDelay: 750,
      activityIds: 'com.miaoying.appmy.cs.MainActivity',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12565637',
            'https://i.gkd.li/i/12522881',
            'https://i.gkd.li/i/12565480',
            'https://i.gkd.li/i/12565507',
            'https://i.gkd.li/i/12565510',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text="查看详情" || text="了解更多" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: 'https://i.gkd.li/i/12565475',
        },
        {
          key: 2,
          matches:
            'TextView[text=null] - FrameLayout > ImageView + FrameLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/12565522',
        },
        {
          key: 3,
          name: '全屏广告-弹窗广告2',
          activityIds: 'com.sigmob.sdk.base.common.TransparentAdActivity',
          matches: '[id="close_btn"][text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/12565375',
        },
      ],
    },
  ],
});
