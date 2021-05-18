const marked = require('marked');
const prism = require('prismjs');

export const parseMarkdown = markdown => {
  marked.setOptions({
    highlight: function (code, lang) {
      if (prism.languages[lang]) {
        prism;
        return prism.highlight(code, prism.languages[lang], lang);
      } else {
        return code;
      }
    },
  });

  return marked.parse(markdown);
};
