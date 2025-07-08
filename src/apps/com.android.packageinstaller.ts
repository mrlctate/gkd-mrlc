import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.packageinstaller',
  name: '软件包安装程序',
  groups: [
    {
      key: 1,
      name: '功能类-自动安装应用',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '点击[继续安装]',
          activityIds: [
            '.InstallStart',
            '.NewInstallInstalling',
            '.FlymePackageInstallerActivity',
            '.PackageInstallerActivity',
          ],
          excludeMatches:
            '[text^="正为您检测"][childCount=0][visibleToUser=true]',
          anyMatches: [
            '@LinearLayout[clickable=true] > [text="继续安装"][clickable=false]',
            '[text="继续安装"][clickable=true]',
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
          name: '点击[完成]',
          activityIds: [
            '.NewInstallInstalling',
            '.InstallSuccess',
            '.oplus.InstallAppProgress',
            '.FlymePackageInstallerActivity',
          ],
          anyMatches: [
            '@LinearLayout[clickable=true] > [text="完成"][clickable=false]',
            '[text="完成"][clickable=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13206476',
            'https://i.gkd.li/i/13766420',
            'https://i.gkd.li/i/14138323',
            'https://i.gkd.li/i/14471862',
            'https://i.gkd.li/i/16550273',
          ],
        },
        {
          key: 2,
          name: '点击[安装]',
          activityIds: '.DeleteStagedFileOnResult',
          matches: '[vid="confirm_bottom_button_layout"]',
          snapshotUrls: 'https://i.gkd.li/i/14228348',
        },
        {
          key: 3,
          name: '勾选[已了解此应用未经检测，可能存在风险]',
          activityIds: '.PackageInstallerActivity',
          matches: '[vid="checkbox" && clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14595443',
        },
        {
          key: 4,
          position: {
            left: 'width * 1.5394',
            top: 'height * 0.5',
          },
          activityIds: [
            '.PackageInstallerActivity',
            '.DeleteStagedFileOnResult',
          ],
          excludeMatches: '[text="继续安装" || text="完成"]',
          matches:
            'LinearLayout[childCount=1] > Button[text="取消"][childCount=0]',
          snapshotUrls: [
            'https://i.gkd.li/i/14969116',
            'https://i.gkd.li/i/17158050',
          ],
        },
      ],
    },
  ],
});
