import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer = ({
  url, pageNumber, className, width
}: {
    url: string;
    pageNumber: number;
    width?: number;
    className?: string;
}) => (
  <Document file={url}>
    <Page
      pageNumber={pageNumber}
      width={width}
      className={className}
    />
  </Document>
);

export default PdfViewer;