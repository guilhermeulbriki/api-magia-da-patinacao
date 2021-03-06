import AppError from '@shared/errors/AppError';
import UpdateEnrollmentService from '../services/UpdateEnrollmentService';
import FakeEnrollmentsRepository from '../repositories/fakes/FakeEnrollmentsRepository';

let fakeEnrollmentsRepository: FakeEnrollmentsRepository;
let updateEnrollment: UpdateEnrollmentService;

describe('UpdateEnrollment', () => {
  beforeEach(() => {
    fakeEnrollmentsRepository = new FakeEnrollmentsRepository();

    updateEnrollment = new UpdateEnrollmentService(fakeEnrollmentsRepository);
  });

  it('should be able to update a enrollment', async () => {
    const group = await fakeEnrollmentsRepository.create('123');

    jest.spyOn(Date, 'now').mockImplementation(() => {
      return new Date(2020, 6, 16).getTime();
    });

    const updatedEnrollment = await updateEnrollment.execute(group.student_id);

    const currentDate = new Date(2020, 6, 16);

    expect(updatedEnrollment.updated_at).toStrictEqual(currentDate);
  });

  it('should not be able to update a enrollment if student is not registered', async () => {
    await expect(updateEnrollment.execute('123')).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
