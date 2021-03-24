import { Test, TestingModule } from '@nestjs/testing';
import { RegularExpenseController } from './regular-expense.controller';

describe('RegularExpenseController', () => {
  let controller: RegularExpenseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegularExpenseController],
    }).compile();

    controller = module.get<RegularExpenseController>(RegularExpenseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
