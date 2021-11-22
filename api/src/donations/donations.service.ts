import { Injectable } from '@nestjs/common';
import { Donation } from '../graphql';
import { CreateDonationInput } from './dto/create-donation.input';

@Injectable()
export class DonationsService {
  create(createDonationInput: CreateDonationInput) {
    return 'This action adds a new donation';
  }

  findAll(): Donation[] {
    return [
      {
        exampleField: 1,
      },
    ];
  }

  findOne(id: number): Donation {
    return {
      exampleField: 1,
    };
  }
}
