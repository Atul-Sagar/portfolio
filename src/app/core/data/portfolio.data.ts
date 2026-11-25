import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [

    {
        id: 'saathi',

        title: 'SAATHI',

        role: 'Application Owner',

        shortDescription:
            'Enterprise insurance platform supporting sales, servicing and operational workflows.',

        overview:
            'SAATHI is a business-critical enterprise application supporting SBI Life operational processes. As the primary application owner, I manage the complete application lifecycle including development, releases, production support, stakeholder communication, and platform governance.',

        responsibilities: [
            'End-to-End Application Ownership',
            'Application Lifecycle Management',
            'Production Support & Incident Resolution',
            'Release Management & Governance',
            'Security Reviews using Fortify',
            'Business Stakeholder Coordination',
            'Vendor Coordination'
        ],

        technologies: [
            '.NET',
            'Angular',
            'REST APIs',
            'SOAP Services',
            'Fortify'
        ],

        achievements: [
            'Primary application owner',
            'Managed enterprise releases',
            'Delivered business-critical enhancements',
            'Ensured production stability'
        ]
    },

    {
        id: 'whatsapp',

        title: 'WhatsApp Business Integration',

        role: 'Senior Developer',

        shortDescription:
            'Customer communication platform using Gupshup and WhatsApp Business APIs.',

        overview:
            'Implemented WhatsApp Business communication capabilities through Gupshup to support customer engagement campaigns, notifications, and digital communication initiatives.',

        responsibilities: [
            'Template Creation',
            'Template Whitelisting',
            'Campaign Management',
            'Vendor Coordination',
            'Business Requirement Analysis',
            'Production Support'
        ],

        technologies: [
            'Gupshup',
            'WhatsApp Business API',
            'REST API',
            'JSON'
        ],

        achievements: [
            'Enabled WhatsApp customer communication',
            'Supported engagement campaigns',
            'Improved customer outreach capabilities'
        ]
    },

    {
        id: 'vertex-ai',

        title: 'Test Case Generator',

        role: 'AI Initiative',

        shortDescription:
            'AI-based test case generation solution using Google Vertex AI.',

        overview:
            'Designed and implemented an AI-powered system capable of generating test cases directly from Business Requirement Documents through Vertex AI and prompt engineering.',

        responsibilities: [
            'Prompt Engineering',
            'AI Model Integration',
            'UI Development',
            'Requirement Analysis',
            'Solution Design'
        ],

        technologies: [
            'Google Vertex AI',
            'Generative AI',
            'Angular',
            'Prompt Engineering'
        ],

        achievements: [
            'Reduced manual testing effort',
            'Accelerated test preparation process',
            'Demonstrated AI productivity gains'
        ]
    },

    {
        id: 'cobrowsing',
    
        title: 'Co-Browsing Solution',
    
        role: 'Solution Designer & Developer',
    
        shortDescription:
            'Real-time collaboration platform enabling customers and support representatives to navigate applications together.',
    
        overview:
            'Designed and developed a custom co-browsing solution to facilitate guided digital interactions between customers and support teams. The platform enabled real-time synchronization and enhanced customer assistance during online journeys.',
    
        responsibilities: [
            'Solution Design',
            'Frontend Development',
            'Backend Development',
            'Real-Time Communication Implementation',
            'Integration Design',
            'Testing & Deployment'
        ],
    
        technologies: [
            'Angular',
            'Node.js',
            'WebSockets',
            'JavaScript'
        ],
    
        achievements: [
            'Designed end-to-end solution architecture',
            'Implemented real-time collaboration capabilities',
            'Improved customer support experience'
        ]
    },
    {
        id: 'product-configurator',
    
        title: 'Product Configurator',
    
        role: 'Solution Architect & Technical Lead',
    
        shortDescription:
            'Defined architecture and reusable framework components for configurable insurance products.',
    
        overview:
            'Established the technical architecture, integration strategy, workflows, and reusable framework components for a configurable product platform. The project focused on scalability, maintainability, and future product customization capabilities.',
    
        responsibilities: [
            'Solution Architecture',
            'Technical Framework Design',
            'Workflow Design',
            'System Integration Planning',
            'Requirement Analysis',
            'Technical Leadership'
        ],
    
        technologies: [
            'Angular',
            'System Design',
            'UML',
            'REST APIs'
        ],
    
        achievements: [
            'Established foundational architecture',
            'Created reusable framework modules',
            'Defined integration strategy'
        ]
    },
    {
        id: 'mconnect',
    
        title: 'MConnect PWA',
    
        role: 'Senior Developer',
    
        shortDescription:
            'Angular-based enterprise sales platform modernization initiative.',
    
        overview:
            'Contributed to enhancement and modernization of SBI Life’s flagship sales platform through Angular-based Progressive Web Application development. Worked on proposal journeys, workflow screens, and document management capabilities.',
    
        responsibilities: [
            'Angular Development',
            'PWA Development',
            'REST API Integration',
            'Workflow Development',
            'Requirement Analysis',
            'Production Support'
        ],
    
        technologies: [
            'Angular',
            'PWA',
            'REST APIs',
            'JavaScript'
        ],
    
        achievements: [
            'Modernized legacy functionality',
            'Enhanced sales workflows',
            'Improved user experience'
        ]
    },
    {
        id: 'clip',
    
        title: 'CLIP PWA',
    
        role: 'Module Lead',
    
        shortDescription:
            'Claims Lifecycle Investigation Portal for centralized case tracking and investigations.',
    
        overview:
            'Designed and developed the Vendor Investigator module within the Claims Lifecycle Investigation Portal. The solution centralized investigation case management and improved operational visibility for insurance investigations.',
    
        responsibilities: [
            'Module Design',
            'Angular Development',
            'Requirement Analysis',
            'Vendor Workflow Design',
            'System Design',
            'Production Support'
        ],
    
        technologies: [
            'Angular',
            'PWA',
            'UML',
            'System Design'
        ],
    
        achievements: [
            'Delivered Vendor Investigator module',
            'Centralized investigation workflows',
            'Improved case tracking capabilities'
        ]
    },
    {
        id: 'whatsapp',
    
        title: 'WhatsApp Business Integration',
    
        role: 'Senior Developer',
    
        shortDescription:
            'Customer engagement platform leveraging Gupshup and WhatsApp Business APIs.',
    
        overview:
            'Integrated the Gupshup WhatsApp Business Platform to support customer communication campaigns, notifications, template management, and digital engagement initiatives across SBI Life customer journeys.',
    
        responsibilities: [
            'Template Creation',
            'Template Whitelisting',
            'Campaign Enablement',
            'Vendor Coordination',
            'Business Requirement Analysis',
            'Production Support'
        ],
    
        technologies: [
            'Gupshup',
            'WhatsApp Business API',
            'REST APIs',
            'JSON'
        ],
    
        achievements: [
            'Enabled WhatsApp customer communication',
            'Supported campaign automation',
            'Improved digital customer engagement'
        ]
    },
    {
        id: 'vertex-ai',
    
        title: 'Test Case Generator',
    
        role: 'AI Initiative',
    
        shortDescription:
            'AI-powered solution for generating test cases from BRDs using Google Vertex AI.',
    
        overview:
            'Implemented a proof-of-concept solution using Google Vertex AI and prompt engineering techniques to automatically generate test cases from Business Requirement Documents and reduce manual testing effort.',
    
        responsibilities: [
            'Prompt Engineering',
            'AI Integration',
            'Requirement Analysis',
            'Solution Design',
            'Frontend Development'
        ],
    
        technologies: [
            'Google Vertex AI',
            'Generative AI',
            'Prompt Engineering',
            'Angular'
        ],
    
        achievements: [
            'Reduced manual test design effort',
            'Accelerated test preparation process',
            'Demonstrated practical AI adoption'
        ]
    }
];