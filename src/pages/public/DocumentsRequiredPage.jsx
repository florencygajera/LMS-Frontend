import React from 'react';
import { Card, Badge } from '../../components/ui/Card';

export const DocumentsRequiredPage = ({ onNavigate }) => {
  const documents = [
    { doc: 'Aadhaar Card', mandatory: true, format: 'PDF/JPG' },
    { doc: 'Class 10th Marksheet', mandatory: true, format: 'PDF/JPG' },
    { doc: 'Class 12th Marksheet', mandatory: false, format: 'PDF/JPG' },
    { doc: 'Domicile Certificate', mandatory: true, format: 'PDF/JPG' },
    { doc: 'Caste Certificate', mandatory: false, format: 'PDF/JPG' },
    { doc: 'Birth Certificate', mandatory: true, format: 'PDF/JPG' },
    { doc: 'Passport Size Photos', mandatory: true, format: 'JPG' },
    { doc: 'Character Certificate', mandatory: false, format: 'PDF/JPG' },
    { doc: 'Income Certificate', mandatory: false, format: 'PDF/JPG' }
  ];

  const tips = [
    'All documents must be clear and legible',
    'File size should not exceed 2MB per document',
    'Only PDF, JPG, PNG formats are accepted',
    'Make sure your Aadhaar is linked with mobile number',
    'Carry original documents for verification'
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Documents Required</h1>
        <p className="text-white/50">List of documents needed for application</p>
      </div>

      <Card title="Document Checklist">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Document</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Mandatory</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Format</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc, i) => (
              <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4 font-semibold">{doc.doc}</td>
                <td className="py-3 px-4">
                  <Badge type={doc.mandatory ? 'red' : 'green'} text={doc.mandatory ? 'Mandatory' : 'Optional'} />
                </td>
                <td className="py-3 px-4 text-white/70">{doc.format}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <Card title="Important Tips">
        <ul className="space-y-2">
          {tips.map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-white/70">
              <span className="text-[#00C2FF] mt-1">•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default DocumentsRequiredPage;
