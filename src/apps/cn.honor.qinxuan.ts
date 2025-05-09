import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.honor.qinxuan',
  name: '荣耀亲选',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'cn.honor.qinxuan.MainActivity',
          matches: '[id="cn.honor.qinxuan:id/iv_close_dlg"]',
          snapshotUrls: 'https://i.gkd.li/i/13930613',
        },
      ],
    },
  ],
});
