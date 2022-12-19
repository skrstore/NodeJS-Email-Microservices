export type ErrorType = 'A' | 'B';

export type Environment = 'dev' | 'prod' | 'test';

export interface ErrorObjectType {
  id: string;
  instituteId: string;
  businessId: string;
  errorType: ErrorType;
  createdAt: Date;
  environment: Environment;
  region: string;
  service: string;
}

export const SampleErrors: ErrorObjectType[] = [
  {
    id: '0001',
    instituteId: 'i_0001',
    businessId: 'b_0001',
    errorType: 'A',
    createdAt: new Date(),
    environment: 'dev',
    region: 'india',
    service: 'node-logger',
  },
  {
    id: '0002',
    instituteId: 'i_0002',
    businessId: 'b_0002',
    errorType: 'A',
    createdAt: new Date(),
    environment: 'dev',
    region: 'india',
    service: 'node-logger',
  },
  {
    id: '0003',
    instituteId: 'i_0003',
    businessId: 'b_0003',
    errorType: 'A',
    createdAt: new Date(),
    environment: 'dev',
    region: 'india',
    service: 'node-logger',
  },
  {
    id: '0004',
    instituteId: 'i_0004',
    businessId: 'b_0004',
    errorType: 'A',
    createdAt: new Date(),
    environment: 'dev',
    region: 'india',
    service: 'node-logger',
  },
  {
    id: '0005',
    instituteId: 'i_0005',
    businessId: 'b_0005',
    errorType: 'A',
    createdAt: new Date(),
    environment: 'dev',
    region: 'india',
    service: 'node-logger',
  },
  {
    id: '0006',
    instituteId: 'i_0006',
    businessId: 'b_0006',
    errorType: 'A',
    createdAt: new Date(),
    environment: 'dev',
    region: 'india',
    service: 'node-logger',
  },
  {
    id: '0007',
    instituteId: 'i_0007',
    businessId: 'b_0007',
    errorType: 'A',
    createdAt: new Date(),
    environment: 'dev',
    region: 'india',
    service: 'node-logger',
  },
];
