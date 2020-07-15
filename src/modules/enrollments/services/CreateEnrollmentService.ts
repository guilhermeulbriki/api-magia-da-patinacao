import 'reflect-metadata';

import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

import IEnrollmentsRepository from '@modules/enrollments/repositories/IEnrollmentsRepository';

import Enrollment from '../infra/typeorm/entities/Enrollments';

interface CreateEnrollment {
  student_id: string;
}

@injectable()
class CreateEnrollmentService {
  constructor(
    @inject('EnrollmentsRepository')
    private enrollmentsRepository: IEnrollmentsRepository,
  ) {}

  public async execute(student_id: string): Promise<Enrollment> {
    const findedStudent = await this.enrollmentsRepository.findByStudentId(
      student_id,
    );

    if (findedStudent) {
      throw new AppError('Este aluno já se encontra matriculado');
    }

    return this.enrollmentsRepository.create(student_id);
  }
}

export default CreateEnrollmentService;