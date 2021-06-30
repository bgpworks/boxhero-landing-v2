var parser = require("accept-language-parser");

const urls = {
  ko: "/ko",
  en: "/en",
  es: "/es",
  id: "/id",
};

module.exports = (req, res) => {
  var path = req.query["path"] || "";
  var langs = req.headers["accept-language"];
  var lang = parser.pick(Object.keys(urls), langs, { loose: true });
  if (lang == null) {
    console.log("No matching langs.");
    lang = "en";
  }
  var url = urls[lang];

  console.log(path);
  console.log(langs, lang, url);

  res.writeHead(302, {
    Location: url + "/" + path,
  });
  res.end();
};
