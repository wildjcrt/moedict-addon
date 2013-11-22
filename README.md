# 萌典 Firefox Add-on

![萌典 Chrome Extension](data/440x280.png)

[連結](https://chrome.google.com/webstore/detail/%E8%90%8C%E5%85%B8-moedict/aihifbidnaepclhnfppjnpbmeonhhloa)

是否常常看到不認識的中文字，想知道字義、詞意、發音等資訊嗎？
請問「六麤三細」要怎麼念？「麤」又是什麼意思呢？
萌典擴充套件可以讓你輕鬆地用滑鼠選擇字詞後，跳出字詞的詞義與發音等資訊。

*簡體網站也可使用

## 操作說明

使用滑鼠雙擊或反白選擇任何頁面上想查詢的字詞，就會跳出來自萌典網站的字詞搜尋結果。

搜尋結果內的解釋文字，都已連結到萌典網站上的該詞的釋義頁面，點擊即可前往網站觀看。

點擊搜尋結果以外的任何地方，即可關閉搜尋結果的方框。

## Add-on SDK 說明

### 環境架設

開發 Firefox Add-on 需要下載 SDK 並設定環境。不推薦使用 [Add-on Builder](https://builder.addons.mozilla.org/)，因為太難 debug 了。

需要下載 SDK ，建議到 [addon-sdk](https://github.com/mozilla/addon-sdk/) 這邊將專案 `git clone` 下來，然後 `git checkout release`。

根據[安裝文件](https://addons.mozilla.org/en-US/developers/docs/sdk/latest/dev-guide/tutorials/installation.html)，設定環境。

以 Mac 為例：

暫時性： `source bin/activate` ，會進入 SDK Virtual Environment。

永久性： `ln -s PATH_TO_SDK/bin/cfx ~/usr/local/bin/cfx`

### cfx 使用

`cfx init` 用來建立新的 Firefox Add-on 專案。注意目錄要是空的才能執行這個指令。

`cfx run` 會跑起一隻 Firefox 程式，可以在上面執行 Add-on 的內容，警告和錯誤訊息都會在寫 terminal log 中。

`cfx xpi` 如果 Add-on 撰寫完成，可以用這個指令產生 xpi，即可在 Firefox 上安裝以及發佈到 Firefox Add-ons 網站上。

=================

本專案為 MIT License

附加元件的上架，特別致謝 @timdream
