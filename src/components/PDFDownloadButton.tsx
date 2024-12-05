import React, { useRef, useState } from 'react';
import { Download } from 'lucide-react';
import { generatePDF } from '../utils/pdfUtils';
import { Report } from './Report';


export const PDFDownloadButton: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    try {
      setIsGenerating(true);
      await generatePDF(targetRef.current);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
    <div>Homepage</div>
      <button
        onClick={handleDownload}
        disabled={isGenerating}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          isGenerating
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        <Download size={20} />
        {isGenerating ? 'Generating PDF...' : 'Download'}
      </button>
      
      <div className="fixed -left-[9999px]">
        <div ref={targetRef} className="bg-white">
          <Report />
        </div>
      </div>
    </>
  );
};