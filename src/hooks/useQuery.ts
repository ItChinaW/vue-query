import { Ref, ref, watch } from "vue"

interface useQueryProps<T> {
    queryKey?: Array<Ref<any>>
    queryFn: () => Promise<T>
    delay?: number
}
const useQuery = <T>({ queryFn, queryKey = [], delay }: useQueryProps<T>) => {
    const loading = ref(false)
    const data = ref<T>()
    const error = ref<unknown>()
    const getData = async () => {
        loading.value = false
        try {
            data.value = await queryFn()
            loading.value = true
        } catch (err) {
            error.value = err
        }
    }
    if (delay) setTimeout(() => getData(), delay)
    else getData()

    watch(queryKey, () => {
        getData()
    })
    return {
        loading,
        data,
        error
    }
}
export default useQuery