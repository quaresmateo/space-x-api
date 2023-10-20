import { ListLaunchesControllerFactory, ShowWelcomeMessageControllerFactory } from '@/main/factories/controllers'

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
  controller: any
}>
