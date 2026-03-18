import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';

export const FAQPage = ({ onNavigate }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is Agnipath Scheme?',
      a: 'Agnipath is a recruitment scheme for the Indian Armed Forces where candidates serve for 4 years as Agniveers with attractive stipend and benefits.'
    },
    {
      q: 'What is the age limit for Agnipath?',
      a: 'The age limit is 17.5 to 21 years as on the date of application.'
    },
    {
      q: 'What is the educational qualification required?',
      a: 'For Agniveer GD: Class 10th pass. For Agniveer Tech: Class 12th pass with Physics/Chemistry/Math. For Agniveer Clerk: Class 12th pass with typing skills.'
    },
    {
      q: 'What is the stipend amount?',
      a: 'The monthly stipend starts at ₹30,000 in Year 1 and increases to ₹40,000 in Year 4, plus allowances.'
    },
    {
      q: 'What happens after 4 years of service?',
      a: 'After 4 years, Agniveers receive Seva Nidhi fund of ₹11.71 lakhs. 25% are retained for permanent commission.'
    },
    {
      q: 'Is there any bond/agreement?',
      a: 'Yes, candidates need to sign a service agreement for 4 years. Early exit is not permitted except on medical grounds.'
    },
    {
      q: 'What is the selection process?',
      a: 'The selection includes Physical Test → Written Exam → Medical Test → Merit List → Enrollment.'
    },
    {
      q: 'Can I apply if I have tattoos?',
      a: 'Tattoos are not allowed on visible body parts. Small tattoos in concealed areas may be acceptable.'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Frequently Asked Questions</h1>
        <p className="text-white/50">Common questions about Agnipath Scheme</p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            className="glass rounded-lg cursor-pointer overflow-hidden"
          >
            <div className="flex justify-between items-center p-4">
              <span className="font-semibold text-white">{faq.q}</span>
              <span className="text-[#00C2FF]">{openIndex === i ? '−' : '+'}</span>
            </div>
            {openIndex === i && (
              <div className="px-4 pb-4 text-white/70">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="glass rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-3">Still have questions?</h3>
        <p className="text-white/70 mb-4">
          Contact our helpdesk for more information
        </p>
        <button onClick={() => onNavigate('contact')} className="text-[#00C2FF] hover:underline">
          Contact Support →
        </button>
      </div>
    </div>
  );
};

export default FAQPage;
