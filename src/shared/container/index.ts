import { container } from 'tsyringe';

import '@modules/sponsors/providers';

import ISponsorRepository from '@modules/sponsors/repositories/ISponsorRepository';
import SponsorRepository from '@modules/sponsors/infra/typeorm/repositories/SponsorRepository';

import IStudentRepository from '@modules/students/repositories/IStudentRepository';
import StudentRepository from '@modules/students/infra/typeorm/repositories/StudentRepository';

import IAdminRepository from '@modules/administrators/repositories/IAdminRepository';
import AdminRepository from '@modules/administrators/infra/typeorm/repositories/AdminRepository';

import IGroupsRepository from '@modules/groups/repositories/IGroupsRepository';
import GroupsRepository from '@modules/groups/infra/typeorm/repositories/GroupsRepository';

container.registerSingleton<ISponsorRepository>(
  'SponsorRepository',
  SponsorRepository,
);

container.registerSingleton<IStudentRepository>(
  'StudentRepository',
  StudentRepository,
);

container.registerSingleton<IAdminRepository>(
  'AdminRepository',
  AdminRepository,
);

container.registerSingleton<IGroupsRepository>(
  'GroupsRepository',
  GroupsRepository,
);