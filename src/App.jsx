import React, { useState } from "react";
import "./App.css";

const images = [
  "/public/Image1.jpeg",
  "/public/image2.jpeg",
  "/public/image3.jpeg",
];

function App() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    txnId: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = "helpredemption5@gmail.com"; // Replace with your email
    const subject = "Order Details: CMF by Nothing – Watch Strap";
    const body = `
      Name: ${formData.name}
      Phone: ${formData.phone}
      Address: ${formData.address}
      UPI Transaction ID: ${formData.txnId}
    `;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the user's default email client with the pre-filled message
    window.location.href = mailtoLink;

    setSubmitted(true);
  };

  const handleClick = () => {
    setShowQR(!showQR);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">
            CMF by Nothing – Watch Strap
          </h1>

          <div className="overflow-x-auto whitespace-nowrap mb-4">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`strap-${i}`}
                className="inline-block w-64 h-auto rounded mr-4"
              />
            ))}
          </div>

          <p className="text-gray-700 mb-2">Color: Blue</p>
          <p className="text-gray-900 text-lg font-semibold mb-2">
            Price: ₹499 - ₹599
          </p>
          <p className="text-gray-600 mb-2 flex items-center gap-2">
            Pay via UPI to{" "}
            <button
              type="button"
              onClick={handleClick}
              className="text-blue-600 underline"
            >
              shopgo@slc
            </button>
          </p>

          {showQR && (
            <div className="mb-4">
              <img
                src="/qr.jpg"
                alt="UPI QR Code"
                className="w-48 h-auto rounded shadow"
              />
            </div>
          )}

          <p className="text-sm text-gray-500 mb-6">
            After payment, fill out the form below with your delivery details.
          </p>

          {submitted ? (
            <div className="bg-green-100 text-green-800 p-4 rounded">
              🎉 Order submitted successfully! You'll receive an email shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border px-4 py-2 rounded"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full border px-4 py-2 rounded"
              />
              <textarea
                placeholder="Delivery Address"
                required
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className="w-full border px-4 py-2 rounded"
              />
              <input
                type="text"
                placeholder="UPI Transaction ID"
                required
                value={formData.txnId}
                onChange={(e) =>
                  setFormData({ ...formData, txnId: e.target.value })
                }
                className="w-full border px-4 py-2 rounded"
              />

              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
              >
                Submit Order
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
