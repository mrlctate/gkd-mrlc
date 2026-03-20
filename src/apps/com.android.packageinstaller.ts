import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.packageinstaller',
  name: '软件包安装程序',
  groups: [
    {
      key: 0,
      name: '功能类-勾选[已了解该应用存在的风险]',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: '.PackageInstallerActivity',
          matches: '[vid$="checkbox" && clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14595443',
            'https://i.gkd.li/i/26134797',
            'https://i.gkd.li/i/26134808',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '功能类-自动安装应用',
      fastQuery: true,
      activityIds: [
        '.PackageInstallerActivity',
        '.FlymePackageInstallerActivity',
        '.PackageInterceptActivity',
        '.NewInstallInstalling',
        '.InstallSuccess',
        '.oplus.InstallAppProgress',
        '.DeleteStagedFileOnResult',
      ],
      rules: [
        {
          key: 0,
          name: '点击[继续安装]',
          matches: [
            '[text="继续安装" || text="完成"][focusable=true || parent.focusable=true || parent.parent.focusable=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13206444',
            'https://i.gkd.li/i/14046749',
            'https://i.gkd.li/i/16550275',
            'https://i.gkd.li/i/19697192',
            'https://i.gkd.li/i/19665327',
          ],
        },
        {
          key: 1,
          name: '点击[安装]',
          matches: [
            '[text^="已了解该应用"][checked=true]',
            '[text="安装"][focusable=true || parent.focusable=true || parent.parent.focusable=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/26134797',
            'https://i.gkd.li/i/26134808',
          ],
        },
      ],
    },
  ],
});
