import type { Metadata } from "next"
import { LegalPage, LegalSection } from "@/components/legal-page"
import { SiteFooter } from "@/components/site-footer"
import { appUrl, contactEmail, siteName, siteUrl } from "@/lib/site"

const lastUpdated = "18 September 2026"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteName} collects, uses, and protects your personal data in accordance with the GDPR and EU data protection law.`,
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <>
      <LegalPage title="Privacy Policy" lastUpdated={lastUpdated}>
        <p>
          This Privacy Policy explains how {siteName} (&quot;we&quot;, &quot;us&quot;, or
          &quot;our&quot;) collects and processes personal data when you use our website at{" "}
          <a href={siteUrl}>{siteUrl}</a>, our web application at{" "}
          <a href={appUrl}>{appUrl}</a>, and our mobile application (together, the
          &quot;Services&quot;).
        </p>
        <p>
          We process personal data in accordance with the General Data Protection Regulation
          (EU) 2016/679 (&quot;GDPR&quot;), the UK GDPR where applicable, and other applicable
          European data protection laws.
        </p>

        <LegalSection title="1. Data controller">
          <p>
            The data controller responsible for your personal data is {siteName}. For any
            privacy-related questions or to exercise your rights, contact us at{" "}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>
        </LegalSection>

        <LegalSection title="2. Personal data we collect">
          <p>Depending on how you use the Services, we may collect the following categories of data:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Account and authentication data:</strong> name, email address, password
              (stored in hashed form), country and city, and email verification or password-reset
              codes. We currently offer email-and-password registration only (no social login).
            </li>
            <li>
              <strong>Profile and adoption preference data:</strong> phone number, bio, profile
              photo, uploaded documents (such as references or adoption-related files), lifestyle
              preferences, and living-condition information you choose to provide (for example
              housing type, yard, other pets, household children and their ages, dog experience,
              work schedule, employment status, and income range).
            </li>
            <li>
              <strong>Location data:</strong> city/country you enter and, where you use map or
              location features, approximate coordinates derived from geocoding.
            </li>
            <li>
              <strong>Usage and interaction data:</strong> swipes (likes and dislikes), matches,
              favourites or pins, and in-app activity related to browsing adoptable dogs.
            </li>
            <li>
              <strong>Communication data:</strong> messages you send to shelters or adoption
              partners through the app, and messages or emails you send us for support. Shelter
              replies may be received by email and shown in your in-app chat.
            </li>
            <li>
              <strong>Technical data:</strong> IP address and device or browser information
              (including for security events such as admin login alerts), session tokens, and
              standard server logs generated when you access the Services.
            </li>
            <li>
              <strong>Cookie and similar technology data:</strong> as described in Section 9
              below.
            </li>
          </ul>
          <p>
            We do not intentionally collect special categories of personal data (such as health
            data) unless you voluntarily provide such information in your profile or in
            communications with shelters. Please only share information that is necessary for
            adoption purposes.
          </p>
        </LegalSection>

        <LegalSection title="3. How we use your data and legal bases">
          <p>We use personal data only where we have a valid legal basis under the GDPR:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Performance of a contract (Art. 6(1)(b)):</strong> to create and manage
              your account, verify your email, provide matching and messaging features, and
              facilitate contact with adoption partners.
            </li>
            <li>
              <strong>Legitimate interests (Art. 6(1)(f)):</strong> to improve and secure the
              Services, prevent fraud and abuse, operate email bridging with shelters, analyse
              aggregated usage, and communicate important service updates — balanced against your
              rights and freedoms.
            </li>
            <li>
              <strong>Consent (Art. 6(1)(a)):</strong> for optional marketing communications and
              any non-essential cookies where required. You may withdraw consent at any time.
            </li>
            <li>
              <strong>Legal obligation (Art. 6(1)(c)):</strong> where we must comply with
              applicable law, regulatory requests, or court orders.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="4. Automated decision-making and profiling">
          <p>
            Our matching features may use automated processing to suggest dogs that may fit your
            stated preferences and lifestyle. This profiling is intended to improve your
            experience and does not produce legal or similarly significant effects on you without
            human involvement in the adoption process itself.
          </p>
          <p>
            We may also use automated tools to help classify or translate shelter communications
            so they can be shown in the app. Final adoption decisions remain with the relevant
            shelter or adoption partner.
          </p>
          <p>
            You have the right to object to profiling used for direct marketing and, in certain
            cases, to request human review of automated decisions that significantly affect you.
            Contact us at <a href={`mailto:${contactEmail}`}>{contactEmail}</a> to exercise this
            right.
          </p>
        </LegalSection>

        <LegalSection title="5. Who we share data with">
          <p>We may share personal data with:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Adoption partners and shelters</strong> when you express interest in a dog
              or initiate contact through the app. Depending on what you have provided, this may
              include your name, email, phone number, location, bio, living conditions,
              preferences, documents, and profile photo, as well as the content of your messages.
              Message content may be sent by email to the shelter, and shelter replies may be
              retrieved by email into your chat.
            </li>
            <li>
              <strong>Shelter data providers</strong> such as Animal Care Austria, which supply
              adoptable dog listings that appear in the Services.
            </li>
            <li>
              <strong>Service providers (processors)</strong> who help us host, operate, or
              support the Services — including cloud hosting, database hosting, email delivery,
              and map/geocoding providers — under arrangements that meet GDPR requirements where
              applicable.
            </li>
            <li>
              <strong>Authorities</strong> where required by law or to protect rights, safety, and
              security.
            </li>
          </ul>
          <p>
            Other users of the app cannot browse your profile. Matching is between you and
            adoptable dogs / shelters, not between end users.
          </p>
          <p>We do not sell your personal data.</p>
        </LegalSection>

        <LegalSection title="6. International transfers">
          <p>
            Our application infrastructure is primarily hosted in Switzerland (currently on
            Exoscale in the Geneva region). Database and email providers may process data in the
            EEA, Switzerland, or other countries depending on configuration.
          </p>
          <p>
            If we transfer personal data outside the EEA, UK, or Switzerland to a country without
            an adequacy decision, we ensure appropriate safeguards are in place, such as Standard
            Contractual Clauses approved by the European Commission, unless another valid transfer
            mechanism applies.
          </p>
        </LegalSection>

        <LegalSection title="7. Data retention">
          <p>
            We retain personal data only for as long as necessary for the purposes described in
            this policy, including to comply with legal obligations and resolve disputes.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Account and profile data is kept while your account is active.</li>
            <li>
              After you delete your account, we delete or anonymise personal data held in our
              systems within a reasonable period, except where retention is required by law or for
              legitimate legal claims.
            </li>
            <li>
              Information already shared with shelters by email (including interest notifications
              and chat messages) may remain in their inboxes outside our control.
            </li>
            <li>Technical logs are typically retained for a limited period for security purposes.</li>
          </ul>
        </LegalSection>

        <LegalSection title="8. Your rights under the GDPR">
          <p>
            If you are in the EEA, UK, Switzerland, or another jurisdiction with similar rights,
            you may have the right to:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Access your personal data and receive a copy (Art. 15)</li>
            <li>Rectify inaccurate or incomplete data (Art. 16)</li>
            <li>Erase your data in certain circumstances (Art. 17)</li>
            <li>Restrict processing in certain circumstances (Art. 18)</li>
            <li>Data portability for data you provided (Art. 20)</li>
            <li>Object to processing based on legitimate interests (Art. 21)</li>
            <li>Withdraw consent at any time, without affecting prior lawful processing</li>
            <li>
              Lodge a complaint with your local data protection supervisory authority. A list of EU
              authorities is available at{" "}
              <a
                href="https://edpb.europa.eu/about-edpb/about-edpb/members_en"
                target="_blank"
                rel="noopener noreferrer"
              >
                edpb.europa.eu
              </a>
              .
            </li>
          </ul>
          <p>
            You can update much of your profile data in the app, and you may delete your account
            from your profile settings where available. To exercise your rights, email{" "}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. We will respond within one
            month, as required by the GDPR, and may request information to verify your identity.
          </p>
        </LegalSection>

        <LegalSection title="9. Cookies and similar technologies">
          <p>
            On the web application we use essential cookies and similar technologies necessary for
            the Services to function — in particular authentication session cookies. The mobile
            app stores session tokens locally on your device instead of cookies.
          </p>
          <p>
            We do not currently use third-party advertising or analytics cookies on the swipe
            application. Map and geocoding features may load content from OpenStreetMap /
            Nominatim, which can involve network requests from your browser or device.
          </p>
          <p>
            Where we introduce non-essential cookies (such as analytics or marketing) in the
            future, we will request your consent before placing them, in line with the ePrivacy
            Directive and applicable national laws. You can manage cookies through your browser
            settings; blocking essential cookies may affect how the Services work.
          </p>
        </LegalSection>

        <LegalSection title="10. Children">
          <p>
            The Services are not directed at children under 16. We do not knowingly collect
            personal data from children under 16 without parental consent. Profile questions about
            household children (for example ages of children living with you) relate to adoption
            suitability and are about your household, not registration of child users. If you
            believe we have collected data from a child user, please contact us and we will take
            steps to delete it.
          </p>
        </LegalSection>

        <LegalSection title="11. Security">
          <p>
            We implement appropriate technical and organisational measures to protect personal
            data against unauthorised access, alteration, disclosure, or destruction, including
            hashed passwords, HTTPS, and access controls for administrative accounts. No method of
            transmission over the internet is completely secure, and we cannot guarantee absolute
            security.
          </p>
        </LegalSection>

        <LegalSection title="12. Changes to this policy">
          <p>
            We may update this Privacy Policy from time to time. We will post the updated version
            on this page and update the &quot;Last updated&quot; date. Where changes are
            material, we will provide additional notice where required by law.
          </p>
        </LegalSection>

        <LegalSection title="13. Contact">
          <p>
            For privacy enquiries or to exercise your data protection rights, contact us at{" "}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>
        </LegalSection>
      </LegalPage>
      <div className="bg-[#d2ebeb] pb-12">
        <SiteFooter />
      </div>
    </>
  )
}
