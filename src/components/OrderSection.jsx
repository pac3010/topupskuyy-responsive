import React from "react";
import sampleImg from "../assets/sampleImg.png";
import items from "../assets/data/itemData.js";

const OrderSection = () => {
  return (
    <div className="container mx-auto p-4 sm:p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section (1/3) */}
        <div className="bg-white shadow-md rounded-lg p-4 max-h-[900px]">
          <div className="p-4 sm:p-6">
            <img src={sampleImg} className="w-full max-w-xs mx-auto" alt="Mobile Legends" />
          </div>
          <div className="text-gray-500 font-semibold text-sm">Moonton</div>
          <div className="text-black font-semibold text-3xl underline decoration-[#54c0e4]">
            Mobile Legends
          </div>
          <div className="border-b-2 border-gray-500">
            <div className="text-black text-sm pt-4 pb-6 space-y-1">
              <p>Jaminan Layanan</p>
              <p>Layanan Pelanggan 24/7</p>
              <p>Pembayaran yang Aman</p>
              <p>Pengiriman Instant</p>
              <p>Pengiriman Manual</p>
            </div>
          </div>
          <div className="pt-6">
            <div className="text-black font-bold text-sm">Description</div>
            <div className="text-gray-500 font-semibold text-lg pt-4">Cara Topup:</div>
            <div className="text-black text-sm pt-2 pb-6 space-y-1">
              <p>1. Masukkan User ID dan Zone ID Anda, Contoh: 1234567 (1234)</p>
              <p>2. Pilih Nominal Diamonds yang kamu inginkan</p>
              <p>3. Selesaikan pembayaran</p>
              <p>4. Diamonds akan ditambahkan ke akun Mobile Legends kamu</p>
            </div>
            <div className="text-gray-500 text-sm pt-4">
              <p className="underline decoration-[#54c0e4] text-black font-bold">Note:</p>
              <p>Pembelian Weekly maksimal 10X atau 70 Hari (lebih dari itu weekly tidak masuk atau hangus)</p>
            </div>
          </div>
        </div>

        {/* Right Section (2/3) */}
        <div className="md:col-span-2 space-y-6">
          {/* Data Input */}
          <div className="shadow-md rounded-lg">
            <div className="bg-gray-500 text-white font-semibold text-lg px-4 py-2 rounded-t-lg">
              Masukkan Data Akun
            </div>
            <div className="bg-white p-4 rounded-b-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  className="w-full rounded-lg border py-2 px-3"
                  placeholder="Masukkan ID"
                />
                <input
                  type="text"
                  className="w-full rounded-lg border py-2 px-3"
                  placeholder="Masukkan Server"
                />
              </div>
              <div className="text-gray-500 text-sm pt-4">
                Klik profile di pojok kiri atas untuk melihat ID. Contoh: ID tercantum 12345678 (1234),
                maka isi 12345678 di ID dan 1234 di Server.
              </div>
            </div>
          </div>

          {/* Item Selection */}
          <div className="shadow-md rounded-lg">
            <div className="bg-gray-500 text-white font-semibold text-lg px-4 py-2 rounded-t-lg">
              Pilih Item
            </div>
            <div className="bg-white p-4 rounded-b-lg">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="h-[85px] border rounded-lg p-3 text-center text-sm shadow-sm transition duration-200 hover:bg-[#54c0e4] hover:text-white cursor-pointer"
                  >
                    <p className="font-medium">{item.title}</p>
                    <p>{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="shadow-md rounded-lg">
            <div className="bg-gray-500 text-white font-semibold text-lg px-4 py-2 rounded-t-lg">
              Pilih Pembayaran
            </div>
            <div className="bg-white p-4 rounded-b-lg">
              {["QRIS", "Convenience Store", "E-Wallet"].map((method, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg border mt-4">
                  <div className="text-[#54c0e4] font-semibold text-md">{method}</div>
                  <div className="bg-white border shadow-md rounded-lg p-4 mt-4 w-full md:w-64">
                    <p className="font-semibold text-sm">{method === "QRIS" ? "QR Code" : method}</p>
                    <p className="text-sm">Rp 1.429.763,00</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Promo Code */}
          <div className="shadow-md rounded-lg">
            <div className="bg-gray-500 text-white font-semibold text-lg px-4 py-2 rounded-t-lg">
              Kode Promo
            </div>
            <div className="bg-white p-4 rounded-b-lg">
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <input
                  type="text"
                  className="w-full rounded-lg border py-2 px-3"
                  placeholder="Kode Promo"
                />
                <button className="bg-[#54c0e4] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#3aa6c4] transition">
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* WhatsApp Number */}
          <div className="shadow-md rounded-lg">
            <div className="bg-gray-500 text-white font-semibold text-lg px-4 py-2 rounded-t-lg">
              Nomor WhatsApp
            </div>
            <div className="bg-white p-4 rounded-b-lg">
              <input
                type="text"
                className="w-full rounded-lg border py-2 px-3"
                placeholder="Cth: +62xxxxxxxxxx"
              />
              <div className="text-gray-500 text-sm pt-4">
                Isi nomor WhatsApp yang dapat dihubungi jika terjadi masalah.
              </div>
            </div>
          </div>

          {/* Order Button */}
          <div className="shadow-md rounded-lg">
            <button className="bg-[#54c0e4] text-white w-full py-2 rounded-lg font-semibold hover:bg-[#3aa6c4] transition">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSection;
