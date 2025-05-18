import { Link } from "@/i18n/navigation";

const Privacy = () => {
    return (
        <div>
            <div className="hidden lg:flex items-center gap-2 p-[var(--spacing-07)] pb-[var(--spacing-09)]">
                <Link href="/" className="text-[var(--link-primary)]">Home</Link>
                <span>/</span>
                <Link href="/news">News & Blogs</Link>
            </div>
            <h1 className="px-[var(--spacing-05)] sm:px-[var(--spacing-07)] pb-[var(--spacing-10)] pt-[var(--spacing-06)] lg:pt-0 text-[var(--text-primary)] fluid-display-01">Privacy</h1>
            <div className="text-[var(--text-primary)] grid grid-cols-1 lg:grid-cols-[208px_1fr] px-[var(--spacing-05)] sm:px-[var(--spacing-07)] pt-[var(--spacing-05)] pb-[var(--spacing-11)] gap-[var(--spacing-07)]">
                <p className="heading-01">Date: May 18, 2025</p>
                <div className="space-y-[var(--spacing-09)]">
                    <div>
                        <h2 className="mb-4 fluid-heading-04">Overview</h2>
                        <p className="body-02">Welcome to the MEEC website. We are committed to protecting your personal information and providing you with a secure and trustworthy experience. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website.</p>
                    </div>
                    <div>
                        <h2 className="mb-4 fluid-heading-04">Information We Collect</h2>
                        <p className="body-02">We may collect the following types of information:</p>
                        <ul className="body-02 ps-6">
                            <li className="list-disc">Personal Information: Name, email address, phone number, or other details you provide when contacting us or registering on our site.</li>
                            <li className="list-disc">Usage Data: Information about how you interact with our website, such as IP address, browser type, pages visited, and time spent on the site.</li>
                            <li className="list-disc">Cookies: Small data files stored on your device to enhance your experience, track usage, and provide personalized content.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-4 fluid-heading-04">How We Use Your Information</h2>
                        <p className="body-02">Your information may be used to:</p>
                        <ul className="body-02 ps-6">
                            <li className="list-disc">Provide and improve our services.</li>
                            <li className="list-disc">Respond to your inquiries or customer service requests.</li>
                            <li className="list-disc">Send you updates, newsletters, or promotional materials (with your consent).</li>
                            <li className="list-disc">Analyze website usage to enhance functionality and user experience.</li>
                            <li className="list-disc">Comply with legal obligations.</li>
                        </ul>

                    </div>
                    <div>
                        <h2 className="mb-4 fluid-heading-04">Sharing Your Information</h2>
                        <p className="body-02">We do not sell or rent your personal information. We may share your information with:</p>
                        <ul className="body-02 ps-6">
                            <li className="list-disc">Service Providers: Third parties that assist with website operations, such as hosting or analytics, under strict confidentiality agreements.</li>
                            <li className="list-disc">Legal Authorities: If required by law or to protect our rights, safety, or property.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-4 fluid-heading-04">Cookies and Tracking Technologies</h2>
                        <p className="body-02">We use cookies to improve your browsing experience. You can manage cookie preferences through your browser settings. Disabling cookies may affect certain website features.</p>
                    </div>
                    <div>
                        <h2 className="mb-4 fluid-heading-04">Data Security</h2>
                        <p className="body-02">We implement reasonable security measures to protect your information from unauthorized access, alteration, or disclosure. However, no online platform can guarantee absolute security.</p>
                    </div>
                    <div>
                        <h2 className="mb-4 fluid-heading-04">Third-Party Links</h2>
                        <p className="body-02">Our website may contain links to third-party sites. We are not responsible for their privacy practices and encourage you to review their policies.</p>
                    </div>
                    <div>
                        <h2 className="mb-4 fluid-heading-04">Contact Us</h2>
                        <p className="body-02">If you have questions or concerns about this Privacy Policy, please contact us at:
                            Email: meec@gmail.comAddress: +95 9 123 456 789</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Privacy;