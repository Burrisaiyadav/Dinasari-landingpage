import { prisma } from '../config/db.js';
import { Subscriber } from '@prisma/client';

export const findSubscriberByEmail = async (email: string): Promise<Subscriber | null> => {
  return prisma.subscriber.findUnique({
    where: { email },
  });
};

export const createSubscriber = async (email: string): Promise<Subscriber> => {
  return prisma.subscriber.create({
    data: { email },
  });
};
