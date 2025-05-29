import { Link } from "@/i18n/navigation";

const TermsOfUse = () => {
    return (
        <div>
            <div className="hidden lg:flex items-center gap-2 p-[var(--spacing-07)] pb-[var(--spacing-09)]">
                <Link href="/" className="text-[var(--link-primary)]">Home</Link>
                <span>/</span>
                <Link href="/news">Terms of use</Link>
            </div>
            <h1 className="px-[var(--spacing-05)] sm:px-[var(--spacing-07)] pb-[var(--spacing-10)] pt-[var(--spacing-06)] lg:pt-0 text-[var(--text-primary)] fluid-display-01">Terms of use</h1>
            <div className="text-[var(--text-primary)] grid grid-cols-1 lg:grid-cols-[208px_1fr] px-[var(--spacing-05)] sm:px-[var(--spacing-07)] pt-[var(--spacing-05)] pb-[var(--spacing-11)] gap-[var(--spacing-07)]">
                <p className="heading-01">Date: May 18, 2025</p>
                <div className="space-y-[var(--spacing-09)]">
                    <div>
                        <h2 className="mb-4 fluid-heading-04">Overview</h2>
                        <p className="body-02">Welcome to the MEEC website. By accessing or using our website, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use our website.</p>
                    </div>
                    <div>
                        <h2 className="mb-4 fluid-heading-04">Use of the Website</h2>
                        <p className="body-02">You agree to use the website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else’s use of the website. Prohibited activities include, but are not limited to:</p>
                        <ul className="body-02 ps-6">
                            <li className="list-disc">Engaging in unauthorized access to our systems or networks.</li>
                            <li className="list-disc">Distributing viruses, malware, or other harmful code.</li>
                            <li className="list-disc">Using the website to transmit illegal, offensive, or inappropriate content.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-4 fluid-heading-04">Intellectual Property</h2>
                        <p className="body-02">All content on this website, including text, images, logos, and software, is the property of MEEC or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without prior written permission.</p>
                    </div>
                    <div>
                        <h2 className="mb-4 fluid-heading-04">User Content</h2>
                        <p className="body-02">If you submit content to our website (e.g., comments, reviews, or feedback), you grant MEEC a non-exclusive, royalty-free, worldwide license to use, modify, and display that content. You are responsible for ensuring your content is lawful and does not violate third-party rights.</p>
                    </div>
                    <div>
                        <h2 className="mb-4 fluid-heading-04">Accounts and Security</h2>
                        <p className="body-02">If you create an account on our website, you are responsible for maintaining the confidentiality of your account information and password. You agree to notify us immediately of any unauthorized use of your account.</p>
                    </div>
                    <div>
                        <h2 className="mb-4 fluid-heading-04">Limitation of Liability</h2>
                        <p className="body-02">The MEEC website is provided “as is” without warranties of any kind, express or implied. We do not guarantee that the website will be uninterrupted, error-free, or free from viruses. To the fullest extent permitted by law, MEEC is not liable for any direct, indirect, incidental, or consequential damages arising from your use of the website.</p>
                    </div>
                    <div>
                        <h2 className="mb-4 fluid-heading-04">Contact Us</h2>
                        <p className="body-02">
                            If you have questions or concerns about this Privacy Policy, please contact us at:<br />
                            Email: mmengrgp@gmail.com<br />
                            Phone: +95 9 123 456 789</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermsOfUse;