import { useEffect, useState } from 'react';
import marked from 'marked';

const prism = require('prismjs');

const useMarkdown = ({ path }) => {
  const [markdown, setMarkdown] = useState(null);

  marked.setOptions({
    highlight: function (code, lang) {
      if (prism.languages[lang]) {
        return prism.highlight(code, prism.languages[lang], lang);
      } else {
        return code;
      }
    },
  });

  useEffect(() => {
    fetch(path)
      .then(response => response.text())
      .then(text => setMarkdown(marked.parse(text)));
  }, [path]);

  return { markdown, path };
};

export default useMarkdown;
