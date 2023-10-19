import { ShowWelcomeMessageControllerFactory } from '@/main/factories/controllers'

export const routes: RouteType = [
  {
    path: '/',
    method: 'get',
    controller: ShowWelcomeMessageControllerFactory.getInstance().make()
  }
]

export type RouteType = Array<{
  path: string
  method: 'all' | 'get' | 'post' | 'put' | 'delete' | 'patch' | 'options' | 'head'
  controller: any
}>
