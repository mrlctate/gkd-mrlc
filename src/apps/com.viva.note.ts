import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.viva.note',
  name: '囧次元',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: 'com.sigmob.sdk.base.common.TransparentAdActivity',
          matches: '[id="ad_area"] [id="close_btn"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12888388',
            'https://i.gkd.li/i/12888419',
            'https://i.gkd.li/i/12888578',
            'https://i.gkd.li/i/12888647',
          ],
        },
        {
          key: 1,
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches:
            'TextView[text="反馈"] + @ImageView[clickable=true] + TextView',
          snapshotUrls: 'https://i.gkd.li/i/12888945',
        },
        {
          key: 2,
          fastQuery: true,
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="第三方应用" || text="进入小程序" || text="领取优惠" || text="跳转微信" || text="下载应用" || text="打开快应用"]',
          snapshotUrls: 'https://i.gkd.li/i/13213661',
        },
      ],
    },
  ],
});
