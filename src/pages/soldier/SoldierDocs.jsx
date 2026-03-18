import React, { useState } from 'react';
import { Card, Badge } from '../../components/ui/Card';

export const SoldierDocs = ({ soldier }) => {
  const [uploaded, setUploaded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState(null);
  const [docType, setDocType] = useState('aadhaar');

  const runOCR = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setUploaded(true);
      const results = {
        aadhaar: {
          name: 'RAJVEER SINGH CHAUHAN',
          dob: '12/04/2003',
          gender: 'MALE',
          aadhaar_no: 'XXXX XXXX 4712',
          address: 'Village Chauhan, Jodhpur, Rajasthan 342001',
          status: 'Verified ✓'
        },
        medical: {
          diagnosis: 'Physically fit for active duty',
          doctor: 'Dr. Rajan Mehta',
          hospital: 'Military Hospital Jaipur',
          date: '01 March 2025',
          status: 'Cleared ✓'
        },
        education: {
          institution: 'Govt. Senior Secondary School, Jodhpur',
          board: 'RBSE',
          year: '2021',
          percentage: '72.4%',
          status: 'Eligible ✓'
        }
      };
      setResult(results[docType] || results.aadhaar);
    }, 1800);
  };

  const uploadedDocs = [
    { name: 'Aadhaar_Card.pdf', type: 'Identity', date: '15 Jan 2024', status: 'Processed' },
    { name: 'Class12_Marksheet.pdf', type: 'Education', date: '15 Jan 2024', status: 'Processed' },
    { name: 'Medical_Certificate.pdf', type: 'Medical', date: '01 Mar 2025', status: 'Processed' },
    { name: 'Service_Certificate.pdf', type: 'Training', date: '14 Mar 2025', status: 'Pending' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">📄 Documents & OCR Processing</h1>
        <p className="text-white/50">Upload documents for OCR extraction · Powered by AgniAssist Document Service</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Upload Section */}
        <Card title="Upload Document for OCR" subtitle="Automatic text extraction">
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-white/70 mb-2">Document Type</label>
              <select
                value={docType}
                onChange={(e) => setDocType(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]"
              >
                <option value="aadhaar">Aadhaar Card</option>
                <option value="medical">Medical Certificate</option>
                <option value="education">Education Certificate</option>
                <option value="training">Training Certificate</option>
              </select>
            </div>

            <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-[#00C2FF] transition-colors cursor-pointer">
              <div className="text-4xl mb-2">📄</div>
              <div className="text-white/70">
                Drop file here or <span className="text-[#00C2FF] font-semibold">click to upload</span>
              </div>
              <div className="text-xs text-white/50 mt-2">PDF, JPG, PNG · Max 5 MB</div>
            </div>

            <button
              onClick={runOCR}
              disabled={processing}
              className="w-full py-3 bg-[#00C2FF] text-black font-semibold rounded-lg hover:bg-[#00C2FF]/80 transition-colors disabled:opacity-50"
            >
              {processing ? '⏳ Processing OCR...' : '🔍 Run OCR Extraction'}
            </button>

            <p className="text-xs text-white/30 text-center">
              Backend: Document Service OCR (Port 8010) · Uses Tesseract + ML text extraction
            </p>
          </div>
        </Card>

        {/* OCR Results */}
        <Card title="OCR Results" subtitle={uploaded ? 'Extraction complete' : 'Awaiting upload'}>
          {!uploaded && !processing && (
            <div className="text-center py-12 text-white/50">
              Upload a document to see extracted fields
            </div>
          )}

          {processing && (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">⏳</div>
              <p className="text-white/50">Processing document with OCR engine...</p>
            </div>
          )}

          {uploaded && result && (
            <div className="space-y-4">
              <div className="glass rounded-lg p-3 border border-[#00FF88]/30 bg-[#00FF88]/10">
                <p className="text-[#00FF88] text-sm font-semibold">
                  ✅ OCR extraction complete — {Object.keys(result).length - 1} fields extracted
                </p>
              </div>

              {Object.entries(result).map(([key, value]) => (
                <div key={key} className="flex gap-4 py-2 border-b border-white/5 last:border-0">
                  <div className="w-32 flex-shrink-0 text-xs font-bold uppercase tracking-wider text-white/50">
                    {key.replace(/_/g, ' ')}
                  </div>
                  <div className={`text-sm font-medium ${key === 'status' ? 'text-[#00FF88]' : 'text-white'}`}>
                    {value}
                  </div>
                </div>
              ))}

              <div className="flex gap-3 pt-4">
                <button className="px-4 py-2 bg-[#00C2FF] text-black text-sm font-semibold rounded-lg hover:bg-[#00C2FF]/80 transition-colors">
                  Save to Profile
                </button>
                <button className="px-4 py-2 glass text-white text-sm rounded-lg hover:bg-white/10 transition-colors">
                  Download
                </button>
              </div>
            </div>
          )}
        </Card>
      </div>

      {/* Uploaded Documents Table */}
      <Card title="Uploaded Documents" subtitle={`${soldier.equipment.length} Docs`}>
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Document</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Type</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Uploaded On</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">OCR Status</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Action</th>
            </tr>
          </thead>
          <tbody>
            {uploadedDocs.map((doc, i) => (
              <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-3 px-4 font-medium">📄 {doc.name}</td>
                <td className="py-3 px-4">
                  <Badge type="blue" text={doc.type} />
                </td>
                <td className="py-3 px-4 text-white/50">{doc.date}</td>
                <td className="py-3 px-4">
                  <Badge type={doc.status === 'Processed' ? 'green' : 'orange'} text={doc.status} />
                </td>
                <td className="py-3 px-4">
                  <button className="text-[#00C2FF] text-sm hover:underline">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default SoldierDocs;
