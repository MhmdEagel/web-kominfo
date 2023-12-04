import React from "react";

export default function Profile() {
  return (
    <>
      <section className=" ml-4 mt-24 flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-center">
        <div className="">
          <img
            src="/profile/gedungKominfo.jpg"
            alt="Gedung kominfo"
            className="w-[300px] rounded-lg shadow-xl md:w-full"
          />
        </div>
        <div className="mt-8 w-fit max-w-[22rem] font-bold">
          <p className="sm:text-lg">
            <span className="font-bold text-blue-500">KOMINFO</span> Bersinergi
            Untuk
          </p>
          <p className="sm:text-lg">Memberikan Pelayanan Yang Terbaik</p>
          <p className="mt-2 text-justify text-sm font-normal sm:text-base">
            Kementerian Komunikasi dan Informatika mempunyai tugas
            menyelenggarakan urusan pemerintahan di bidang komunikasi dan
            informatika untuk membantu Presiden dalam menyelenggarakan
            pemerintahan negara.
          </p>
          <div className="mt-3 flex gap-4 border bg-white p-4 text-sm shadow-lg">
            <div className="text-center">
              <p className="font-bold">2500+</p>
              <p className="text-xs">Situs diblokir</p>
            </div>
            <div className="text-center">
              <p className="font-bold">500+</p>
              <p className="text-xs">Situs terdaftar</p>
            </div>
            <div className="text-center">
              <p className="font-bold">10+</p>
              <p className="text-xs">Kejahatan cyber</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mb-64 mt-32 flex w-fit flex-col gap-32 lg:flex-row">
        <div className="relative mx-auto h-fit max-w-sm rounded-lg bg-blue-600 px-4 pb-4 text-white lg:max-w-lg lg:py-[1.5rem] lg:pl-[11rem] lg:pr-6">
          <img
            src="/profile/menteri.png"
            alt="Menteri Komunikasi dan Informatika"
            className="mx-auto mb-4 w-[250px] lg:absolute lg:-left-[6rem] lg:-top-14 lg:mb-0"
          />
          <h3 className="font-bold">Budi Arie Setiadi S.Sos., M.Si.</h3>
          <h4 className="font-bold">Menteri Komunikasi dan Infomatika</h4>
          <p className="mt-2 text-justify text-sm">
            Budi Arie Setiadi, lahir tanggal 20 April 1969. Lulusan Jurusan Ilmu
            Komunikasi FISIP Universitas Indonesia (1996) dan Program
            Pascasarjana Manajemen Pembangunan Sosial Universitas Indonesia
            (2006). Pernah menjabat sebagai Wakil Menteri Menteri Desa,
            Pembangunan Daerah Tertinggal dan Transmigrasi Indonesia
            (2019-2023).
          </p>
        </div>
        <div className="relative mx-auto lg:mt-16 max-w-sm bg-blue-600 px-4 text-white lg:max-w-lg rounded-lg lg:py-[1.5rem] lg:pl-[10rem] lg:pr-6 pb-4">
          <img
            src="/profile/wakilMenteri.png"
            alt="Menteri Komunikasi dan Informatika"
            className="mx-auto mb-4 w-[250px] lg:absolute lg:-left-[6rem] lg:-top-14 lg:mb-0"
          />
          <h3 className="font-bold">Nezar Patria S.FIL., M.SC., M.B.A</h3>
          <h4 className="font-bold">
            Wakil Menteri Komunikasi dan Informatika
          </h4>
          <p className="mt-2 text-sm">
            Nezar Patria, lahir tanggal 5 Oktober 1970 dikenal sebagai wartawan,
            aktivis, dan penyair, Sebelumnya pernah menjabat sebagai Staf Khusus
            V Bidang Komunikasi Menteri Badan Usaha Milik Negara Indonesia
            (2022-2023).
          </p>
        </div>
      </section>
    </>
  );
}
