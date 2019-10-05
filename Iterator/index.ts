import { Marked } from 'marked-ts';
import markdown from './README.md';

const docs = document.getElementById('docs');
if (docs) {
  docs.innerHTML = Marked.parse(markdown);
}
