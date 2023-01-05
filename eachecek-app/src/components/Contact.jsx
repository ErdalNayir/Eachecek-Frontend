import React from "react";

function Contact() {
  return (
    <section className="w-100" id="contact">
      <footer className="bg-[#333333] flex flex-col pt-20 pl-40 pb-20">
        <h2 className="font-bold text-4xl font-serif text-[#eeeeee]">
          eachecek
        </h2>
        <div className="flex flex-row mt-10">
          <div className="mr-40">
            <h3 className="font-bold text-[#eeeeee] text-1xl">Adres</h3>
            <p className="w-40 text-[#eeeeee] text-sm">
              Mimarsinan Mahallesi, Mimar Sinan Bulvarı, Eflak Cd. No:177, 16310
              Yıldırım
            </p>
          </div>
          <div>
            <div className="font-bold text-[#eeeeee] text-1xl">Telefon</div>
            <p className="w-40 text-[#eeeeee] text-base">444 6 072</p>
          </div>
        </div>
      </footer>
      <footer className="flex flex-row justify-center items-end bg-[#292929] p-8">
        <div className="text-base text-[#777777]">Tüm Hakları Saklıdır </div>
      </footer>
    </section>
  );
}

export default Contact;
