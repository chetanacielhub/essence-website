/**
 * ESSENCE Registration Portal Configuration
 * Centralized schema, options, validation rules, and pricing structure.
 * Sourced directly from the official ESSENCE Competition Guidelines (PAGE 5 & PAGE 8).
 */

export interface RegistrationConfig {
  feeStructure: {
    teamFee: number;
    chetanaStudentFee: number;
    otherCollegeFee: number;
    currency: string;
    upiId: string;
    accountName: string;
    bankName: string;
    accountNumber: string;
    ifscCode: string;
    contacts: { name: string; phone: string }[];
  };
  participantCategories: { id: string; label: string; fee: number }[];
  pursuingLevels: string[];
  yearsOfStudy: string[];
}

export const registrationConfig: RegistrationConfig = {
  feeStructure: {
    teamFee: 500,
    chetanaStudentFee: 200,
    otherCollegeFee: 500,
    currency: 'INR',
    upiId: 'ciel.essence@okhdfcbank',
    accountName: "Chetana's CiEL - ESSENCE",
    bankName: 'HDFC Bank Ltd.',
    accountNumber: '50200088921430',
    ifscCode: 'HDFC0000019',
    contacts: [
      { name: 'PREM SHARMA', phone: '+91 9833883098' },
      { name: 'AKSHAY DUBEY', phone: '+91 8451942277' },
    ],
  },
  participantCategories: [
    {
      id: 'chetana',
      label: 'Chetana Institute Student',
      fee: 200,
    },
    {
      id: 'other',
      label: 'Other Institute Student',
      fee: 500,
    },
  ],
  pursuingLevels: ['Under-Graduate', 'Post-Graduate', 'Other'],
  yearsOfStudy: ['1st Year', '2nd Year', '3rd Year', '4th Year'],
};

export interface RegistrationFormData {
  // Idempotency
  idempotencyKey?: string;

  // Step 1: Participant / Team Leader Details
  teamLeaderName: string;
  teamLeaderEmail: string;
  teamLeaderPhone: string;
  participantCategory: 'Chetana Institute Student' | 'Other Institute Student' | '';

  // Step 2: Academic Details
  collegeName: string;
  course: string;
  pursuingLevel: 'Under-Graduate' | 'Post-Graduate' | 'Other' | '';
  yearOfStudy: '1st Year' | '2nd Year' | '3rd Year' | '4th Year' | '';
  department: string;

  // Step 3: Innovation / Competition Details
  teamName: string;
  participationType: 'team';
  teamMember2Name: string;
  teamMember2Email: string;
  teamMember3Name: string;
  teamMember3Email: string;
  teamMember4Name: string;
  teamMember4Email: string;
  projectTitle: string;
  innovationTrack: string;
  customTrackName?: string;
  problemStatement: string;
  proposedSolution: string;
  projectSummary: string;
  pptUrlOrFileName: string;
  pptBase64?: string;

  // Step 4: Payment Details
  registrationFee: number;
  utrTransactionNumber: string;
  paymentReceiptUrlOrFileName: string;
  paymentReceiptBase64?: string;

  // Step 5: Consents
  agreeRules: boolean;
  agreeAccurate: boolean;
}

export const initialRegistrationFormData: RegistrationFormData = {
  teamLeaderName: '',
  teamLeaderEmail: '',
  teamLeaderPhone: '',
  participantCategory: 'Other Institute Student',

  collegeName: '',
  course: 'B.Tech / B.E.',
  pursuingLevel: 'Under-Graduate',
  yearOfStudy: '3rd Year',
  department: '',

  teamName: '',
  participationType: 'team',
  teamMember2Name: '',
  teamMember2Email: '',
  teamMember3Name: '',
  teamMember3Email: '',
  teamMember4Name: '',
  teamMember4Email: '',

  projectTitle: '',
  innovationTrack: 'ai-ml',
  customTrackName: '',
  problemStatement: '',
  proposedSolution: '',
  projectSummary: '',
  pptUrlOrFileName: '',
  pptBase64: '',

  registrationFee: 500,
  utrTransactionNumber: '',
  paymentReceiptUrlOrFileName: '',
  paymentReceiptBase64: '',

  agreeRules: false,
  agreeAccurate: false,
};
