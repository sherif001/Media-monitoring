// src/components/MediaContents.js
import React, { useEffect, useState } from 'react';
import './MediaContents.css'; // يمكنك إنشاء ملف CSS خاص بالمكون إذا رغبت

const MediaContents = () => {
  const [contents, setContents] = useState([]);
  const [sources, setSources] = useState([]);

  useEffect(() => {
    // جلب بيانات محتوى الإعلام
    fetch('/mediacontents.json')
      .then(response => response.json())
      .then(data => setContents(data))
      .catch(error => console.error('Error fetching media contents:', error));

    // جلب بيانات مصادر الإعلام
    fetch('/mediasources.json')
      .then(response => response.json())
      .then(data => setSources(data))
      .catch(error => console.error('Error fetching media sources:', error));
  }, []);

  // دالة للحصول على اسم المصدر بناءً على source_id
  const getSourceName = (source_id) => {
    const source = sources.find(src => src.id === source_id);
    return source ? source.name : 'Unknown';
  };

  return (
    <div className="media-contents">
      <h2>محتوى الإعلام</h2>
      <ul>
        {contents.map(content => (
          <li key={content.id}>
            <h3>{content.title}</h3>
            <p>{content.content}</p>
            <p><strong>المصدر:</strong> {getSourceName(content.source_id)}</p>
            <p><strong>التاريخ:</strong> {new Date(content.published_at).toLocaleDateString()}</p>
            <p><strong>المشاعر:</strong> {content.sentiment}</p>
            <p><strong>المواضيع:</strong> {content.topics.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MediaContents;
