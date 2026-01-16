"use client";

import Header from "@/components/Header";
import ScrollBar from "@/components/ScrollBar";
import About from "@/components/sections/About";
import Blog from "@/components/sections/Blog";
import Clients from "@/components/sections/Clients";
import Contact from "@/components/sections/Contact";
import Copyright from "@/components/sections/Copyright";
import Facts from "@/components/sections/Facts";
import Home from "@/components/sections/Home";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Separator from "@/components/Separator";
import Switcher from "@/components/Switcher";
import { jqueryFunction } from "@/lib/utils";
import { Fragment, useEffect, useState } from "react";

export default function Index() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    jqueryFunction();
  }, [mounted]);

  if (!mounted) return null;

  return (
    <Fragment>
      <Switcher />
      
      <div className="page-content">
        <Header />
        <div id="wrapper">
          <main className="flex-column-mobile">
            <Home />
            <About />
            <Separator type={"down"} />
            <Facts />
            <Separator type={"up"} />
            <Portfolio />
            <Separator type={"down"} />
            <Testimonials />
            <Separator type={"up"} />
            <Contact />
            <Separator type={"down"} />
            <Clients />
            <Separator type={"up"} />
            <Blog />
            <Separator type={"down"} />
            <Copyright />
          </main>
        </div>
        <ScrollBar />
      </div>
    </Fragment>
  );
}
