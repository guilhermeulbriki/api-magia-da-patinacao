import { Router } from 'express';

import checkAdminAuthenticated from '@shared/infra/http/middlewares/checkAdminAuthenticated';
import GroupsController from '../controllers/GroupsController';

const groupsRouter = Router();
const groupsController = new GroupsController();

groupsRouter.use(checkAdminAuthenticated);

groupsRouter.get('/:id', groupsController.show);
groupsRouter.post('/', groupsController.create);
groupsRouter.put('/', groupsController.update);
groupsRouter.delete('/:id', groupsController.delete);

export default groupsRouter;
