import React from 'react';
import { Card, Badge } from '../../components/ui/Card';

export const TrainerUpload = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Upload Training Data</h1>
        <p className="text-white/50">Bulk upload Excel sheets</p>
      </div>

      <Card title="Bulk Upload" subtitle="XLSX / CSV">
        <div className="space-y-6">
          {/* Upload Zone */}
          <div className="border-2 border-dashed border-white/20 rounded-xl p-12 text-center hover:border-[#00C2FF] transition-colors cursor-pointer">
            <div className="text-4xl mb-4">📊</div>
            <p className="text-white/70">
              Drag & drop Excel file, or{' '}
              <span className="text-[#00C2FF] font-semibold">click to browse</span>
            </p>
            <p className="text-xs text-white/50 mt-2">.xlsx, .xls, .csv · Max 10 MB</p>
            <button className="mt-4 px-6 py-2 glass rounded-lg text-white hover:bg-white/10 transition-colors">
              Browse File
            </button>
          </div>

          {/* Required Columns */}
          <div>
            <p className="font-semibold text-white mb-2">Required Columns</p>
            <div className="glass rounded-lg p-4 font-mono text-xs text-white/70 leading-relaxed">
              soldier_id · training_date · training_type · running_min · pushups · pullups · shooting_pct · overall_score · remarks
            </div>
            <button className="mt-3 px-4 py-2 glass text-sm rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2">
              ⬇ Download Template
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TrainerUpload;
