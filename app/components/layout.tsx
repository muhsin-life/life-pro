"use client"
import Navbar from "./navbar"
import Footer from "./footer"

import { Toaster } from 'react-hot-toast'
import { useState } from "react"
import { Providers } from "../redux/providers"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Layout({ children, data, brands_data, sessionServ, isArabic, lang, langData }) {
  function searchButtonOnLeave(e) {
    if (!e.target.parentNode.classList.contains("group-search")) {
      document.getElementsByClassName("lg-screen-searchsuggestion-lg")[0].classList.add("hidden");
      (document.getElementById("lg-screen-search") as HTMLInputElement).classList.remove("rounded-t-xl");
      (document.getElementById("lg-screen-search") as HTMLInputElement).classList.add("rounded-xl");
    }
  }
  function languageClickedToast() {
    setTimeout(() => {
      toast.info('Language Changed Successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored"
      });

    }, 1500);
  }

  return (
    <Providers>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      />
      <section onMouseDown={(e) => { searchButtonOnLeave(e) }}>
        <Navbar data={data} brands_data={brands_data} sessionServ={sessionServ} isArabic={isArabic} lang={lang} langData={langData} languageClickedToast={languageClickedToast} />
        <main>{children}</main>
        <Footer langData={langData} />
      </section>
    </Providers>
  )
}


