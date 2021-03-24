import { Test, TestingModule } from '@nestjs/testing';
import { RegularExpenseService } from './regular-expense.service';

describe('RegularExpenseService', () => {
  let service: RegularExpenseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegularExpenseService],
    }).compile();

    service = module.get<RegularExpenseService>(RegularExpenseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
