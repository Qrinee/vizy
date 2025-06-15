import React from 'react';
import './CookiesPolicy.css';
import Header from '../components/Header/Header';

export default function Cookies() {
  return (
    <>
      <Header />
      <div className="cookies-policy">
        <h1>Cookies Policy</h1>
        
        <section>
          <p>
            We would like to clarify that the terms <strong>"we"</strong> refer to enterprise company DYZMAS sp. z o.o.
            with its seat in Wieliczka, POLAND (Tax ID: PL6793205147, hereinafter: <strong>« DYZMAS »</strong>).
          </p>
          <p>
            This service (hereinafter the <strong>« Service »</strong>) is subject to the Terms of Use, our Privacy Policy
            and this Cookies Policy (all documents are available on the Service&#39;s website).
          </p>
        </section>

        <section>
          <p>
            In the present document, you will discover what exactly are the cookies, how we use them
            to operate the Service&#39;s website, and how you can manage your cookie settings.
          </p>
          <p>
            Keep in mind that all modern Internet browsers allow changing cookie settings. These
            settings are usually available in the "options" or "preferences" menu of your browser.
            The following pages can help you better understand these settings. You can also consult
            the help of your browser:
          </p>
          <ul className="browser-links">
            <li><a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer">Cookie settings in Internet Explorer</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer">Cookie settings in Firefox</a></li>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Cookie settings in Chrome</a></li>
            <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer">Cookie settings in Safari</a></li>
          </ul>
          <p>
            If you want to see the code of a cookie, simply open the file in your browser and click on a
            cookie to open it. You will see text and numbers. The numbers are your identifier, which
            can only be seen by the server that provided you with the cookie you see. To learn how to
            do this on your device, see its user guide.
          </p>
        </section>

        <section>
          <h2>What is a cookie?</h2>
          <p>
            A cookie is a text file sent to the web browser from your computer, laptop, tablet or any
            other device and used to store and retrieve information about the performed navigation.
          </p>
          <p>
            Cookies can contain many useful information: purely technical information such as data
            about your browsing preferences or information about your browsing. In any case, we only
            use cookies necessary to provide our services, to improve them or useful to our secure
            providers for the provision of their services (such as secure payment providers, through
            which you make payments on our website). Your data is not resold or processed for
            advertising purposes for third parties. They are transferred only to the subcontractors,
            involved in the provision of our services which you can enjoy on the website of our Service.
          </p>
        </section>

        <section>
          <h2>What types of cookies we use on the website of our Service?</h2>
          <p>
            Below, you will find the cookies we use, with a short description of their usefulness, but
            also indications on how to oppose, if possible, to the use of these cookies if this is your
            wish.
          </p>
          <p>
            On the website of our Service we use several types of cookies that we will delimit and
            classify below to simplify and make possible your understanding of this technical process.
          </p>
          
          <h3>Classification by Purpose</h3>
          <div className="cookie-types">
            <div className="type-card">
              <h4>Technical Cookies</h4>
              <p>Improve navigation and proper functioning of our website</p>
            </div>
            <div className="type-card">
              <h4>Personalization Cookies</h4>
              <p>Allow access with predefined characteristics based on criteria</p>
            </div>
            <div className="type-card">
              <h4>Analytical Cookies</h4>
              <p>Measure and analyze statistical use of the service</p>
            </div>
          </div>
          
          <h3>Classification by Collection Source</h3>
          <div className="cookie-types">
            <div className="type-card">
              <h4>First-party Cookies</h4>
              <p>Sent from our equipment or web domains</p>
            </div>
            <div className="type-card">
              <h4>Third-party Cookies</h4>
              <p>Sent from devices managed by third-party entities</p>
            </div>
          </div>
          
          <h3>Classification by Duration</h3>
          <div className="cookie-types">
            <div className="type-card">
              <h4>Session Cookies</h4>
              <p>Remain active until you leave our website</p>
            </div>
            <div className="type-card">
              <h4>Persistent Cookies</h4>
              <p>Remain on your device for future visits</p>
            </div>
          </div>
          
          <p>
            Below, we present you a list of the service providers that are carried out through our
            website, which use cookies files.
          </p>
          <p>
            On the website of our Service we may use third-party cookies. Third-party cookies are used
            by third-party organizations that provide us with different services. For example, we use
            the services of outside analysts, who use cookies on our behalf to identify the most visited
            pages and those that are less visited. The website you visit may also include content from
            third-party websites - these websites may use their own cookies.
          </p>
          
          <div className="cookies-table-container">
            <table>
              <thead>
                <tr>
                  <th>Cookie Provider</th>
                  <th>Purpose</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Google Analytics</td>
                  <td>Audience measurement solution</td>
                  <td>Technical/Analytical</td>
                  <td className="accepted">Accepted by default</td>
                  <td>Configured to comply with CNIL recommendations</td>
                </tr>
                <tr>
                  <td>OneSignal</td>
                  <td>Personalized notifications</td>
                  <td>Functional</td>
                  <td className="refused">Refused by default</td>
                  <td>Provider certified - Privacy Shield</td>
                </tr>
                <tr>
                  <td>FullStory</td>
                  <td>Track site usage</td>
                  <td>Functional</td>
                  <td className="refused">Refused by default</td>
                  <td>Provider certified - Privacy Shield</td>
                </tr>
                <tr>
                  <td>Logrocket</td>
                  <td>Bug investigation</td>
                  <td>Functional</td>
                  <td className="refused">Refused by default</td>
                  <td>Provider certified - Privacy Shield</td>
                </tr>
                <tr>
                  <td>Facebook</td>
                  <td>Relevant advertising</td>
                  <td>Advertising</td>
                  <td className="refused">Refused by default</td>
                  <td>Provider certified - Privacy Shield</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Compliance with Regulations</h2>
          <p>
            We need to measure the audience of our site, especially to detect navigation problems and
            organize our content. We chose the Google Analytics solution, which uses cookies.
            Following the deliberation of the CNIL of December 5, 2013 n ° 2013-378, we have taken
            the following measures to benefit from the exemption to the collection of consent:
          </p>
          <ul>
            <li>The possibility that you are granted to oppose this cookie at any time</li>
            <li>Configuration ensures collected data are not cross-checked with other treatments</li>
            <li>The cookie does not make possible to follow navigation on other websites</li>
            <li>Configuration ensures production of anonymous statistics (IP anonymization)</li>
            <li>Processing of cookie data is limited to 12 months</li>
          </ul>
        </section>

        <section>
          <h2>Managing Your Cookie Preferences</h2>
          <p>
            You can set general choices about cookies by changing the settings of your Internet
            browser. Depending on the type of browser, you will have the following options: accept or
            reject cookies of any origin or a given source or schedule a message asking for your
            consent, each time a cookie is placed on your terminal.
          </p>
          <p>
            You can visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">www.aboutcookies.org</a> which contains information on how to change cookie
            settings in many browsers.
          </p>
          <p className="warning">
            Remember that your cookie usage settings may impact the functionality of the website of
            our Service.
          </p>
        </section>

        <section>
          <h2>Benefits of Allowing Cookies</h2>
          <p>
            The authorization of cookies could be useful for several reasons:
          </p>
          <ul>
            <li>Improves your experience on our Service</li>
            <li>Helps calculate user numbers to optimize service capacity</li>
            <li>Allows analysis to understand how visitors interact with our services</li>
            <li>Enables recognition of your device so you don't need to repeat information</li>
            <li>Helps us detect and resolve technical issues faster</li>
          </ul>
        </section>
      </div>
    </>
  );
}