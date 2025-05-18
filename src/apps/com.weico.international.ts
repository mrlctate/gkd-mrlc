import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.weico.international',
  name: '微博轻享版',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      fastQuery: true,
      actionMaximum: 1,
      matchTime: 5000,
      resetMatch: 'app',
      actionDelay: 300,
      rules: [
        {
          key: 0,
          action: 'clickNode',
          matches:
            '@ImageView[clickable=true] + ViewGroup > [text="跳过"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14549281',
            'https://i.gkd.li/i/14549328', // 小窗模式下全局规则触发无效
          ],
        },
        {
          key: 1,
          action: 'clickNode',
          matches: '[text*="跳过" && text.length<10 && visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14661654',
            'https://i.gkd.li/i/14661622',
          ],
        },
        {
          key: 2,
          position: {
            left: 'width * 0.8935',
            top: 'width * 0.0870',
          },
          matches:
            '[id="android:id/content"] >n [text^="跳过"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/19434425',
        },
      ],
    },
    {
      key: 0,
      name: '分段广告-信息流广告',
      desc: '出现在主页,搜索页',
      fastQuery: true,
      activityIds: [
        '.activity.MainFragmentActivity',
        '.ui.search.SearchActivity',
        '.ui.detail.StatusDetailV3Activity',
      ],
      rules: [
        {
          key: 0,
          name: '点击卡片广告右上角[x]',
          matches: 'TextView + ImageView[desc="关闭广告"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12857202',
            'https://i.gkd.li/i/14444744',
            'https://i.gkd.li/i/16667201',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '点击不感兴趣',
          matches:
            '[text="不感兴趣"] < @View[clickable=true] <<n [vid="design_bottom_sheet"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16667202',
            'https://i.gkd.li/i/19226502',
          ],
        },
      ],
    },
  ],
});
