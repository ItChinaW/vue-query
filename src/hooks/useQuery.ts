import { Ref, ref, watch } from "vue"
import { DebounceTime, PromiseTimeout, ThrottleTime } from "../utils"

interface useQueryOptions {
    delay?: number

}
interface useQueryProps<T> {
    queryKey?: Array<Ref<any>>
    queryFn: (...args: any[]) => Promise<T>
    options?: useQueryOptions
}
const useQuery = <T>({ queryFn, queryKey = [], options = {} as useQueryOptions }: useQueryProps<T>) => {
    const loading = ref(false), data = ref<T>(), error = ref<unknown>()
    const { delay = 0 } = options
    const getData = async (...args: any[]) => {
        loading.value = true
        try {
            if (delay > 0) await PromiseTimeout(delay)
            data.value = await queryFn(...args)
            loading.value = false
        } catch (err) {
            error.value = err
            loading.value = false
        }
    }
    getData()
    const execute = (debounceTime = 0, throttleTime = 0, ...args: any[]) => {
        if (debounceTime > 0) {
            loading.value = true
            DebounceTime(debounceTime, () => { getData(...args) })()
            return
        }
        if (throttleTime > 0) {
            loading.value = true
            ThrottleTime(throttleTime, () => getData(...args))()
            return
        }
        getData(...args)
    }

    // watch(queryKey, () => {
    //     getData()
    // })
    return {
        loading,
        data,
        error,
        execute
    }
}
export default useQuery