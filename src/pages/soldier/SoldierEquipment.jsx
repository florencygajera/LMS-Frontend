import React from 'react';
import { Card, Badge } from '../../components/ui/Card';

export const SoldierEquipment = ({ soldier }) => {
  const getEquipmentType = (item) => {
    if (item.includes('Rifle') || item.includes('Goggles')) return 'Weapon';
    if (item.includes('Uniform') || item.includes('Boots') || item.includes('Helmet')) return 'Uniform';
    return 'Gear';
  };

  const getCondition = (index) => {
    return index === 3 ? 'orange' : 'green';
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Equipment & Arms</h1>
        <p className="text-white/50">Issued weapons, uniform, and gear</p>
      </div>

      <Card title="Issued Items">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">#</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Item</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Type</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Issued</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Condition</th>
            </tr>
          </thead>
          <tbody>
            {soldier.equipment.map((item, i) => (
              <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-3 px-4 font-mono text-sm">{i + 1}</td>
                <td className="py-3 px-4 font-medium">{item}</td>
                <td className="py-3 px-4">
                  <Badge type="blue" text={getEquipmentType(item)} />
                </td>
                <td className="py-3 px-4 text-white/50">15 Jan 2024</td>
                <td className="py-3 px-4">
                  <Badge type={getCondition(i)} text={i === 3 ? 'Worn' : 'Good'} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default SoldierEquipment;
