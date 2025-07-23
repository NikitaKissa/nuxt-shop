export function useProducts() {
    const config = useRuntimeConfig()

    return useAsyncData('products', () =>
        $fetch(`${config.public.apiBase}/products/`)
    )
}
