export interface User {
    userId: string;
    identifier: string;
    firstName: string;
    lastName?: string;
    rootOrg: RootOrg;
    tncAcceptedVersion: string;
    tncAcceptedOn: string;
    tncLatestVersion: string;
    promptTnC: boolean;
    tncLatestVersionUrl: string;
    id: string;
    avatar: string;
    // webPages: string[];
    // "tcStatus": null,
    // education: [],
    // "gender": null,
    // "subject": [],
    // "roles": [
    // "PUBLIC"
    //    ],
    // "channel": null,
    // "language": [],
    // "updatedDate": null,
    // "skills": null,
    // "badgeAssertions": [],
    // "isDeleted": false,
    // "organisations": [],
    // "countryCode": "",
    // "tempPassword": null,
    // "email": "",
    // "phoneVerified": null,
    // "thumbnail": null,
    // "address": [],
    // "jobProfile": [],
    // "profileSummary": null,
    // "tcUpdatedDate": null,
    // "registryId": null,
    // "userName": "",
    // "rootOrgId": "ORG_001",
    // "emailVerified": false,
    // "lastLoginTime": null,
    // "createdDate": "2018-06-07 14:35:47:947+0000",
    // "createdBy": "",
    // "phone": null,
    // "dob": null,
    // "grade": [],
    // "currentLoginTime": null,
    // "location": "",
    // "status": 1
}

export interface RootOrg {
    rootOrgId?: string;
    orgName?: string;
    slug?: string;
    hashTagId: string;
}

export interface Location {
    code: string;
    name: string;
    id: string;
    type: string;
}

export interface Feed {
    id: string;
    userId: string;
    category: string;
    priority: number;
    createdBy: string;
    createdOn: string;
    channel: string;
    status: string;
    expireOn: string;
    data: {
        prospectChannels: string[];
    };
}
