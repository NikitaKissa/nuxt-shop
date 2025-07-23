export function useProductsByID(id) {
    const config = useRuntimeConfig()

    return useAsyncData("product",
        () => $fetch(`${config.public.apiBase}/products/find?id=${id}`),
    )
}