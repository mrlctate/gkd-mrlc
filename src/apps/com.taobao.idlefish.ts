import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.idlefish',
  name: '闲鱼',
  groups: [
    {
      key: 1,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[desc^="开启系统通知"] > ImageView[clickable=true][desc=null]',
      snapshotUrls: 'https://i.gkd.li/i/13538351',
    },
    {
      key: 4,
      name: '全屏广告-红包弹窗',
      desc: '点击关闭',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds:
            'com.taobao.idlefish.maincontainer.activity.MainActivity',
          matches:
            'WebView[text="Rax App"] > [id="root"] >6 View[index=2][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14551046',
        },
      ],
    },
    {
      key: 5,
      name: '分段广告-搜索页面广告',
      fastQuery: true,
      activityIds: [
        '.search_implement.SearchResultActivity',
        'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 700,
          action: 'longClick',
          matches:
            '@FrameLayout[clickable=true] >(1,3) [text="广告" || desc$="广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/19661658',
            'https://i.gkd.li/i/19661662',
          ],
        },
        {
          key: 1,
          matches: '[desc="引起不适"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14723632',
        },
      ],
    },
    {
      key: 6,
      name: '功能类-自动点击[查看原图]',
      rules: [
        {
          activityIds:
            'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
          matches: '[desc="查看原图"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/12b60303-4fb8-4786-b636-4efef10f3d78',
          snapshotUrls: 'https://i.gkd.li/i/15463399',
        },
      ],
    },
    {
      key: 12,
      name: '功能类-自动选中发送原图',
      actionMaximum: 1,
      rules: [
        {
          activityIds:
            'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
          matches: 'View[childCount=2] > @View[clickable=true] + [desc="原图"]',
          snapshotUrls: 'https://i.gkd.li/i/18824808',
        },
      ],
    },
    {
      key: 7,
      name: '功能类-闲鱼币',
      activityIds: '.webview.WebHybridActivity',
      rules: [
        {
          key: 1,
          actionDelay: 2000,
          name: '点击[赚骰子]-有领取奖励',
          matches: '[text="领"] < View',
          snapshotUrls: 'https://i.gkd.li/i/17634886',
        },
        {
          key: 2,
          name: '签到',
          actionMaximum: 1,
          matches: '[text="签到"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/17606057',
        },
        {
          key: 3,
          name: '领取奖励',
          actionDelay: 1600,
          matches: '[text="领取奖励"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/17606051',
            'https://i.gkd.li/i/17606057',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '功能类-背包使用道具',
      activityIds: '.webview.WebHybridActivity',
      rules: [
        {
          key: 1,
          actionDelay: 3500,
          name: '点击[背包]',
          matches: [
            'View[childCount=5] > View[index=1] > [index=parent.childCount.minus(1)][text!="领"]',
            'View[childCount=5] > View[index=4] > View[text="赚"]',
            'View[childCount=5] > View[index=3] > Image',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/17606060',
            'https://i.gkd.li/i/17606487',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          actionDelay: 300,
          name: '使用[道具]',
          matches:
            'View[clickable=true] >4 View[index=1][text!="加点卡"] + [text="使用"]',
          snapshotUrls: 'https://i.gkd.li/i/17606047',
        },
      ],
    },
    {
      key: 9,
      fastQuery: true,
      name: '功能类-扱骰子寻宝',
      activityIds: '.webview.WebHybridActivity',
      rules: [
        {
          key: 1,
          name: '关闭-弹窗',
          matches:
            'View[childCount=3][clickable=true] > Image + View + Image[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/17606064',
        },
        {
          key: 2,
          actionDelay: 6000,
          name: '扱骰子',
          matches: '@View[id="mapDiceBtn"] > TextView[text!="赚"]',
          snapshotUrls: 'https://i.gkd.li/i/17606060',
        },
        {
          key: 3,
          name: '全部收下',
          matches: 'View[text^="全部收下"]',
          snapshotUrls: 'https://i.gkd.li/i/17606050',
        },
        {
          key: 4,
          name: '继续寻宝',
          matches: 'View[text="继续寻宝"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/17695522',
        },
      ],
    },
  ],
});
