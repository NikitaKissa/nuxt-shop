export function useProductsByIDs(ids) {

    if (!Array.isArray(ids) || ids.length === 0) {
        return {
            data: ref(null),
            pending: ref(false),
            empty: true,
            error: ref(null),
            refresh: () => {}
        }
    }

    const { data, pending, error, refresh } = useFetch(`/api/products/find?ids=${ids.join(',')}`);

    return {
        data,
        empty: false,
        pending,
        error,
        refresh
    }
}