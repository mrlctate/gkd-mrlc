import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alibaba.wireless',
  name: '阿里巴巴',
  groups: [
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.alibaba.wireless.launch.home.V5HomeActivity',
          matches:
            '@Image[text*="FXa-124-124"][visibleToUser=true] <<n [id="com.alibaba.wireless:id/v_yacht_float_cell"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13683509',
            'https://i.gkd.li/i/13683510',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '功能类-自动选中发送原图',
      actionMaximum: 1,
      rules: [
        {
          activityIds: '.mediabrowser.page.gallery.MediaGalleryActivity',
          matches:
            '[text="预览"] + [text="原图"][clickable=true][width!=height]',
          snapshotUrls: 'https://i.gkd.li/i/19126601',
        },
      ],
    },
  ],
});
