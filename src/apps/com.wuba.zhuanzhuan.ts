import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wuba.zhuanzhuan',
  name: '转转',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds:
            'com.zhuanzhuan.module.reach.channel.impl.uicode.ReachDialogActivity',
          matches:
            '[id="android:id/content"] > ViewGroup[childCount=3] >2 ViewGroup[childCount>1] > ImageView[clickable=true][index=parent.childCount.minus(1)]',
          snapshotUrls: [
            'https://i.gkd.li/i/14927441',
            'https://i.gkd.li/i/15140820',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '评价提示',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.MainActivity',
          matches:
            '@ImageView[clickable=true] - ViewGroup > [text="喜欢就给个好评吧"]',
          snapshotUrls: 'https://i.gkd.li/i/15881026',
        },
      ],
    },
  ],
});
