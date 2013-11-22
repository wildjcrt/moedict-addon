# 程式說明

使用 [page-mod](https://addons.mozilla.org/en-US/developers/docs/sdk/latest/modules/sdk/page-mod.html) 插入 scripts / css。

## 注意事項

package.json 中， name 欄位不能有中文否則 `cfx run` 會失敗。

希望排除萌典網站，不觸發搜尋框，但目前 SDK 的 page-mod 尚未支援 exclude，但已有 bug report [810654](https://bugzilla.mozilla.org/show_bug.cgi?id=810654)，所以先根據[這篇文章](https://forums.mozilla.org/addons/viewtopic.php?f=7&t=15147)的寫法來做排除功能。

### Add-on SDK

目前使用 1.14 版。
