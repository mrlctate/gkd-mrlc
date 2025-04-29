import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.spdbccc.app',
  name: '浦大喜奔',
  groups: [
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: '.sp.main.MainActivity',
      rules: [
        {
          key: 1,
          matches:
            '[vid="ckb_not_show_again"][checked=false][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/bb770917-9fbb-4910-9c9e-8bf58437bb1e',
          snapshotUrls: 'https://i.gkd.li/i/18275682',
        },
        {
          preKeys: [1],
          matches: '[vid="iv_kfc_image_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/bb770917-9fbb-4910-9c9e-8bf58437bb1e',
          snapshotUrls: 'https://i.gkd.li/i/18275682',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-悬浮广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.sp.main.MainActivity',
          matches: '[vid="ll_quolity_float_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/4cb41225-609a-4b7f-8ff4-ecca03d37c38',
          snapshotUrls: 'https://i.gkd.li/i/18275729',
        },
      ],
    },
  ],
});
