import React, { useState } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const LoremIpsumGenerator = () => {
  const [count, setCount] = useState(3);
  const [type, setType] = useState('paragraphs'); // paragraphs | sentences | words
  const [startWithLorem, setStartWithLorem] = useState(true);
  const [output, setOutput] = useState('');

  const loremWords = [
    'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
    'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore',
    'magna', 'aliqua', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud',
    'exercitation', 'ullamco', 'laboris', 'nisi', 'ut', 'aliquip', 'ex', 'ea',
    'commodo', 'consequat', 'duis', 'aute', 'irure', 'in', 'reprehenderit', 'in',
    'voluptate', 'velit', 'esse', 'cillum', 'dolore', 'eu', 'fugiat', 'nulla',
    'pariatur', 'excepteur', 'sint', 'occaecat', 'cupidatat', 'non', 'proident',
    'sunt', 'in', 'culpa', 'qui', 'officia', 'deserunt', 'mollit', 'anim', 'id',
    'est', 'laborum'
  ];

  const generate = () => {
    let result = '';
    const getRandomWord = () => loremWords[Math.floor(Math.random() * loremWords.length)];

    if (type === 'words') {
      const wordsArr = [];
      if (startWithLorem) wordsArr.push('lorem', 'ipsum');
      while (wordsArr.length < count) {
        wordsArr.push(getRandomWord());
      }
      result = wordsArr.slice(0, count).join(' ');
    } else if (type === 'sentences') {
      const sentences = [];
      for (let i = 0; i < count; i++) {
        let len = 8 + Math.floor(Math.random() * 8);
        const sWords = [];
        if (i === 0 && startWithLorem) {
          sWords.push('lorem', 'ipsum', 'dolor', 'sit', 'amet');
        }
        while (sWords.length < len) {
          sWords.push(getRandomWord());
        }
        const str = sWords.join(' ');
        sentences.push(str.charAt(0).toUpperCase() + str.slice(1) + '.');
      }
      result = sentences.join(' ');
    } else {
      const paragraphs = [];
      for (let p = 0; p < count; p++) {
        const sentences = [];
        for (let i = 0; i < 4; i++) {
          let len = 10 + Math.floor(Math.random() * 6);
          const sWords = [];
          if (p === 0 && i === 0 && startWithLorem) {
            sWords.push('lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit');
          }
          while (sWords.length < len) {
            sWords.push(getRandomWord());
          }
          const str = sWords.join(' ');
          sentences.push(str.charAt(0).toUpperCase() + str.slice(1) + '.');
        }
        paragraphs.push(sentences.join(' '));
      }
      result = paragraphs.join('\n\n');
    }

    setOutput(result);
  };

  React.useEffect(() => {
    generate();
  }, [count, type, startWithLorem]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', background: 'var(--bg-surface)', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
        <label style={{ fontSize: '0.9rem' }}>
          Count:
          <input
            type="number"
            min="1"
            max="100"
            value={count}
            onChange={(e) => setCount(Math.max(1, parseInt(e.target.value) || 1))}
            style={{ marginLeft: '0.5rem', width: '70px', padding: '0.25rem 0.5rem', border: '1px solid var(--border-color)', borderRadius: '4px', background: 'var(--bg-main)' }}
          />
        </label>

        <label style={{ fontSize: '0.9rem' }}>
          Type:
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            style={{ marginLeft: '0.5rem', padding: '0.25rem 0.5rem', borderRadius: '4px', border: '1px solid var(--border-color)', background: 'var(--bg-main)' }}
          >
            <option value="paragraphs">Paragraphs</option>
            <option value="sentences">Sentences</option>
            <option value="words">Words</option>
          </select>
        </label>

        <label style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <input type="checkbox" checked={startWithLorem} onChange={(e) => setStartWithLorem(e.target.checked)} />
          Start with "Lorem ipsum"
        </label>

        <button
          onClick={generate}
          style={{ padding: '0.4rem 1rem', background: 'var(--accent-primary)', color: '#fff', borderRadius: '6px', fontWeight: 500 }}
        >
          Regenerate
        </button>
      </div>

      <CodeEditorPanel
        title={`Generated Lorem Ipsum (${count} ${type})`}
        value={output}
        readOnly
      />
    </div>
  );
};

export default LoremIpsumGenerator;
