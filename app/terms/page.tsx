import type { Metadata } from "next"
import Link from "next/link"
import { LegalPage, LegalSection } from "@/components/legal-page"
import { SiteFooter } from "@/components/site-footer"
import { appUrl, contactEmail, siteName, siteUrl } from "@/lib/site"

const lastUpdated = "12 June 2026"

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms and conditions for using ${siteName} website and adoption matching application.`,
  alternates: {
    canonical: "/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <>
      <LegalPage title="Terms of Use" lastUpdated={lastUpdated}>
        <p>
          These Terms of Use (&quot;Terms&quot;) govern your access to and use of the {siteName}{" "}
          website at <a href={siteUrl}>{siteUrl}</a> and web application at{" "}
          <a href={appUrl}>{appUrl}</a> (together, the &quot;Services&quot;), operated by{" "}
          {siteName} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
        </p>
        <p>
          By accessing or using the Services, you agree to these Terms. If you do not agree, do
          not use the Services. If you are using the Services on behalf of an organisation, you
          represent that you have authority to bind that organisation.
        </p>

        <LegalSection title="1. Eligibility">
          <p>
            You must be at least 16 years old to create an account and use the app features. By
            using the Services, you confirm that you meet this requirement and that any
            information you provide is accurate and complete.
          </p>
        </LegalSection>

        <LegalSection title="2. Our services">
          <p>
            {siteName} provides a platform to discover adoptable dogs from shelters and adoption
            partners, receive match suggestions, and connect with those organisations. We facilitate
            introductions but are not a shelter, breeder, or adoption agency.
          </p>
          <p>
            Adoption decisions, home checks, fees, contracts, and animal welfare responsibilities
            remain solely between you and the relevant shelter or adoption partner. We do not
            guarantee that any dog listed will be available for adoption.
          </p>
        </LegalSection>

        <LegalSection title="3. Accounts and security">
          <p>
            You are responsible for maintaining the confidentiality of your account credentials
            and for all activity under your account. Notify us immediately at{" "}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a> if you suspect unauthorised
            access.
          </p>
          <p>
            We may suspend or terminate accounts that violate these Terms or pose a risk to the
            Services, users, or animals.
          </p>
        </LegalSection>

        <LegalSection title="4. Acceptable use">
          <p>You agree not to:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Use the Services for any unlawful purpose or in violation of applicable EU or national law</li>
            <li>Provide false, misleading, or harmful information in your profile or communications</li>
            <li>Harass, abuse, or harm shelters, partners, other users, or animals</li>
            <li>Scrape, copy, reverse engineer, or attempt to extract data from the Services without permission</li>
            <li>Interfere with the security, integrity, or availability of the Services</li>
            <li>Use the platform for commercial resale, breeding, or purposes unrelated to responsible adoption</li>
          </ul>
        </LegalSection>

        <LegalSection title="5. Content and intellectual property">
          <p>
            The Services, including software, design, branding, text, and graphics (excluding
            user-generated content and third-party shelter listings), are owned by or licensed to
            {siteName} and protected by intellectual property laws.
          </p>
          <p>
            Dog profiles, photos, and descriptions may be provided by third-party shelters and
            partners. You may not reproduce or distribute such content outside the Services without
            the rights holder&apos;s permission.
          </p>
          <p>
            You retain ownership of content you submit. You grant us a limited licence to host,
            display, and process that content solely to operate and improve the Services.
          </p>
        </LegalSection>

        <LegalSection title="6. Third-party services and links">
          <p>
            The Services may link to or integrate with third-party websites, shelters, payment
            providers, or tools. We are not responsible for third-party content, policies, or
            practices. Your use of third-party services is at your own risk and subject to their
            terms.
          </p>
        </LegalSection>

        <LegalSection title="7. Donations and paid features">
          <p>
            Donations made through linked fundraising pages (such as GoFundMe) are handled by the
            respective third-party platform under their terms. If we introduce paid features in the
            future, pricing and billing terms will be presented clearly before purchase, in
            compliance with applicable consumer protection law.
          </p>
        </LegalSection>

        <LegalSection title="8. Disclaimers">
          <p>
            The Services are provided on an &quot;as is&quot; and &quot;as available&quot; basis
            to the extent permitted by law. We do not warrant uninterrupted or error-free
            operation, or that listings are always accurate, current, or complete.
          </p>
          <p>
            Nothing in these Terms excludes or limits warranties or rights that cannot be excluded
            under mandatory EU consumer protection law.
          </p>
        </LegalSection>

        <LegalSection title="9. Limitation of liability">
          <p>
            To the fullest extent permitted by applicable law, {siteName} and its founders,
            employees, and partners shall not be liable for indirect, incidental, special,
            consequential, or punitive damages, or for loss of profits, data, or goodwill arising
            from your use of the Services.
          </p>
          <p>
            Our total liability for any claim relating to the Services is limited to the greater of
            (a) the amount you paid us in the twelve months before the claim, or (b) EUR 100,
            except where liability cannot be limited under mandatory law — including for death or
            personal injury caused by negligence, fraud, or other rights that EU consumers cannot
            contractually waive.
          </p>
        </LegalSection>

        <LegalSection title="10. Indemnity">
          <p>
            You agree to indemnify and hold harmless {siteName} from claims, damages, and expenses
            arising from your misuse of the Services or breach of these Terms, except where
            prohibited by applicable law.
          </p>
        </LegalSection>

        <LegalSection title="11. Termination">
          <p>
            You may stop using the Services at any time and may request account deletion by
            contacting <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. We may suspend or
            terminate access if you breach these Terms or where required for legal or safety
            reasons.
          </p>
          <p>
            Provisions that by their nature should survive termination (including intellectual
            property, disclaimers, limitation of liability, and governing law) will continue to
            apply.
          </p>
        </LegalSection>

        <LegalSection title="12. Governing law and disputes">
          <p>
            These Terms are governed by the laws of the European Union and the member state in which
            {siteName} is established, without regard to conflict-of-law rules.
          </p>
          <p>
            If you are a consumer resident in the EU, you benefit from mandatory protections of the
            laws of your country of residence. You may bring proceedings in the courts of your
            place of residence or use the European Commission&apos;s Online Dispute Resolution
            platform at{" "}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
              ec.europa.eu/consumers/odr
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection title="13. Changes to these Terms">
          <p>
            We may update these Terms from time to time. The updated version will be posted on this
            page with a revised &quot;Last updated&quot; date. Continued use of the Services after
            changes take effect constitutes acceptance, except where applicable law requires your
            explicit consent.
          </p>
        </LegalSection>

        <LegalSection title="14. Privacy">
          <p>
            Our collection and use of personal data is described in our{" "}
            <Link href="/privacy">Privacy Policy</Link>, which forms part of your agreement with
            us and is designed to comply with the GDPR.
          </p>
        </LegalSection>

        <LegalSection title="15. Contact">
          <p>
            Questions about these Terms? Contact us at{" "}
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
