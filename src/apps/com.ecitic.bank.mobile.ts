import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ecitic.bank.mobile',
  name: '中信银行',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.ecitic.bank.mobile.ui.MainActivity',
            'com.ecitic.bank.mobile.ui.webview.CordovaWebViewActivity',
          ],
          matches: '[id="com.ecitic.bank.mobile:id/close_product_send"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12701230',
            'https://i.gkd.li/i/13402746',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '局部广告-理财产品悬浮广告',
      rules: [
        {
          activityIds: 'com.ecitic.bank.mobile.ui.MainActivity',
          matches:
            '@[clickable=true] +2 [visibleToUser=true][text="恭喜您关注到宝藏基金"] <<n [vid="cordova_view"]',
          snapshotUrls: 'https://i.gkd.li/i/14208637',
        },
      ],
    },
  ],
});
