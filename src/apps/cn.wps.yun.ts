import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.wps.yun',
  name: '金山文档',
  groups: [
    {
      key: 1,
      name: '局部广告-列表卡片广告',
      desc: '点击右侧x',
      rules: [
        {
          fastQuery: true,
          activityIds: 'cn.wps.yun.ui.IndexActivity',
          matches:
            '[id="cn.wps.yun:id/rootGroup"][childCount=5] >  [text^="实用技巧"] +3 [id="cn.wps.yun:id/moreIconRight"]',
          exampleUrls:
            'https://m.gkd.li/47232102/bc97cb52-aad0-4114-a548-5831edbe342d',
          snapshotUrls: 'https://i.gkd.li/i/13495062',
          excludeSnapshotUrls: 'https://i.gkd.li/i/14333322', // 限定 [text^="实用技巧"] 防止误触C
        },
      ],
    },
  ],
});
