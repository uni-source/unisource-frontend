import React from 'react';
import Topic from '../topics/topics';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
    return (
        <>
            <div className="Terms-Header-inner">
                <Topic message='Terms & Conditions' />
            </div>
            <div className="terms-outer">
                <div className="terms-inner">
                    <h5>1. Acceptance of Terms</h5>
                    <p>By accessing or using the UniSource platform, you agree to comply with and be bound by these Terms of Use. If you do not agree with these terms, you are prohibited from using or accessing this site.</p>
                    <h5>2. Eligibility</h5>
                    <p>All users must meet the eligibility criteria as specified in the respective sections for undergraduates, organizations, and freelancers.</p>
                    <h5>3. Account Registration</h5>
                    <p>Users must create an account to participate in the platform. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>
                    <h5>4. User Conduct</h5>
                    <p>Users agree to use the platform in a manner consistent with all applicable laws and regulations. Users are prohibited from posting or transmitting any content that is unlawful, threatening, abusive, defamatory, or otherwise offensive.</p>
                    <h5>5. Intellectual Property</h5>
                    <p>All content submitted to the platform, including code, documentation, and other materials, must comply with the applicable open source licenses. Users retain ownership of their contributions, but grant the platform and its users a license to use, modify, and distribute such content as part of the collaborative projects.</p>
                    <h5>6. Project Contributions</h5>
                    <p>Undergraduates, organizations, and freelancers are expected to adhere to the project guidelines and standards set by the project maintainers. Contributions should be meaningful, respectful, and in alignment with the project's goals.</p>
                    <h5>7. Privacy Policy</h5>
                    <p>Your use of the platform is also governed by our Privacy Policy, which is incorporated into these Terms by this reference. Please review our Privacy Policy to understand our practices.</p>
                    <h5>8. Limitation of Liability</h5>
                    <p>The platform is provided "as is" and "as available" without warranties of any kind, either express or implied. UniSource does not guarantee the accuracy, completeness, or usefulness of any information on the platform and will not be liable for any loss or damage caused by your reliance on such information.</p>
                    <h5>9. Termination</h5>
                    <p>UniSource reserves the right to terminate or suspend access to the platform for any reason, including, but not limited to, a breach of these Terms. Users may also terminate their accounts at any time.</p>
                    <h5>10. Modifications to Terms</h5>
                    <p>UniSource reserves the right to modify these Terms at any time. Any changes will be effective immediately upon posting on the platform. Your continued use of the platform after any such changes constitutes your acceptance of the new Terms.</p>
                    <h5>11. Governing Law</h5>
                    <p>These Terms are governed by and construed in accordance with the laws of the jurisdiction in which the University of Sri Jayewardenepura is located, without regard to its conflict of law principles.</p>
                    <h5>12. Contact Information</h5>
                    <p>For any questions about these Terms, please contact us at unisourcefot@gmail.com.</p>
                </div>
            </div>
        </>
    );
};
export default TermsAndConditions;