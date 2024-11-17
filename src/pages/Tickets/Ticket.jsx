import React, { useRef, useState, useEffect } from "react";
import html2canvas from "html2canvas";
import JsBarcode from "jsbarcode";

function Ticket() {
  const ticketRef = useRef(null);
  const barcodeRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    folio: "59508Z", // Número de orden predeterminado
    productos: [],
    fecha: new Date().toISOString().split("T")[0], // Fecha actual por defecto
    hora: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), // Hora actual por defecto
  });

  const productOptions = [
    { name: "Combo Crazy Puffs", price: 179 },
    { name: "Classic Pepperoni", price: 120 },
    { name: "Crazy Puffs Pepperoni", price: 49 },
    { name: "Crazy Bread", price: 35 },
  ];

  useEffect(() => {
    if (barcodeRef.current) {
      JsBarcode(barcodeRef.current, formData.folio, {
        format: "CODE128",
        lineColor: "#000",
        width: 2,
        height: 40,
        displayValue: false,
      });
    }
  }, [formData.folio]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProductChange = (e) => {
    const options = Array.from(e.target.options);
    const selectedProducts = options
      .filter((opt) => opt.selected)
      .map((opt) => {
        const product = productOptions.find((p) => p.name === opt.value);
        return product ? { ...product } : null;
      })
      .filter(Boolean);
    setFormData({ ...formData, productos: selectedProducts });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false); // Ocultar modal al enviar
  };

  const downloadTicket = async () => {
    const element = ticketRef.current;
    if (!element) return;

    const canvas = await html2canvas(element, { scale: 2 });
    const dataURL = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "ticket.png";
    link.click();
  };

  const calculateTotal = () => {
    return formData.productos.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div className="container mt-5">
      {/* Ticket */}
      <div
        ref={ticketRef}
        className="p-4 border"
        style={{
          maxWidth: "400px",
          fontFamily: "monospace",
          fontSize: "12px",
          border: "1px dashed #000",
        }}
      >
        <div className="text-center">
          <p>ID de tienda 04137-00373</p>
          <p>Teléfono</p>
          <p className="mb-0">Little Caesars #22373</p>
          <p className="mb-0">Sucursal - Federación</p>
          <p className="mb-0">Juan de Dios Robledo número 498</p>
          <p className="mb-0">Colonia Las Huertas</p>
          <p className="mb-0">Guadalajara, Jalisco.</p>
          <p className="mb-0">Código Postal 44739</p>
        </div>
        <p className="mt-2">
          <strong>Orden #{formData.folio}</strong>
          <br />
          {new Date(formData.fecha).toLocaleDateString()} {formData.hora}
        </p>
        <h6 className="text-center">VENTA</h6>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Artículo</th>
              <th className="text-end">Precio</th>
            </tr>
          </thead>
          <tbody>
            {formData.productos.length > 0 ? (
              formData.productos.map((producto, index) => (
                <tr key={index}>
                  <td>{producto.name}</td>
                  <td className="text-end">${producto.price.toFixed(2)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No hay productos seleccionados</td>
                <td></td>
              </tr>
            )}
          </tbody>
        </table>
        <p className="mb-1">Subtotal Gravable: ${calculateTotal().toFixed(2)}</p>
        <p className="mb-1">Ventas Imp.: ${(calculateTotal() * 0.16).toFixed(2)}</p>
        <h5 className="text-end">Total: ${(calculateTotal() * 1.16).toFixed(2)}</h5>
        <svg ref={barcodeRef}></svg>
        <p className="text-center mt-2">¡GRACIAS POR SU PREFERENCIA!</p>
      </div>

      {/* Botones */}
      <div className="mt-3">
        <button className="btn btn-primary me-2" onClick={() => setShowModal(true)}>
          Agregar Datos
        </button>
        <button className="btn btn-success" onClick={downloadTicket}>
          Descargar Ticket
        </button>
      </div>

      {/* Modal de Formulario */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Ingresar Datos del Ticket</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="folio" className="form-label">
                      Folio
                    </label>
                    <input
                      type="text"
                      id="folio"
                      name="folio"
                      className="form-control"
                      value={formData.folio}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="productos" className="form-label">
                      Productos
                    </label>
                    <select
                      id="productos"
                      name="productos"
                      className="form-select"
                      multiple
                      value={formData.productos.map((p) => p.name)}
                      onChange={handleProductChange}
                    >
                      {productOptions.map((product, index) => (
                        <option key={index} value={product.name}>
                          {product.name} - ${product.price.toFixed(2)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="fecha" className="form-label">
                      Fecha
                    </label>
                    <input
                      type="date"
                      id="fecha"
                      name="fecha"
                      className="form-control"
                      value={formData.fecha}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="hora" className="form-label">
                      Hora
                    </label>
                    <input
                      type="time"
                      id="hora"
                      name="hora"
                      className="form-control"
                      value={formData.hora}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">
                    Guardar
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Ticket;
