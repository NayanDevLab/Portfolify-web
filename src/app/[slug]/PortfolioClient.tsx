'use client';

import TemplateOne from '@/components/templates/TemplateOne';
import TemplateTwo from '@/components/templates/TemplateTwo';

export default function PortfolioClient() {
    const template = 'template2';

    const renderTemplate = () => {
        switch (template) {
            // case 'template1':
            //     return <DefaultTemplate />;
            case 'template2':
                return <TemplateOne />;
            default:
                return <TemplateTwo />;
        }
    };

    return <>{renderTemplate()}</>;
}
