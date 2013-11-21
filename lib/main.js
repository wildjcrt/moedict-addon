var data    = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*",
  contentScriptWhen: 'end',
  contentScriptFile: [data.url('jquery-1.10.2.min.js'),
                      data.url('simp-trad.js'),
                      data.url('content_script.js')],
  contentStyleFile: [data.url('styles.css')]
});
