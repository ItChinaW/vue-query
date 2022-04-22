import { Ref, ref, watch } from "vue"
import { DebounceTime, PromiseTimeout, ThrottleTime } from "../utils"

interface useQueryOptions {
    delay?: number
    debounceTime?: number
    throttleTime?: number
}
interface useQueryProps<T> {
    queryKey?: Array<Ref<any>>
    queryFn: () => Promise<T>
    options?: useQueryOptions
}
const useQuery = <T>({ queryFn, queryKey = [], options = {} as useQueryOptions }: useQueryProps<T>) => {
    const loading = ref(false), data = ref<T>(), error = ref<unknown>()
    const { delay = 0, debounceTime = 0, throttleTime = 0 } = options
    const getData = async () => {
        loading.value = true
        try {
            if (delay > 0) await PromiseTimeout(delay)
            data.value = await queryFn()
            loading.value = false
        } catch (err) {
            error.value = err
            loading.value = false
        }
    }
    getData()

    watch(queryKey, () => {
        if (debounceTime > 0) {
            loading.value = true
            DebounceTime(debounceTime, getData)()
            return
        }
        if (throttleTime > 0) {
            loading.value = true
            ThrottleTime(throttleTime, getData)()
            return
        }
        getData()
    })
    return {
        loading,
        data,
        error
    }
}
export default useQuery