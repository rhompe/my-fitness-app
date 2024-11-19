'use client'

import React, { useRef, useState } from 'react'
import html2canvas from 'html2canvas'

export default function Component() {
  const receiptRef = useRef(null)
  const [storeLocation, setStoreLocation] = useState('AHUALULCO GDL.')
  const [date, setDate] = useState('04/02/2022')
  const [time, setTime] = useState('18:56')
  const [products] = useState([
    { name: 'NESCAFE DULCECREM 2', quantity: 1, price: 5.00 },
    { name: 'KIT KAT 4FING 41.5G', quantity: 1, price: 22.00 },
    { name: 'NESTLE LAFERA 290G', quantity: 1, price: 14.00 },
    { name: 'MONSTER ENERGY', quantity: 1, price: 47.50 },
    { name: 'MONSTER ENERGY', quantity: 1, price: 47.50 }
  ])

  const total = products.reduce((sum, product) => sum + product.price, 0)

  const downloadReceipt = async () => {
    if (receiptRef.current) {
      const canvas = await html2canvas(receiptRef.current, {
        backgroundColor: '#ffffff'
      })
      const link = document.createElement('a')
      link.download = 'oxxo-receipt.png'
      link.href = canvas.toDataURL()
      link.click()
    }
  }

  // Convertir 80mm a píxeles (aproximadamente 302px a 96 DPI)
  const receiptWidth = '302px'
  // Convertir 8.5pt a píxeles (aproximadamente 11px)
  const fontSize = '11px'

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="storeLocation" className="form-label">Store Location:</label>
                <input
                  id="storeLocation"
                  type="text"
                  className="form-control"
                  value={storeLocation}
                  onChange={(e) => setStoreLocation(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="date" className="form-label">Date:</label>
                <input
                  id="date"
                  type="text"
                  className="form-control"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="time" className="form-label">Time:</label>
                <input
                  id="time"
                  type="text"
                  className="form-control"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <button className="btn btn-primary" onClick={downloadReceipt}>
                Download Receipt
              </button>
            </div>
          </div>

          <div 
            ref={receiptRef} 
            className="card mt-4" 
            style={{ 
              fontFamily: 'Courier, monospace', // Fuente monoespaciada similar a Matriz_B2
              fontSize: fontSize,
              width: receiptWidth,
              margin: '0 auto',
              padding: '10px',
              whiteSpace: 'pre-wrap',
              lineHeight: '1.2',
              boxSizing: 'border-box'
            }}
          >
            {/* Impresora recomendada: serie Epson TM-T81/82 */}
            <div style={{ textAlign: 'center' }}>
              CADENA COMERCIAL OXXO, S.A. DE C.V. (CCO-860523-1N4)
            </div>

            <div style={{ textAlign: 'center', marginTop: '5px' }}>
              {storeLocation}
            </div>

            <div style={{ marginTop: '5px' }}>
              Edision Mte. Numero 1235 Coloia Colores
              Monterrey, Nuev. a Lean C.P. 64480.
              Regimen de (Opcional) para Grupos de Sociedades.
            </div>

            <div style={{ textAlign: 'center', margin: '5px 0' }}>
              {'='.repeat(40)}
            </div>

            <div style={{ textAlign: 'center' }}>ARTICULOS COMPRADOS</div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
              <span>ARTICULO</span>
              <span>CANT</span>
              <span>PRECIO</span>
            </div>

            {products.map((product, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ width: '60%' }}>{product.name}</span>
                <span style={{ width: '20%', textAlign: 'center' }}>{product.quantity}</span>
                <span style={{ width: '20%', textAlign: 'right' }}>${product.price.toFixed(2)}</span>
              </div>
            ))}

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>IVA incluido:</span>
              <span>$0.00</span>
            </div>

            <div style={{ marginTop: '5px' }}>
              <span>Pago Visa 2289</span>
            </div>

            <div style={{ textAlign: 'center', margin: '5px 0' }}>
              {'='.repeat(40)}
            </div>

            <div style={{ textAlign: 'center' }}>
              ****** OXXO PREMIA ******
            </div>

            <div style={{ textAlign: 'center', marginTop: '3px', fontWeight: 'bold' }}>
              ¿VIKINGO GRATIS?
            </div>

            <div style={{ textAlign: 'center', marginTop: '3px' }}>
              REGISTRATE A OXXO PREMIA,
              ACUMULA PUNTOS EN TUS VISITAS Y
              CANJEELOS POR PRODUCTOS GRATIS.
              DESCARGA LA APP MI OXXO O PIDE
              TU TARJETA OXXO PREMIA EN TIENDA.
            </div>

            <div style={{ textAlign: 'center', margin: '5px 0' }}>
              {'='.repeat(40)}
            </div>

            <div style={{ textAlign: 'center' }}>
              MUCHAS GRACIAS POR SU COMPRA
              PAGO EN UNA SOLA EXHIBICION

              LUGAR DE EXPEDICION:
              AHUALULCO DE MERCADO, JALISCO

              EMAIL: ATENCIONACLIENTES@OXXO.COM
              TELEFONO SIN COSTO 81 83 20 20 20

              ¡TENEMOS UN LUGAR PARA TI!
              ADMINISTRANDO O TRABAJANDO EN OXXO

              LA CADENA DE TIENDAS DE PROXIMIDAD
              MAS GRANDE DE LATINOAMERICA
            </div>

            <div style={{ textAlign: 'center', marginTop: '5px' }}>
              {date} {time}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}