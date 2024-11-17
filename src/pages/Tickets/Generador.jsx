import React, { useRef, useEffect, useState } from 'react';
import html2canvas from 'html2canvas';

const products = [
  { name: 'Coke 12PK', code: '030772036210', price: 6.98, taxCode: 'X' },
  { name: 'ELEPHANT GAR', code: '070869001030', price: 3.34, taxCode: 'N' },
  { name: 'TOMATO ROMA', code: '000000040870', price: 1.41, taxCode: 'N', weight: '1.440 lb @ 1 lb /0.98' },
  { name: 'ASAHI DRY', code: '038766361200', price: 10.48, taxCode: 'T' },
  { name: 'MNSTR 4PK', code: '070847013240', price: 7.48, taxCode: 'X' },
  { name: 'MNSTR 4PK', code: '070847013240', price: 7.48, taxCode: 'X' },
  { name: 'COKE', code: '049000042550', price: 6.86, taxCode: 'X' },
];

export default function WalmartTicket() {
  const ticketRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const subtotal = products.reduce((sum, product) => sum + product.price, 0);
  const tax = subtotal * 0.0825;
  const total = subtotal + tax;

  useEffect(() => {
    setIsClient(true);
  }, []);

  const downloadAsImage = async () => {
    if (ticketRef.current) {
      const canvas = await html2canvas(ticketRef.current, {
        useCORS: true,
        allowTaint: true,
        scrollY: -window.scrollY
      });
      const image = canvas.toDataURL("image/png", 1.0);
      const link = document.createElement('a');
      link.download = 'walmart-ticket.png';
      link.href = image;
      link.click();
    }
  };

  return (
    <div>
      <div ref={ticketRef} className="container">
        <style jsx>{`
          .container {
            max-width: 400px;
            font-family: monospace;
            font-size: 12px;
            margin: 20px auto;
            padding: 10px;
            border: 1px solid #ddd;
            background-color: white;
          }
          .text-center {
            text-align: center;
          }
          .mb-3 {
            margin-bottom: 15px;
          }
          .mb-0 {
            margin-bottom: 0;
          }
          .d-flex {
            display: flex;
          }
          .justify-content-between {
            justify-content: space-between;
          }
          .font-weight-bold {
            font-weight: bold;
          }
          img {
            max-width: 100%;
            height: auto;
          }
          .logo {
            width: 100px;
          }
          .barcode {
            width: 200px;
          }
          .qr-code {
            width: 100px;
          }
          .product-table {
            width: 100%;
            border-collapse: collapse;
          }
          .product-table td {
            padding: 2px 0;
          }
          .product-code {
            font-size: 10px;
            color: #666;
          }
        `}</style>

        <div className="text-center mb-3">
          <p>You could win a $1000 GiftCard!</p>
          <p>Visit survey.walmart.com#7TNSNV1C2HSZ</p>
          <p>For more details, see back of receipt.</p>
        </div>

        <div className="text-center mb-3">
          <img src="/images/walmart-logo.png" alt="Walmart Logo" className="logo mb-2" />
          <p className="mb-0">WM Supercenter</p>
          <p className="mb-0">956-618-2018 Mgr: MARIANA</p>
          <p className="mb-0">4101 S MCCOLL RD</p>
          <p className="mb-0">EDINBURG TX 78539</p>
          <p className="mb-0">ST# 03886 OP# 009012 TE# 12 TR# 02653</p>
        </div>

        <div className="text-center mb-3"> 
          <img src="/images/barcodes.jpg" alt="Barcode" className="barcode" />
        </div>

        <div className="mb-3">
          <p className="mb-0"># ITEMS SOLD {products.length}</p>
          <p className="mb-0">TC# 1514 0373 8531 8934 1354 4</p>
        </div>

        <table className="product-table mb-3">
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>
                  <div>{product.name}</div>
                  <div className="product-code">{product.code}</div>
                  {product.weight && <div><small>{product.weight}</small></div>}
                </td>
                <td style={{textAlign: 'right'}}>
                  {product.price.toFixed(2)} {product.taxCode}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mb-3">
          <div className="d-flex justify-content-between">
            <span>SUBTOTAL</span>
            <span>{subtotal.toFixed(2)}</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>TAX1 8.2500 %</span>
            <span>{tax.toFixed(2)}</span>
          </div>
          <div className="d-flex justify-content-between font-weight-bold">
            <span>TOTAL</span>
            <span>{total.toFixed(2)}</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>MCARD TEND</span>
            <span>{total.toFixed(2)}</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>CHANGE DUE</span>
            <span>0.00</span>
          </div>
        </div>

        <div className="mb-3">
          <p className="mb-0">MASTERCARD- 2341 I 1 APPR#73438Z</p>
          <p className="mb-0">{total.toFixed(2)} TOTAL PURCHASE</p>
          <p className="mb-0">REF # U063UD447121</p>
          <p className="mb-0">AID A0000000041010</p>
          <p className="mb-0">TERMINAL # 28405285</p>
          <p className="mb-0">*No Signature Required</p>
          <p className="mb-0">{new Date().toLocaleString()}</p>
        </div>

        <div className="text-center mb-3">
          <img src="/images/qrcode.png" alt="QR Code" className="qr-code mb-2" />
          <p className="mb-0">Get free delivery</p>
          <p className="mb-0">from this store</p>
          <p className="mb-0">with Walmart+</p>
          <p><small>Scan for 30-day free trial</small></p>
        </div>

        <div className="text-center">
          <p className="mb-0">Low prices You Can Trust, Every Day.</p>
          <p>16/11/2024, 1:24:56 p.m.</p>
        </div>
      </div>
      {isClient && (
        <div className="text-center mt-3">
          <button onClick={downloadAsImage} className="download-button">
            Descargar como imagen
          </button>
        </div>
      )}
      <style jsx>{`
        .download-button {
          background-color: #0071dc;
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          border-radius: 5px;
        }
        .download-button:hover {
          background-color: #004c91;
        }
        .mt-3 {
          margin-top: 15px;
        }
      `}</style>
    </div>
  );
}