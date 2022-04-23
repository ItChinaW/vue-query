import useQuery from "../hooks/useQuery";

interface UserInfo {
    name: string;
}
export const getA = () => {
    const getData = async (id: any) => {
        const res = await fetch(`/a`);
        return res.json();
    };
    const res = useQuery<UserInfo>({
        queryFn: (args) => getData(args?.id),
    });
    return res
}