import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useRouter as useNextRouter} from 'next/navigation'

export enum Routes {
    page2='./page2',
    home='./'
}


export default function useRouter(){
    const nextRouter = useNextRouter()
    return {
        ...nextRouter,
        push: (route: keyof typeof Routes) => (nextRouter.push(Routes[route]))
    }
}