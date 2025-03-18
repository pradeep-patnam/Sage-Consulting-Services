'use client'
import { Calculator, KeyRound, FileCheck, SunSnow } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import React, { useEffect } from 'react';
import dotenv from "dotenv";

dotenv.config();

export default function TaxCompliancePage() {
  useEffect(() => {
    const navigateToParent = () => {
      const loadedEmbed = document.getElementById('loadedEmbed');

      if (loadedEmbed) {
        loadedEmbed.innerHTML = `
          <div style="padding-top: 30px;">
            <p style="font-size: 20px; font-weight: bold;">Your request has been submitted.</p>
          </div>
        `;
      }
    };

    const embedParams = {
      pegaServerUrl: 'https://complianceapproval-rok5k4-prod.pegalaunchpad.com',
      clientId: process.env.NEXT_PUBLIC_CLIENTID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENTSECRET,
      authorizeUri: 'https://complianceapproval-rok5k4-prod.pegalaunchpad.com/uas/oauth/authorize',
    };

    const loadPegaEmbed = () => {
      type CustomElement = HTMLElement & { load: () => void };
      const elDiv = document.getElementById('pegaEmbedContainer') as CustomElement;
      console.log('Element found:', elDiv);

      if (elDiv) {
        let pegaEmbedHTML = `
          <pega-embed
            id="theEmbed"
            action="createCase"
            assignmentHeader=false
            caseTypeID="GiftApproval"
            autoReauth="true"
            startingFields='{"Channel":"Application"}'
            pegaServerType="launchpad"
            pegaServerUrl="${embedParams.pegaServerUrl}"
            grantType="clientCreds"
            casePage="simplifiedAssignment"
            resumeOnReload="true"
            deferLoad="true"
            authorizeUri="${embedParams.authorizeUri}"
            clientId="${embedParams.clientId}"
            clientSecret="${embedParams.clientSecret}"
            style=""
        `;
        pegaEmbedHTML += `></pega-embed>`;
        elDiv.innerHTML = pegaEmbedHTML;
        const elEmbed = document.getElementById('theEmbed') as CustomElement;

        elEmbed.addEventListener('embedcaseclosed', navigateToParent);
        elEmbed.addEventListener('embedprocessingend', navigateToParent);
        elEmbed.addEventListener('embedeventcancel', navigateToParent);
        elEmbed.load();
      }
    };

    const loadScript = () => {
      if (!document.querySelector("script[src='https://lp.constellation.pega.com/integrated/react/prod/pega-embed.js']")) {
        const script = document.createElement('script');
        script.src = 'https://lp.constellation.pega.com/integrated/react/prod/pega-embed.js';
        script.async = true;
        script.onload = () => {
          loadPegaEmbed();
        };
        document.head.appendChild(script);
      } else {
        loadPegaEmbed();
      }
    };
    loadScript();
  }, []);

  return (
      <div className="flex flex-col min-h-screen">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                  Gift Compliance Portal
                </h1>
                <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                  Streamline your Gift compliance process with our comprehensive solutions
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Our Gift Compliance Services</h2>
                <p className="text-muted-foreground">
                  Comprehensive Gift compliance solutions designed to keep your business compliant and efficient.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <Calculator className="h-6 w-6 text-primary" />
                      <CardTitle>Regulatory Compliance</CardTitle>
                      <CardDescription>Avoid Legal Issues and Adherence to Policies</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card>
                    <CardHeader>
                      <FileCheck className="h-6 w-6 text-primary" />
                      <CardTitle>Transparency and Accountability</CardTitle>
                      <CardDescription>Clear Records and Audit Trails</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card>
                    <CardHeader>
                      <SunSnow className="h-6 w-6 text-primary" />
                      <CardTitle>Efficiency and Automation</CardTitle>
                      <CardDescription>Streamlined Processes and Real-Time Checks</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card>
                    <CardHeader>
                      <KeyRound className="h-6 w-6 text-primary" />
                      <CardTitle>Employee Empowerment</CardTitle>
                      <CardDescription>Easy Access and Educational Tool</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </div>
              <div id="tax-portal">
                <div>
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">Gift Compliance Portal</h3>
                  <p></p>
                </div>
                <div id="loadedEmbed">
                         <div id="pegaEmbedContainer" className="h-full w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}