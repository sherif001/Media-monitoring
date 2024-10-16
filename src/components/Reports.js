// src/components/Reports.js
import React, { useEffect, useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import './Reports.css';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement } from 'chart.js';

// تسجيل العناصر الضرورية لـ Chart.js
Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement);

const Reports = () => {
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

  // تحضير بيانات تحليل المشاعر
  const sentimentCounts = contents.reduce((acc, content) => {
    acc[content.sentiment] = (acc[content.sentiment] || 0) + 1;
    return acc;
  }, {});

  const sentimentData = {
    labels: Object.keys(sentimentCounts),
    datasets: [
      {
        label: 'تحليل المشاعر',
        data: Object.values(sentimentCounts),
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
      },
    ],
  };

  // تحضير بيانات مصادر الإعلام
  const sourceCounts = contents.reduce((acc, content) => {
    acc[content.source_id] = (acc[content.source_id] || 0) + 1;
    return acc;
  }, {});

  const sourceNames = sources.map(source => source.name);
  const sourceDataValues = sources.map(source => sourceCounts[source.id] || 0);

  const sourceData = {
    labels: sourceNames,
    datasets: [
      {
        label: 'عدد المقالات لكل مصدر',
        data: sourceDataValues,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className="reports">
      <h2>التقارير التحليلية</h2>
      <div className="chart-container">
        <div className="chart">
          <h3>تحليل المشاعر</h3>
          <Pie data={sentimentData} />
        </div>
        <div className="chart">
          <h3>عدد المقالات لكل مصدر</h3>
          <Bar data={sourceData} />
        </div>
      </div>
    </div>
  );
};

export default Reports;
