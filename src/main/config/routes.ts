import { ListLaunchesControllerFactory, ShowWelcomeMessageControllerFactory } from '@/main/factories/controllers'
import { type Controller } from '@/presentation/controllers/controller-abstract'

export const routes: RouteType = [
  {
    path: '/',
    method: 'get',
    controller: ShowWelcomeMessageControllerFactory.getInstance().make()
  },
  {
    path: '/launches',
    method: 'get',
    controller: ListLaunchesControllerFactory.getInstance().make()
  }
]

export type RouteType = Array<{
  path: string
  method: 'all' | 'get' | 'post' | 'put' | 'delete' | 'patch' | 'options' | 'head'
  controller: Controller
}>
