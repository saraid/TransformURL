function transformurl_executeTransform(regex, goto_url) {
  var thing = document.getElementById("content").selectedBrowser.contentWindow.location.href;
  document.getElementById("content").selectedBrowser.contentWindow.location.href = thing.replace(new RegExp(regex, "i"), goto_url);
}