import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ksf.yyx',
  name: 'OMOFUN',
  groups: [
    {
      key: 2,
      name: '全屏广告-插屏广告',
      desc: '点击关闭',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '[id="com.ksf.yyx:id/ksad_container"] [text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/12775922',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            'ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/12775923',
        },
        {
          key: 3,
          activityIds: 'com.sigmob.sdk.base.common.TransparentAdActivity',
          matches: '[id="ad_area"] [id="close_btn"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12775925',
            'https://i.gkd.li/i/12775924',
          ],
        },
        {
          key: 4,
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12775921',
            'https://i.gkd.li/i/12776903',
          ],
        },
      ],
    },
  ],
});
