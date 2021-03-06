import AppError from '@shared/errors/AppError';
import UpdateGroupService from '../services/UpdateGroupService';
import FakeGroupsRepository from '../repositories/fakes/FakeGroupsRepository';

let fakeGroupsRepository: FakeGroupsRepository;
let updateGroup: UpdateGroupService;

describe('UpdateGroup', () => {
  beforeEach(() => {
    fakeGroupsRepository = new FakeGroupsRepository();

    updateGroup = new UpdateGroupService(fakeGroupsRepository);
  });

  it('should be able to update a group', async () => {
    const group = await fakeGroupsRepository.create({
      name: 'branca',
      city: 'fw',
      color: 'branca',
      instructor: 'gui',
    });

    const updatedGroup = await updateGroup.execute({
      id: group.id,
      name: 'branca',
      city: 'fw',
      color: 'COR-ALTERADA',
      instructor: 'gui',
    });

    expect(updatedGroup.color).toBe('COR-ALTERADA');
  });

  it('should not be able to update a group if does not exist', async () => {
    await expect(
      updateGroup.execute({
        id: 'haufhaufaf',
        name: 'branca',
        city: 'fw',
        color: 'COR-ALTERADA',
        instructor: 'gui',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update a group with same name and city from other', async () => {
    const group = await fakeGroupsRepository.create({
      name: 'branca',
      city: 'fw',
      color: 'branca',
      instructor: 'Julia Frizon',
    });

    await fakeGroupsRepository.create({
      name: 'SAME-NAME',
      city: 'fw',
      color: 'azul',
      instructor: 'Julia Frizon',
    });

    await expect(
      updateGroup.execute({
        id: group.id,
        name: 'SAME-NAME',
        city: 'fw',
        color: 'azul',
        instructor: 'Julia Frizon',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
