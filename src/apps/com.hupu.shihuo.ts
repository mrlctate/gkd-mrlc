import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hupu.shihuo',
  name: '识货',
  groups: [
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          activityIds:
            'com.shizhuang.duapp.modules.rn.mini.MiniReactActivity$MiniUITranslucentReactActivity',
          matches:
            '[id="com.hupu.shihuo:id/fragment_container"] >11 @ViewGroup[clickable=true] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13115664',
        },
      ],
    },
  ],
});
