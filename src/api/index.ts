import useQuery from "../hooks/useQuery";

interface UserInfo {
    name: string;
}
export const getA = (state: number) => {
    const getData = async () => {
        const res = await fetch(`/a?id${state}`);
        return res.json();
    };
    const res = useQuery<UserInfo>({
        queryFn: () => getData(),
    });
    return res
}