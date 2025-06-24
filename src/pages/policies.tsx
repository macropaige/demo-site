// src/pages/policies.tsx
import React from 'react';
import './policies.scss'; // Link to the new SCSS file
import InteractiveCard from '../components/InteractiveCard'; // Re-use the InteractiveCard component

const Policies: React.FC = () => {
    return (
        <div className="policies-page">
            <section className="policies-hero">
                <h1>Our Company Policies</h1>
                <p>
                    This section provides access to all official company policies and guidelines. 
                    Please review them to ensure compliance and understanding.
                </p>
            </section>

            <section className="policy-categories">
                <h2>Policy Categories</h2>
                <div className="card-grid">
                    <InteractiveCard
                        title="Human Resources Policies"
                        description="Access guidelines on employment, conduct, benefits, and leave."
                        link="file://oaoepwvfs003/home/Departments/" // Example SharePoint link for HR policies
                    />
                    <InteractiveCard
                        title="IT Security Policies"
                        description="Review protocols for data protection, network usage, and system access."
                        link="https://usoncologynet.sharepoint.com/sites/GRPwvciit/SitePages/Home.aspx" // Example SharePoint link for Security policies
                    />
                    <InteractiveCard
                        title="Data Management & Privacy"
                        description="Understand our standards for data handling, storage, and privacy regulations."
                        link="https://sharepoint.example.com/sites/ITDepartment/Policies/Data" // Example SharePoint link for Data policies
                    />
                    <InteractiveCard
                        title="Software Usage Guidelines"
                        description="Find guidelines for software installation and acceptable use."
                        link="file:///your/company/shared/drive/ITDepartment/Policies/SoftwareUsageGuidelines.pdf" // Example link to shared drive for a PDF
                    />
                    <InteractiveCard
                        title="Employee Handbook"
                        description="Your comprehensive guide to company culture, expectations, and resources."
                        link="https://sharepoint.example.com/sites/ITDepartment/Policies/EmployeeHandbook.docx" // Example SharePoint link for a document
                    />
                    <InteractiveCard
                        title="More"
                        description="Don't click here, there isn't actually more."
                        link="file:///your/company/shared/drive/Finance/ExpenseReportProcedure.xlsx" // Example link to a shared drive for an Excel file
                    />
                </div>
            </section>

            <section className="additional-resources">
                <h2>Need Help?</h2>
                <p>
                    If you have questions about any policy or require further clarification, please reach out to the relevant department.
                </p>
                <ul>
                    <li>For HR-related policies: <a href="mailto:hr@example.com">hr@example.com</a></li>
                    <li>For IT-related policies: <a href="mailto:it@example.com">it-support@example.com</a></li>
                </ul>
            </section>
        </div>
    );
};

export default Policies;